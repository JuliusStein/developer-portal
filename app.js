const data = window.FORMLABS_DATA;
const list = document.querySelector("#reference-list");
const examplesList = document.querySelector("#examples-list");
const searchInput = document.querySelector("#search");
const filterButtons = document.querySelectorAll("[data-filter]");

let activeFilter = "all";

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const sourceBadge = (source) =>
  source.startsWith("Local") ? '<span class="pill">Local</span>' : '<span class="pill blue">Web</span>';

const usageSnippet = (item) => {
  const moduleName = item.source.startsWith("Local") ? "formlabs_local_api" : "formlabs_web_api";
  const host = item.source.startsWith("Local") ? "http://localhost:44388" : "https://api.formlabs.com";
  const auth = item.source.startsWith("Web")
    ? "\nconfiguration.access_token = ACCESS_TOKEN"
    : "";

  return `import ${moduleName}\n\nconfiguration = ${moduleName}.Configuration(host="${host}")${auth}\n\nwith ${moduleName}.ApiClient(configuration) as api_client:\n    api = ${moduleName}.${item.apiClass}(api_client)\n    response = api.${item.method}(...)`;
};

const paramsTable = (params) => {
  if (!params?.length) {
    return "<p>No parameters documented for this SDK method.</p>";
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

const renderReference = () => {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = data.endpoints.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.source === activeFilter;
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

  list.innerHTML = filtered.map((item, index) => {
    const detail = item.detail || {};
    const verbClass = item.verb.toLowerCase();
    return `
      <article class="function-card">
        <button class="function-button" type="button" aria-expanded="false" data-card="${index}">
          <span class="verb ${verbClass}">${escapeHtml(item.verb)}</span>
          <span>
            <span class="function-title">
              ${sourceBadge(item.source)}
              <strong>${escapeHtml(item.apiClass)}.${escapeHtml(item.method)}</strong>
              <code>${escapeHtml(item.path)}</code>
            </span>
            <span class="function-meta">${escapeHtml(item.summary || detail.description || "SDK function")}</span>
          </span>
          <span class="chevron" aria-hidden="true">+</span>
        </button>
        <div class="function-detail">
          <div class="detail-grid">
            <div>
              <h4>What it does</h4>
              <p>${escapeHtml(detail.description || item.summary || "No additional description is available in the generated SDK docs.")}</p>
              <h4>Parameters</h4>
              ${paramsTable(detail.params)}
            </div>
            <div>
              <h4>SDK signature</h4>
              <p><code>${escapeHtml(detail.signature || `${item.method}(...)`)}</code></p>
              <h4>Return type</h4>
              <p><code>${escapeHtml(detail.returnType || "See upstream schema")}</code></p>
              <h4>HTTP responses</h4>
              ${statusesTable(detail.statuses)}
            </div>
          </div>
          <pre><code>${escapeHtml(usageSnippet(item))}</code></pre>
        </div>
      </article>
    `;
  }).join("");

  if (!filtered.length) {
    list.innerHTML = '<p class="empty">No functions match the current filter.</p>';
  }

  document.querySelectorAll(".function-button").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".function-card");
      const open = card.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
      button.querySelector(".chevron").textContent = open ? "-" : "+";
    });
  });
};

const exampleSummary = (path) => {
  if (path.includes("hello-web-api")) return "Authenticate with Dashboard credentials and request printer status.";
  if (path.includes("hello-server")) return "Start or call PreFormServer and create a basic local scene.";
  if (path.includes("batching")) return "Prepare multiple jobs through local API automation.";
  if (path.includes("list-materials")) return "Query available printer/material settings from the Local API.";
  if (path.includes("print-dialog")) return "Open a local print dialog workflow around a sample STL.";
  if (path.includes("send-group-invitations")) return "Use Web API credentials to invite users to groups.";
  if (path.includes("web-sls-packer")) return "Run a Flask web app that combines uploads, local packing, and job assets.";
  if (path.includes("speedrun")) return "Compact end-to-end local automation sample.";
  return "SDK repository example file.";
};

const renderExamples = () => {
  examplesList.innerHTML = data.examples.map((example) => `
    <article class="example-card">
      <h3>
        <span>${escapeHtml(example.title)}</span>
        <small>${escapeHtml(example.path)}</small>
      </h3>
      <p>${escapeHtml(exampleSummary(example.path))}</p>
      <pre><code>${escapeHtml(example.code)}</code></pre>
    </article>
  `).join("");
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((candidate) => candidate.classList.toggle("active", candidate === button));
    renderReference();
  });
});

searchInput.addEventListener("input", renderReference);

renderReference();
renderExamples();
