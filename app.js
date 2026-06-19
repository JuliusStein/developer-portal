const data = window.FORMLABS_DATA;

const httpList = document.querySelector("#http-reference-list");
const sdkList = document.querySelector("#sdk-reference-list");
const examplesList = document.querySelector("#examples-list");
const httpSearch = document.querySelector("#http-search");
const sdkSearch = document.querySelector("#sdk-search");
const httpCount = document.querySelector("#http-count");
const sdkCount = document.querySelector("#sdk-count");
const httpFilterButtons = document.querySelectorAll("[data-http-filter]");
const sdkFilterButtons = document.querySelectorAll("[data-sdk-filter]");
const apiJumpLinks = document.querySelectorAll("[data-api-target]");
const codeSwitchers = document.querySelectorAll("[data-code-switcher]");
const httpDocumentation = document.querySelector(".http-documentation");
const sdkExpandAllButton = document.querySelector("[data-sdk-expand-all]");
const sdkCollapseAllButton = document.querySelector("[data-sdk-collapse-all]");

let activeHttpFilter = "all";
let activeSdkFilter = "all";

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const highlightPython = (source) => {
  const keywords = "and|as|assert|async|await|break|class|continue|def|del|elif|else|except|False|finally|for|from|global|if|import|in|is|lambda|None|nonlocal|not|or|pass|raise|return|True|try|while|with|yield";
  const builtins = "dict|enumerate|float|int|len|list|open|print|range|set|str|super|tuple";
  const pattern = new RegExp(
    `(#.*$)|(\"\"\"[\\s\\S]*?\"\"\"|'''[\\s\\S]*?'''|\"(?:\\\\.|[^\"\\\\])*\"|'(?:\\\\.|[^'\\\\])*')|\\b(${keywords})\\b|\\b(${builtins})\\b|\\b(\\d+(?:\\.\\d+)?)\\b`,
    "gm",
  );

  let highlighted = "";
  let cursor = 0;
  source.replace(pattern, (match, comment, string, keyword, builtin, number, offset) => {
    highlighted += escapeHtml(source.slice(cursor, offset));
    const escaped = escapeHtml(match);
    if (comment) highlighted += `<span class="py-comment">${escaped}</span>`;
    else if (string) highlighted += `<span class="py-string">${escaped}</span>`;
    else if (keyword) highlighted += `<span class="py-keyword">${escaped}</span>`;
    else if (builtin) highlighted += `<span class="py-builtin">${escaped}</span>`;
    else if (number) highlighted += `<span class="py-number">${escaped}</span>`;
    else highlighted += escaped;
    cursor = offset + match.length;
    return match;
  });
  highlighted += escapeHtml(source.slice(cursor));
  return highlighted;
};

const highlightPythonSnippets = (root = document) => {
  root.querySelectorAll("code.language-python").forEach((code) => {
    if (code.dataset.highlighted === "true") return;
    code.innerHTML = highlightPython(code.textContent);
    code.dataset.highlighted = "true";
  });
};

const sourceBadge = (source) => {
  const local = source.startsWith("Local");
  return `<span class="pill${local ? "" : " blue"}">${local ? "Local" : "Web"}</span>`;
};

const paramsTable = (params, empty = "No parameters documented.") => {
  if (!params?.length) {
    return `<p>${empty}</p>`;
  }

  const rows = params.map((param) => `
    <tr>
      <td><code>${escapeHtml(param.name)}</code></td>
      <td>${escapeHtml(param.type || "value")}</td>
      <td>${escapeHtml(param.description || "")}${param.notes ? `<br><small>${escapeHtml(param.notes)}</small>` : ""}</td>
    </tr>
  `).join("");

  return `
    <table class="mini-table">
      <thead><tr><th>Name</th><th>Type</th><th>Notes</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>
  `;
};

const statusesTable = (statuses) => {
  if (!statuses?.length) {
    return "<p>Status codes are documented in the upstream reference.</p>";
  }

  return `
    <table class="mini-table">
      <thead><tr><th>Status</th><th>Description</th></tr></thead>
      <tbody>
        ${statuses.map((status) => `
          <tr><td><code>${escapeHtml(status.code)}</code></td><td>${escapeHtml(status.description || "")}</td></tr>
        `).join("")}
      </tbody>
    </table>
  `;
};

const apiMethodBlocks = (methods) => {
  if (!methods?.length) {
    return "<p>No SDK methods are documented in this file.</p>";
  }

  return methods.map((method) => `
    <section class="sdk-method">
      <h4>${escapeHtml(method.name)}</h4>
      <p>${escapeHtml(method.description || "Generated SDK method.")}</p>
      <p><code>${escapeHtml(method.signature || `${method.name}(...)`)}</code></p>
      <h4>Parameters</h4>
      ${paramsTable(method.params)}
      <h4>Return type</h4>
      <p><code>${escapeHtml(method.returnType || "See upstream schema")}</code></p>
      <h4>HTTP responses</h4>
      ${statusesTable(method.statuses)}
      ${method.example ? `<pre><code class="language-python">${escapeHtml(method.example)}</code></pre>` : ""}
    </section>
  `).join("");
};

const docHaystack = (doc) => [
  doc.source,
  doc.package,
  doc.kind,
  doc.title,
  doc.file,
  doc.summary,
  ...(doc.methods || []).flatMap((method) => [
    method.name,
    method.signature,
    method.description,
    method.returnType,
    ...(method.params || []).flatMap((param) => [param.name, param.type, param.description]),
  ]),
  ...(doc.properties || []).flatMap((property) => [
    property.name,
    property.type,
    property.description,
    property.notes,
  ]),
].join(" ").toLowerCase();

const shortSdkSymbol = (title) =>
  title.replace(/^formlabs_(local|web)_api\./, "");

const isDeprecatedSdkRow = (row) =>
  /deprecated/i.test(row.group) ||
  /deprecated/i.test(row.symbol) ||
  /deprecated/i.test(row.summary || "") ||
  /deprecated/i.test(row.method?.description || "");

const setActiveButton = (buttons, attribute, value) => {
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset[attribute] === value);
  });
};

const renderHttpReference = () => {
  const query = httpSearch.value.trim().toLowerCase();
  const filtered = data.endpoints.filter((item) => {
    const matchesFilter = activeHttpFilter === "all" || item.source === activeHttpFilter;
    const haystack = [
      item.source,
      item.apiClass,
      item.method,
      item.verb,
      item.path,
      item.summary,
      item.detail?.description,
      item.detail?.returnType,
    ].join(" ").toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  });

  httpCount.textContent = `${filtered.length}/${data.endpoints.length}`;

  const rows = filtered.map((item, index) => {
    const detail = item.detail || {};
    const verbClass = item.verb.toLowerCase();
    return `
      <tr class="reference-row">
        <td data-label="API">${sourceBadge(item.source)}</td>
        <td data-label="Method"><span class="verb ${verbClass}">${escapeHtml(item.verb)}</span></td>
        <td data-label="Function"><strong>${escapeHtml(item.apiClass)}.${escapeHtml(item.method)}</strong></td>
        <td data-label="Endpoint"><code>${escapeHtml(item.path)}</code></td>
        <td data-label="Description">${escapeHtml(item.summary || detail.description || "HTTP endpoint")}</td>
        <td data-label="Action"><button class="detail-toggle" type="button" data-detail="http-${index}">Details</button></td>
      </tr>
      <tr id="http-${index}" class="detail-row" hidden>
        <td colspan="6">
          <div class="function-detail">
          <div class="detail-grid">
            <div>
              <h4>What it does</h4>
              <p>${escapeHtml(detail.description || item.summary || "No additional description is available in the generated docs.")}</p>
              <h4>Request parameters</h4>
              ${paramsTable(detail.params, "No request parameters documented.")}
            </div>
            <div>
              <h4>SDK method</h4>
              <p><code>${escapeHtml(detail.signature || `${item.method}(...)`)}</code></p>
              <h4>Return type</h4>
              <p><code>${escapeHtml(detail.returnType || "See upstream schema")}</code></p>
              <h4>HTTP responses</h4>
              ${statusesTable(detail.statuses)}
            </div>
          </div>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  httpList.innerHTML = `
    <table class="reference-table http-table">
      <colgroup>
        <col class="api-col">
        <col class="method-col">
        <col class="function-col">
        <col class="endpoint-col">
        <col class="description-col">
        <col class="action-col">
      </colgroup>
      <thead>
        <tr>
          <th>API</th>
          <th>Method</th>
          <th>Function</th>
          <th>Endpoint</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;

  if (!filtered.length) {
    httpList.innerHTML = '<p class="empty">No HTTP endpoints match the current filter.</p>';
  }

  bindDetailToggles(httpList);
};

const renderSdkReference = () => {
  const query = sdkSearch.value.trim().toLowerCase();
  const sdkRows = data.sdkDocs.flatMap((doc) => {
    const className = shortSdkSymbol(doc.title);

    if (doc.kind === "API class") {
      return doc.methods.map((method) => ({
        doc,
        group: className,
        type: "Function",
        symbol: `${method.name}()`,
        summary: method.description || doc.summary,
        method,
      }));
    }

    return [{
      doc,
      group: doc.source.startsWith("Local") ? "Local Models" : "Web Models",
      type: "Model",
      symbol: className,
      summary: doc.summary,
      method: null,
    }];
  });

  const filtered = sdkRows.filter((row) => {
    if (isDeprecatedSdkRow(row)) {
      return false;
    }

    if (row.type === "Model" && row.summary === "Generated Python SDK documentation.") {
      return false;
    }

    const matchesFilter = activeSdkFilter === "all" || row.doc.source === activeSdkFilter;
    const haystack = [
      row.doc.source,
      row.doc.package,
      row.type,
      row.group,
      row.symbol,
      row.summary,
      row.method?.signature,
      row.method?.returnType,
      ...(row.method?.params || []).flatMap((param) => [param.name, param.type, param.description]),
      ...(row.doc.properties || []).flatMap((property) => [property.name, property.type, property.description]),
    ].join(" ").toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  }).sort((a, b) => {
    if (a.type !== b.type) return a.type === "Function" ? -1 : 1;
    const sourceCompare = a.doc.source.localeCompare(b.doc.source);
    if (sourceCompare) return sourceCompare;
    const groupCompare = a.group.localeCompare(b.group);
    if (groupCompare) return groupCompare;
    return a.symbol.localeCompare(b.symbol);
  });

  const visibleTotal = sdkRows.filter((row) =>
    !isDeprecatedSdkRow(row) &&
    !(row.type === "Model" && row.summary === "Generated Python SDK documentation.")
  ).length;
  sdkCount.textContent = `${filtered.length}/${visibleTotal}`;

  let lastGroup = "";
  let groupIndex = -1;
  const rows = filtered.map((row, index) => {
    const groupKey = `${row.doc.source}:${row.group}`;
    let groupRow = "";
    if (groupKey !== lastGroup) {
      groupIndex += 1;
      groupRow = `
        <tr class="reference-group-row" data-sdk-group="${groupIndex}">
          <td colspan="5">
            <button class="group-toggle" type="button" data-sdk-group-toggle="${groupIndex}" aria-expanded="false">
              <span class="group-title">
                <span class="class-pill">Class</span>
                <strong>${escapeHtml(row.group)}</strong>
              </span>
              <span class="group-indicator" aria-hidden="true">▾</span>
            </button>
          </td>
        </tr>
      `;
      lastGroup = groupKey;
    }

    return `
      ${groupRow}
      <tr class="reference-row" data-sdk-group-member="${groupIndex}" hidden>
        <td data-label="SDK">${sourceBadge(row.doc.source)}</td>
        <td data-label="Type">${escapeHtml(row.type)}</td>
        <td data-label="Python symbol"><strong>${escapeHtml(row.symbol)}</strong></td>
        <td data-label="Description">${escapeHtml(row.summary || "Generated SDK documentation.")}</td>
        <td data-label="Action"><button class="detail-toggle" type="button" data-detail="sdk-${index}">Details</button></td>
      </tr>
      <tr id="sdk-${index}" class="detail-row" data-sdk-group-member="${groupIndex}" hidden>
        <td colspan="5">
          <div class="sdk-detail">
          ${row.method ? apiMethodBlocks([row.method]) : `
            <div>
              <h4>Model properties</h4>
              ${paramsTable(row.doc.properties, "No model properties documented.")}
            </div>
            ${row.doc.example ? `<pre><code class="language-python">${escapeHtml(row.doc.example)}</code></pre>` : ""}
          `}
          </div>
        </td>
      </tr>
    `;
  }).join("");

  sdkList.innerHTML = `
    <table class="reference-table sdk-table">
      <colgroup>
        <col class="sdk-col">
        <col class="type-col">
        <col class="symbol-col">
        <col class="sdk-description-col">
        <col class="action-col">
      </colgroup>
      <thead>
        <tr>
          <th>SDK</th>
          <th>Type</th>
          <th>Python symbol</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;

  if (!filtered.length) {
    sdkList.innerHTML = '<p class="empty">No SDK docs match the current filter.</p>';
  }

  bindDetailToggles(sdkList);
  bindSdkGroupToggles();
  highlightPythonSnippets(sdkList);
};

const bindDetailToggles = (root) => {
  root.querySelectorAll(".detail-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const row = root.querySelector(`#${button.dataset.detail}`);
      const open = row.hasAttribute("hidden");
      row.toggleAttribute("hidden", !open);
      button.textContent = open ? "Hide" : "Details";
    });
  });
};

const setSdkGroupOpen = (groupId, open) => {
  const toggle = sdkList.querySelector(`[data-sdk-group-toggle="${groupId}"]`);
  if (!toggle) return;

  toggle.setAttribute("aria-expanded", String(open));
  const indicator = toggle.querySelector(".group-indicator");
  if (indicator) indicator.textContent = open ? "▴" : "▾";

  sdkList.querySelectorAll(`[data-sdk-group-member="${groupId}"]`).forEach((row) => {
    if (row.classList.contains("detail-row")) {
      row.hidden = true;
    } else {
      row.hidden = !open;
    }
  });

  if (!open) {
    sdkList.querySelectorAll(`[data-sdk-group-member="${groupId}"] .detail-toggle`).forEach((button) => {
      button.textContent = "Details";
    });
  }
};

const bindSdkGroupToggles = () => {
  sdkList.querySelectorAll("[data-sdk-group-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const groupId = button.dataset.sdkGroupToggle;
      const open = button.getAttribute("aria-expanded") !== "true";
      setSdkGroupOpen(groupId, open);
    });
  });
};

const exampleDetails = (path) => {
  if (path.includes("hello-web-api")) {
    return {
      art: "cloud",
      text: "Shows the smallest useful Dashboard API workflow: exchange client credentials for an access token, call the Web API with a bearer token, and print live printer status. Use this as the starting point for cloud monitoring tools, reporting jobs, or integrations that need account-level printer data.",
    };
  }
  if (path.includes("hello-server-minimal")) {
    return {
      art: "server",
      text: "Demonstrates the minimal Local API helper path for starting PreFormServer and making direct HTTP requests from your own code. It is useful when you want predictable request formatting, fewer generated-client dependencies, and a clear view of the underlying local server lifecycle.",
    };
  }
  if (path.includes("hello-server")) {
    return {
      art: "server",
      text: "Creates a basic local print scene through the generated Local API client after launching PreFormServer. This is the clearest first example for desktop automation workflows that need to choose a printer family, material, layer thickness, and scene type before doing more advanced preparation.",
    };
  }
  if (path.includes("batching-minimal")) {
    return {
      art: "batch",
      text: "Illustrates a lightweight batching workflow using direct Local API calls. Use it when you want to loop through model inputs, submit repeated scene operations, and keep the surrounding automation logic in your own application rather than relying on the generated SDK types.",
    };
  }
  if (path.includes("batching")) {
    return {
      art: "batch",
      text: "Builds a fuller local batching flow for preparing multiple jobs with PreFormServer. It is a practical pattern for production environments where many parts need the same repeatable preparation steps before export, validation, or upload to a printer.",
    };
  }
  if (path.includes("list-materials")) {
    return {
      art: "materials",
      text: "Queries the Local API for supported printer, material, and print-setting combinations. This is especially useful before creating scenes because it lets your integration populate valid options, avoid unsupported combinations, and keep user choices aligned with PreFormServer capabilities.",
    };
  }
  if (path.includes("print-dialog")) {
    return {
      art: "dialog",
      text: "Wraps a sample STL in a print-dialog style workflow, showing how an application can hand off a model to local Formlabs preparation tooling while still owning the surrounding user experience. Use this pattern for CAD plugins, design tools, or internal apps that need a guided print action.",
    };
  }
  if (path.includes("send-group-invitations")) {
    return {
      art: "invite",
      text: "Uses the Web API to automate group invitations from Dashboard credentials. This example is aimed at account administration workflows where teams need to invite users, manage access, or connect Formlabs group membership to another internal system.",
    };
  }
  if (path.includes("web-sls-packer")) {
    return {
      art: "webapp",
      text: "Combines a small Flask application with Local API calls to manage uploaded jobs and packing-related operations from a browser interface. It is a more application-shaped example for teams that want a web front end around local preparation services.",
    };
  }
  if (path.includes("speedrun")) {
    return {
      art: "speed",
      text: "Compresses the local automation flow into a fast end-to-end script. Use it as a compact reference when you already understand the pieces and want to see how scene setup, preparation, and API calls fit together without extra application structure.",
    };
  }
  if (path.toLowerCase().includes("readme")) {
    return {
      art: "guide",
      text: "Documents setup and usage details for the adjacent example application. Read this alongside the code when you want to understand required environment variables, dependencies, and the expected run sequence before adapting the sample.",
    };
  }
  if (path.toLowerCase().includes("requirements")) {
    return {
      art: "deps",
      text: "Lists the Python dependencies needed by the adjacent example. It is not an API workflow by itself, but it shows the package surface required to run the sample application locally.",
    };
  }
  if (path.endsWith(".html")) {
    return {
      art: "webapp",
      text: "Provides the browser-facing portion of an example application. Pair it with the adjacent Python server code to see how a UI can call into a local app layer that then coordinates Formlabs API requests.",
    };
  }
  return {
    art: "guide",
    text: "SDK repository support file for one of the examples. Review it with the neighboring files in the same folder to understand how the full sample is assembled.",
  };
};

const exampleArt = (type) => `
  <div class="example-art ${escapeHtml(type)}" aria-hidden="true">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
`;

const exampleTag = (path) => {
  if (path.includes("web") || path.includes("group")) return "Web API";
  if (path.includes("requirements")) return "Dependencies";
  if (path.toLowerCase().includes("readme")) return "Guide";
  return "Local API";
};

const exampleDownloadHref = (key) => `assets/downloads/${key}.zip`;

const buildExampleCards = () => {
  const byPath = new Map(data.examples.map((example) => [example.path, example]));
  const file = (path) => byPath.get(path);
  const files = (...paths) => paths.map(file).filter(Boolean);

  const webFiles = [
    ...files("hello-web-api.py"),
    ...data.examples.filter((example) => example.path.startsWith("web-api-send-group-invitations/")),
  ];

  const cards = [
    {
      key: "web-api-examples",
      title: "Web API workflows",
      path: "web-api-examples/",
      tag: "Web API",
      art: "cloud",
      download: exampleDownloadHref("web-api-examples"),
      text: "Combines the two Dashboard/Web API examples into one downloadable folder. The first file demonstrates the core OAuth client-credentials flow and a printer status request. The folder example extends that pattern into group administration, showing the supporting README, dependencies, and Python entry point together so teams can adapt the whole workflow instead of copying individual fragments.",
      files: webFiles,
    },
    {
      key: "batching",
      title: "Batching",
      path: "batching.py",
      tag: "Local API",
      art: "batch",
      download: exampleDownloadHref("batching"),
      text: exampleDetails("batching.py").text,
      files: files("batching.py"),
    },
    {
      key: "batching-minimal",
      title: "Batching Minimal",
      path: "batching-minimal.py",
      tag: "Local API",
      art: "batch",
      download: exampleDownloadHref("batching-minimal"),
      text: exampleDetails("batching-minimal.py").text,
      files: files("batching-minimal.py"),
    },
    {
      key: "hello-server",
      title: "Hello Server",
      path: "hello-server.py",
      tag: "Local API",
      art: "server",
      download: exampleDownloadHref("hello-server"),
      text: exampleDetails("hello-server.py").text,
      files: files("hello-server.py"),
    },
    {
      key: "hello-server-minimal",
      title: "Hello Server Minimal",
      path: "hello-server-minimal.py",
      tag: "Local API",
      art: "server",
      download: exampleDownloadHref("hello-server-minimal"),
      text: exampleDetails("hello-server-minimal.py").text,
      files: files("hello-server-minimal.py"),
    },
    {
      key: "list-materials",
      title: "List Materials",
      path: "list-materials.py",
      tag: "Local API",
      art: "materials",
      download: exampleDownloadHref("list-materials"),
      text: exampleDetails("list-materials.py").text,
      files: files("list-materials.py"),
    },
    {
      key: "print-dialog",
      title: "Print Dialog",
      path: "print-dialog/",
      tag: "Local API",
      art: "dialog",
      download: exampleDownloadHref("print-dialog"),
      text: exampleDetails("print-dialog/print_dialog.py").text,
      files: data.examples.filter((example) => example.path.startsWith("print-dialog/")),
    },
    {
      key: "speedrun",
      title: "Speedrun",
      path: "speedrun.py",
      tag: "Local API",
      art: "speed",
      download: exampleDownloadHref("speedrun"),
      text: exampleDetails("speedrun.py").text,
      files: files("speedrun.py"),
    },
    {
      key: "web-sls-packer",
      title: "Web SLS Packer",
      path: "web-sls-packer/",
      tag: "Local API",
      art: "webapp",
      download: exampleDownloadHref("web-sls-packer"),
      text: exampleDetails("web-sls-packer/app.py").text,
      files: data.examples.filter((example) => example.path.startsWith("web-sls-packer/")),
    },
  ];

  return cards.filter((card) => card.files.length);
};

const renderExamples = () => {
  examplesList.innerHTML = buildExampleCards().map((example) => {
    return `
    <article class="example-card">
      <a class="download-button" href="${escapeHtml(example.download)}" download>Download</a>
      ${exampleArt(example.art)}
      <div class="example-body">
        <div class="example-kicker">
          <span class="pill${example.tag === "Web API" ? " blue" : ""}">${escapeHtml(example.tag)}</span>
          <small>${escapeHtml(example.path)}</small>
        </div>
        <h3>${escapeHtml(example.title)}</h3>
        <p>${escapeHtml(example.text)}</p>
      </div>
      <div class="example-files">
        ${example.files.map((file) => `
          <section class="example-file">
            ${example.files.length > 1 ? `
              <div class="file-heading">
                <div class="file-label">${escapeHtml(file.path)}</div>
              </div>
            ` : ""}
            <pre><code${file.path.endsWith(".py") ? ' class="language-python"' : ""}>${escapeHtml(file.code)}</code></pre>
          </section>
        `).join("")}
      </div>
    </article>
  `;
  }).join("");
  highlightPythonSnippets(examplesList);
};

httpFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeHttpFilter = button.dataset.httpFilter;
    setActiveButton(httpFilterButtons, "httpFilter", activeHttpFilter);
    renderHttpReference();
  });
});

sdkFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeSdkFilter = button.dataset.sdkFilter;
    setActiveButton(sdkFilterButtons, "sdkFilter", activeSdkFilter);
    renderSdkReference();
  });
});

sdkExpandAllButton?.addEventListener("click", () => {
  sdkList.querySelectorAll("[data-sdk-group-toggle]").forEach((button) => {
    setSdkGroupOpen(button.dataset.sdkGroupToggle, true);
  });
});

sdkCollapseAllButton?.addEventListener("click", () => {
  sdkList.querySelectorAll("[data-sdk-group-toggle]").forEach((button) => {
    setSdkGroupOpen(button.dataset.sdkGroupToggle, false);
  });
});

apiJumpLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.dataset.apiTarget;
    activeSdkFilter = target === "local" ? "Local SDK" : "Web SDK";
    setActiveButton(sdkFilterButtons, "sdkFilter", activeSdkFilter);
    renderSdkReference();
  });
});

codeSwitchers.forEach((switcher) => {
  const buttons = switcher.querySelectorAll("[data-code-toggle]");
  const panels = switcher.querySelectorAll("[data-code-panel]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.codeToggle;
      buttons.forEach((candidate) => candidate.classList.toggle("active", candidate === button));
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.codePanel !== target;
      });
    });
  });
});

httpSearch.addEventListener("input", renderHttpReference);
sdkSearch.addEventListener("input", renderSdkReference);

renderHttpReference();
renderSdkReference();
renderExamples();
highlightPythonSnippets();
