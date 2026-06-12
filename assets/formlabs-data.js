window.FORMLABS_DATA = {
  "generatedFrom": {
    "localApiVersion": "0.9.22",
    "webApiVersion": "0.8.1",
    "sdkRepo": "https://github.com/Formlabs/formlabs-api-python"
  },
  "endpoints": [
    {
      "source": "Local API + SDK",
      "apiClass": "APIInfoApi",
      "method": "get_api_version",
      "verb": "GET",
      "path": "/",
      "summary": "Get API Version",
      "detail": {
        "signature": "GetApiVersion200Response get_api_version()",
        "description": "Get API Version\nGet the version of the API",
        "params": [

        ],
        "returnType": "GetApiVersion200Response",
        "statuses": [
          {
            "code": "200",
            "description": "API version"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "DevicesApi",
      "method": "discover_devices",
      "verb": "POST",
      "path": "/discover-devices/",
      "summary": "Discover Devices",
      "detail": {
        "signature": "DiscoverDevices200Response discover_devices(discover_devices_request, var_async=var_async)",
        "description": "Discover Devices\nDiscover new devices on the network",
        "params": [
          {
            "name": "discover_devices_request",
            "type": "DiscoverDevicesRequest(DiscoverDevicesRequest.md)",
            "description": "",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "DiscoverDevices200Response",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "DevicesApi",
      "method": "get_device",
      "verb": "GET",
      "path": "/devices/{id}/",
      "summary": "Get Device",
      "detail": {
        "signature": "DeviceStatusModel get_device(id)",
        "description": "Get Device\nGet a previously discovered device's status",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the printer",
            "notes": ""
          }
        ],
        "returnType": "DeviceStatusModel",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "DevicesApi",
      "method": "get_devices",
      "verb": "GET",
      "path": "/devices/",
      "summary": "Get Devices",
      "detail": {
        "signature": "GetDevices200Response get_devices(can_print=can_print)",
        "description": "Get Devices\nList of previously discovered device statuses\nBy default, only locally discovered printer names are returned.\nTo include your Fleet Control queues or printers registered to your\nDashboard account, you must be logged in and have an Internet connection.\nUse the Login endpoint to authenticate with Formlabs Web Services.",
        "params": [
          {
            "name": "can_print",
            "type": "bool",
            "description": "If true, only devices that can receive prints will be returned.",
            "notes": "[optional]"
          }
        ],
        "returnType": "GetDevices200Response",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "DevicesApi",
      "method": "upload_firmware",
      "verb": "POST",
      "path": "/upload-firmware/",
      "summary": "Upload Firmware",
      "detail": {
        "signature": "DiscoverDevices200Response upload_firmware(upload_firmware_request, var_async=var_async)",
        "description": "Upload Firmware\nUpload new firmware to a device",
        "params": [
          {
            "name": "upload_firmware_request",
            "type": "UploadFirmwareRequest(UploadFirmwareRequest.md)",
            "description": "",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "DiscoverDevices200Response",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ExportingApi",
      "method": "save_form_file",
      "verb": "POST",
      "path": "/scene/{scene_id}/save-form/",
      "summary": "Save .form file",
      "detail": {
        "signature": "save_form_file(scene_id, load_form_file_request, var_async=var_async)",
        "description": "Save .form file\nSave the current scene to a .form file",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "load_form_file_request",
            "type": "LoadFormFileRequest(LoadFormFileRequest.md)",
            "description": "Full path where the file should be saved",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ExportingApi",
      "method": "save_fps_file",
      "verb": "POST",
      "path": "/scene/{scene_id}/save-fps-file/",
      "summary": "Save FPS file",
      "detail": {
        "signature": "save_fps_file(scene_id, save_fps_file_request)",
        "description": "Save FPS file\nSave the print settings of the current scene to a .fps file",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "save_fps_file_request",
            "type": "SaveFpsFileRequest(SaveFpsFileRequest.md)",
            "description": "Full path where the FPS file should be saved",
            "notes": ""
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ExportingApi",
      "method": "save_screenshot",
      "verb": "POST",
      "path": "/scene/{scene_id}/save-screenshot/",
      "summary": "Save screenshot file",
      "detail": {
        "signature": "save_screenshot(scene_id, save_screenshot_request, var_async=var_async)",
        "description": "Save screenshot file\nSave a screenshot of the current scene.",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "save_screenshot_request",
            "type": "SaveScreenshotRequest(SaveScreenshotRequest.md)",
            "description": "Full path where the image should be saved",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ExportingDeprecatedApi",
      "method": "save_form_file_deprecated",
      "verb": "POST",
      "path": "/scene/save-form/",
      "summary": "Save .form file",
      "detail": {
        "signature": "save_form_file_deprecated()",
        "description": "Save .form file\nDeprecated. See [/scene/{scene_id}/save-form/](#operation/saveFormFile)",
        "params": [

        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ExportingDeprecatedApi",
      "method": "save_fps_file_deprecated",
      "verb": "POST",
      "path": "/scene/save-fps-file/",
      "summary": "Save FPS file",
      "detail": {
        "signature": "save_fps_file_deprecated()",
        "description": "Save FPS file\nDeprecated. See [/scene/{scene_id}/save-fps-file/](#operation/saveFpsFile)",
        "params": [

        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ExportingDeprecatedApi",
      "method": "save_screenshot_deprecated",
      "verb": "POST",
      "path": "/scene/save-screenshot/",
      "summary": "Save screenshot file",
      "detail": {
        "signature": "save_screenshot_deprecated()",
        "description": "Save screenshot file\nDeprecated. See [/scene/{scene_id}/save-screenshot/](#operation/saveScreenshot)",
        "params": [

        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationApi",
      "method": "detect_thin_walls",
      "verb": "POST",
      "path": "/scene/{scene_id}/thin-wall-detection/",
      "summary": "Detect Thin Walls",
      "detail": {
        "signature": "ThinWallDetectionResultModel detect_thin_walls(scene_id, thin_wall_detection_request_model, var_async=var_async)",
        "description": "Detect Thin Walls\nDetect thin-wall regions in models. Returns per-model thin-wall analysis based on a configurable wall-thickness threshold.",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "thin_wall_detection_request_model",
            "type": "ThinWallDetectionRequestModel(ThinWallDetectionRequestModel.md)",
            "description": "Thin wall detection parameters",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "If &#x60;true&#x60;, the server returns &#x60;202 Accepted&#x60; with an operation id and runs the detection in the background. Poll &#x60;/operations/{id}/&#x60; for completion. Recommended for large meshes or &#x60;models: \\&quot;ALL\\&quot;&#x60; requests where the synchronous response may be slow.",
            "notes": "[optional] [default to False]"
          }
        ],
        "returnType": "ThinWallDetectionResultModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationApi",
      "method": "estimate_print_time",
      "verb": "POST",
      "path": "/scene/{scene_id}/estimate-print-time/",
      "summary": "Estimate Print Time",
      "detail": {
        "signature": "EstimatedPrintTimeModel estimate_print_time(scene_id, var_async=var_async)",
        "description": "Estimate Print Time\nCalculate the estimated print time for the current scene",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "EstimatedPrintTimeModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationApi",
      "method": "get_all_scenes",
      "verb": "GET",
      "path": "/scenes/",
      "summary": "Get All Scenes",
      "detail": {
        "signature": "GetAllScenes200Response get_all_scenes()",
        "description": "Get All Scenes\nGet data about all scenes",
        "params": [

        ],
        "returnType": "GetAllScenes200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Descriptions of all scenes"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationApi",
      "method": "get_model",
      "verb": "GET",
      "path": "/scene/{scene_id}/models/{id}/",
      "summary": "Get model",
      "detail": {
        "signature": "ModelProperties get_model(id, scene_id)",
        "description": "Get model\nGet a model's properties",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the model",
            "notes": ""
          },
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          }
        ],
        "returnType": "ModelProperties",
        "statuses": [
          {
            "code": "200",
            "description": "Model description"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationApi",
      "method": "get_print_validation",
      "verb": "GET",
      "path": "/scene/{scene_id}/print-validation/",
      "summary": "Get Print Validation",
      "detail": {
        "signature": "PrintValidationResultModel get_print_validation(scene_id, var_async=var_async)",
        "description": "Get Print Validation\nCalculate the print validation for the current scene",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "PrintValidationResultModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationApi",
      "method": "get_scene",
      "verb": "GET",
      "path": "/scene/{scene_id}/",
      "summary": "Get Scene",
      "detail": {
        "signature": "SceneModel get_scene(scene_id)",
        "description": "Get Scene\nGet data about the scene with the given ID, or the most recently created scene if no ID is provided",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          }
        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Scene description"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationApi",
      "method": "get_scene_interferences",
      "verb": "POST",
      "path": "/scene/{scene_id}/interferences/",
      "summary": "Get Scene Interferences",
      "detail": {
        "signature": "get_scene_interferences(scene_id, get_scene_interferences_request=get_scene_interferences_request)",
        "description": "Get Scene Interferences\nReturns a list of pairs of IDs of interfering models.",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "get_scene_interferences_request",
            "type": "GetSceneInterferencesRequest(GetSceneInterferencesRequest.md)",
            "description": "Interferences parameters",
            "notes": "[optional]"
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationDeprecatedApi",
      "method": "detect_thin_walls_deprecated",
      "verb": "POST",
      "path": "/scene/thin-wall-detection/",
      "summary": "Detect Thin Walls",
      "detail": {
        "signature": "ThinWallDetectionResultModel detect_thin_walls_deprecated(thin_wall_detection_request_model, var_async=var_async)",
        "description": "Detect Thin Walls\nDeprecated. See [/scene/{scene_id}/thin-wall-detection/](#operation/detectThinWalls)",
        "params": [
          {
            "name": "thin_wall_detection_request_model",
            "type": "ThinWallDetectionRequestModel(ThinWallDetectionRequestModel.md)",
            "description": "Thin wall detection parameters",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "",
            "notes": "[optional] [default to False]"
          }
        ],
        "returnType": "ThinWallDetectionResultModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationDeprecatedApi",
      "method": "estimate_print_time_deprecated",
      "verb": "POST",
      "path": "/scene/estimate-print-time/",
      "summary": "Estimate Print Time",
      "detail": {
        "signature": "EstimatedPrintTimeModel estimate_print_time_deprecated()",
        "description": "Estimate Print Time\nDeprecated. See [/scene/{scene_id}/estimate-print-time/](#operation/estimatePrintTime)",
        "params": [

        ],
        "returnType": "EstimatedPrintTimeModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationDeprecatedApi",
      "method": "get_model_deprecated",
      "verb": "GET",
      "path": "/scene/models/{id}/",
      "summary": "Get model",
      "detail": {
        "signature": "ModelProperties get_model_deprecated(id)",
        "description": "Get model\nDeprecated. See [/scene/{scene_id}/models/{id}/](#operation/getModel)",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the model",
            "notes": ""
          }
        ],
        "returnType": "ModelProperties",
        "statuses": [
          {
            "code": "200",
            "description": "Model description"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationDeprecatedApi",
      "method": "get_print_validation_deprecated",
      "verb": "GET",
      "path": "/scene/print-validation/",
      "summary": "Get Print Validation",
      "detail": {
        "signature": "PrintValidationResultModel get_print_validation_deprecated()",
        "description": "Get Print Validation\nDeprecated. See [/scene/{scene_id}/print-validation/](#operation/getPrintValidation)",
        "params": [

        ],
        "returnType": "PrintValidationResultModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationDeprecatedApi",
      "method": "get_scene_deprecated",
      "verb": "GET",
      "path": "/scene/",
      "summary": "Get Scene",
      "detail": {
        "signature": "SceneModel get_scene_deprecated()",
        "description": "Get Scene\nDeprecated. See [/scene/{scene_id}/](#operation/getScene)",
        "params": [

        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Scene description"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "GettingSceneInformationDeprecatedApi",
      "method": "get_scene_interferences_deprecated",
      "verb": "POST",
      "path": "/scene/interferences/",
      "summary": "Get Scene Interferences",
      "detail": {
        "signature": "get_scene_interferences_deprecated()",
        "description": "Get Scene Interferences\nDeprecated. See [/scene/{scene_id}/interferences/](#operation/getSceneInterferences)",
        "params": [

        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "add_drain_holes",
      "verb": "POST",
      "path": "/scene/{scene_id}/add-drain-holes/",
      "summary": "Add Drain Holes",
      "detail": {
        "signature": "AddDrainHoles200Response add_drain_holes(scene_id, add_drain_holes_request, var_async=var_async)",
        "description": "Add Drain Holes\nAdd specified drain holes to specified model",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "add_drain_holes_request",
            "type": "AddDrainHolesRequest(AddDrainHolesRequest.md)",
            "description": "Drain hole parameters",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "AddDrainHoles200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "auto_layout",
      "verb": "POST",
      "path": "/scene/{scene_id}/auto-layout/",
      "summary": "Auto Layout",
      "detail": {
        "signature": "SceneModel auto_layout(scene_id, auto_layout_request, var_async=var_async)",
        "description": "Auto Layout\nAutomatically arrange models on the build platform. Only applies to SLA-type scenes like the Form 4 (use /scene/auto-pack/ for SLS-type scenes like the Fuse 1+)",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "auto_layout_request",
            "type": "AutoLayoutRequest(AutoLayoutRequest.md)",
            "description": "Models to run the auto layout operation on",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "## Bad Request  The scene will not be modified if any error occurs. The response will contain an error message."
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "auto_orient",
      "verb": "POST",
      "path": "/scene/{scene_id}/auto-orient/",
      "summary": "Auto Orient",
      "detail": {
        "signature": "auto_orient(scene_id, auto_orient_request, var_async=var_async)",
        "description": "Auto Orient\nAutomatically choose model orientation for printing",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "auto_orient_request",
            "type": "AutoOrientRequest(AutoOrientRequest.md)",
            "description": "Models to run the auto orient operation on",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "auto_pack",
      "verb": "POST",
      "path": "/scene/{scene_id}/auto-pack/",
      "summary": "Auto Pack",
      "detail": {
        "signature": "SceneModel auto_pack(scene_id, auto_pack_request, var_async=var_async)",
        "description": "Auto Pack\nAutomatically arrange models in the build volume. Only applies to SLS-type scenes like the Fuse 1+ (use /scene/auto-layout/ for SLA-type scenes like the Form 4)",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "auto_pack_request",
            "type": "AutoPackRequest(AutoPackRequest.md)",
            "description": "Auto pack parameters",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "## Bad Request  The scene will not be modified if any error occurs. The response will contain an error message."
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "auto_support",
      "verb": "POST",
      "path": "/scene/{scene_id}/auto-support/",
      "summary": "Auto Support",
      "detail": {
        "signature": "auto_support(scene_id, auto_support_request, var_async=var_async)",
        "description": "Auto Support\nGenerate support structures on models",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "auto_support_request",
            "type": "AutoSupportRequest(AutoSupportRequest.md)",
            "description": "Models to run the auto support operation on",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "create_default_scene",
      "verb": "POST",
      "path": "/scene/default/",
      "summary": "Create Default Scene",
      "detail": {
        "signature": "SceneModel create_default_scene(scene_type_model)",
        "description": "Create Default Scene\nCreate a default scene",
        "params": [
          {
            "name": "scene_type_model",
            "type": "SceneTypeModel(SceneTypeModel.md)",
            "description": "Create a default scene with a given printing setup. For a full list of possible settings, call the GET /list-materials/ endpoint",
            "notes": ""
          }
        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "create_scene",
      "verb": "POST",
      "path": "/scene/",
      "summary": "Create Scene",
      "detail": {
        "signature": "SceneModel create_scene(scene_type_model)",
        "description": "Create Scene\nCreate a new scene",
        "params": [
          {
            "name": "scene_type_model",
            "type": "SceneTypeModel(SceneTypeModel.md)",
            "description": "Create a scene with a given printing setup. For a full list of possible settings, call the GET /list-materials/ endpoint",
            "notes": ""
          }
        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "delete_default_scene",
      "verb": "DELETE",
      "path": "/scene/default/",
      "summary": "Delete Default Scene",
      "detail": {
        "signature": "SceneModel delete_default_scene()",
        "description": "Delete Default Scene\nDelete the default scene. Replaces the default scene with a blank scene.",
        "params": [

        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "delete_model",
      "verb": "DELETE",
      "path": "/scene/{scene_id}/models/{id}/",
      "summary": "Delete model",
      "detail": {
        "signature": "delete_model(id, scene_id)",
        "description": "Delete model\nDelete a model from the current scene",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the model",
            "notes": ""
          },
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "delete_scene",
      "verb": "DELETE",
      "path": "/scene/{scene_id}/",
      "summary": "Delete Scene",
      "detail": {
        "signature": "SceneModel delete_scene(scene_id)",
        "description": "Delete Scene\nDelete a scene",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          }
        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "duplicate_model",
      "verb": "POST",
      "path": "/scene/{scene_id}/models/{id}/duplicate/",
      "summary": "Duplicate model",
      "detail": {
        "signature": "SceneModel duplicate_model(id, scene_id, duplicate_model_request)",
        "description": "Duplicate model\nDuplicate a model",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the model",
            "notes": ""
          },
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "duplicate_model_request",
            "type": "DuplicateModelRequest(DuplicateModelRequest.md)",
            "description": "",
            "notes": ""
          }
        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "hollow_model",
      "verb": "POST",
      "path": "/scene/{scene_id}/hollow/",
      "summary": "Hollow Model",
      "detail": {
        "signature": "HollowModel200Response hollow_model(scene_id, hollow_model_request, var_async=var_async)",
        "description": "Hollow Model\nHollows the specified models",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "hollow_model_request",
            "type": "HollowModelRequest(HollowModelRequest.md)",
            "description": "",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "HollowModel200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "import_model",
      "verb": "POST",
      "path": "/scene/{scene_id}/import-model/",
      "summary": "Import model",
      "detail": {
        "signature": "ModelProperties import_model(scene_id, import_model_request, var_async=var_async)",
        "description": "Import model\nImport a model into the current scene",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "import_model_request",
            "type": "ImportModelRequest(ImportModelRequest.md)",
            "description": "",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "ModelProperties",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "label_part",
      "verb": "POST",
      "path": "/scene/{scene_id}/label/",
      "summary": "Label Part",
      "detail": {
        "signature": "HollowModel200Response label_part(scene_id, label_part_request, var_async=var_async)",
        "description": "Label Part\nLabels the specified model. Labels wrap around a model's surface.",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "label_part_request",
            "type": "LabelPartRequest(LabelPartRequest.md)",
            "description": "",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "HollowModel200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "load_form_file",
      "verb": "POST",
      "path": "/load-form/",
      "summary": "Load .form file",
      "detail": {
        "signature": "SceneModel load_form_file(load_form_file_request, var_async=var_async)",
        "description": "Load .form file\nLoad a .form file and create a new scene from it",
        "params": [
          {
            "name": "load_form_file_request",
            "type": "LoadFormFileRequest(LoadFormFileRequest.md)",
            "description": "Full path to the .form file to load",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Scene description"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "pack_and_cage",
      "verb": "POST",
      "path": "/scene/pack-and-cage/",
      "summary": "Pack and Cage",
      "detail": {
        "signature": "SceneModel pack_and_cage(pack_and_cage_request)",
        "description": "Pack and Cage\nAutomatically arrange models in the build volume and create a cage around them. Only applies to SLS-type scenes like the Fuse 1+.",
        "params": [
          {
            "name": "pack_and_cage_request",
            "type": "PackAndCageRequest(PackAndCageRequest.md)",
            "description": "Auto pack parameters",
            "notes": ""
          }
        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "## Bad Request  The scene will not be modified if any error occurs. The response will contain an error message."
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "replace_model",
      "verb": "POST",
      "path": "/scene/{scene_id}/models/{id}/replace/",
      "summary": "Replace model",
      "detail": {
        "signature": "ReplaceModel200Response replace_model(id, scene_id, replace_model_request)",
        "description": "Replace model\nReplace a model currently in the scene with a new model, copying the existing models setup and supports",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the model",
            "notes": ""
          },
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "replace_model_request",
            "type": "ReplaceModelRequest(ReplaceModelRequest.md)",
            "description": "",
            "notes": ""
          }
        ],
        "returnType": "ReplaceModel200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "scan_to_model",
      "verb": "POST",
      "path": "/scene/{scene_id}/scan-to-model/",
      "summary": "Scan to model",
      "detail": {
        "signature": "ScanToModel200Response scan_to_model(scene_id, scan_to_model_request, var_async=var_async)",
        "description": "Scan to model\nConvert an STL scan of teeth to a solid, printable model in an SLA scene",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "scan_to_model_request",
            "type": "ScanToModelRequest(ScanToModelRequest.md)",
            "description": "",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "ScanToModel200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "update_model",
      "verb": "POST",
      "path": "/scene/{scene_id}/models/{id}/",
      "summary": "Update model",
      "detail": {
        "signature": "update_model(id, scene_id, update_model_request)",
        "description": "Update model\nUpdate a model's properties",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the model",
            "notes": ""
          },
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "update_model_request",
            "type": "UpdateModelRequest(UpdateModelRequest.md)",
            "description": "Model properties to update",
            "notes": ""
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneApi",
      "method": "update_scene",
      "verb": "PUT",
      "path": "/scene/{scene_id}/",
      "summary": "Update Scene",
      "detail": {
        "signature": "SceneModel update_scene(scene_id, scene_type_model)",
        "description": "Update Scene\nUpdate the scene's properties",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "scene_type_model",
            "type": "SceneTypeModel(SceneTypeModel.md)",
            "description": "",
            "notes": ""
          }
        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "add_drain_holes_deprecated",
      "verb": "POST",
      "path": "/scene/add-drain-holes/",
      "summary": "Add Drain Holes",
      "detail": {
        "signature": "AddDrainHoles200Response add_drain_holes_deprecated()",
        "description": "Add Drain Holes\nDeprecated. See [/scene/{scene_id}/add-drain-holes/](#operation/addDrainHoles)",
        "params": [

        ],
        "returnType": "AddDrainHoles200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "auto_layout_deprecated",
      "verb": "POST",
      "path": "/scene/auto-layout/",
      "summary": "Auto Layout",
      "detail": {
        "signature": "SceneModel auto_layout_deprecated()",
        "description": "Auto Layout\nDeprecated. See [/scene/{scene_id}/auto-layout/](#operation/autoLayout)",
        "params": [

        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "## Bad Request  The scene will not be modified if any error occurs. The response will contain an error message."
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "auto_orient_deprecated",
      "verb": "POST",
      "path": "/scene/auto-orient/",
      "summary": "Auto Orient",
      "detail": {
        "signature": "auto_orient_deprecated()",
        "description": "Auto Orient\nDeprecated. See [/scene/{scene_id}/auto-orient/](#operation/autoOrient)",
        "params": [

        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "auto_pack_deprecated",
      "verb": "POST",
      "path": "/scene/auto-pack/",
      "summary": "Auto Pack",
      "detail": {
        "signature": "SceneModel auto_pack_deprecated()",
        "description": "Auto Pack\nDeprecated. See [/scene/{scene_id}/auto-pack/](#operation/autoPack)",
        "params": [

        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "## Bad Request  The scene will not be modified if any error occurs. The response will contain an error message."
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "auto_support_deprecated",
      "verb": "POST",
      "path": "/scene/auto-support/",
      "summary": "Auto Support",
      "detail": {
        "signature": "auto_support_deprecated()",
        "description": "Auto Support\nDeprecated. See [/scene/{scene_id}/auto-support/](#operation/autoSupport)",
        "params": [

        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "delete_model_deprecated",
      "verb": "DELETE",
      "path": "/scene/models/{id}/",
      "summary": "Delete model",
      "detail": {
        "signature": "delete_model_deprecated(id)",
        "description": "Delete model\nDeprecated. See [/scene/{scene_id}/models/{id}/](#operation/deleteModel)",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the model",
            "notes": ""
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "duplicate_model_deprecated",
      "verb": "POST",
      "path": "/scene/models/{id}/duplicate/",
      "summary": "Duplicate model",
      "detail": {
        "signature": "SceneModel duplicate_model_deprecated(id)",
        "description": "Duplicate model\nDeprecated. See [/scene/{scene_id}/models/{id}/duplicate/](#operation/duplicateModel)",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the model",
            "notes": ""
          }
        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "hollow_model_deprecated",
      "verb": "POST",
      "path": "/scene/hollow/",
      "summary": "Hollow Model",
      "detail": {
        "signature": "HollowModel200Response hollow_model_deprecated()",
        "description": "Hollow Model\nDeprecated. See [/scene/{scene_id}/hollow/](#operation/hollowModel)",
        "params": [

        ],
        "returnType": "HollowModel200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "import_model_deprecated",
      "verb": "POST",
      "path": "/scene/import-model/",
      "summary": "Import model",
      "detail": {
        "signature": "ModelProperties import_model_deprecated()",
        "description": "Import model\nDeprecated. See [/scene/{scene_id}/import-model/](#operation/importModel)",
        "params": [

        ],
        "returnType": "ModelProperties",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "label_part_deprecated",
      "verb": "POST",
      "path": "/scene/label/",
      "summary": "Label Part",
      "detail": {
        "signature": "HollowModel200Response label_part_deprecated()",
        "description": "Label Part\nDeprecated. See [/scene/{scene_id}/label/](#operation/labelPart)",
        "params": [

        ],
        "returnType": "HollowModel200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "replace_model_deprecated",
      "verb": "POST",
      "path": "/scene/models/{id}/replace/",
      "summary": "Replace model",
      "detail": {
        "signature": "ReplaceModel200Response replace_model_deprecated(id)",
        "description": "Replace model\nDeprecated. See [/scene/{scene_id}/models/{id}/replace/](#operation/replaceModel)",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the model",
            "notes": ""
          }
        ],
        "returnType": "ReplaceModel200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "scan_to_model_deprecated",
      "verb": "POST",
      "path": "/scene/scan-to-model/",
      "summary": "Scan to model",
      "detail": {
        "signature": "ScanToModel200Response scan_to_model_deprecated()",
        "description": "Scan to model\nDeprecated. See [/scene/{scene_id}/scan-to-model/](#operation/scanToModel)",
        "params": [

        ],
        "returnType": "ScanToModel200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "update_model_deprecated",
      "verb": "POST",
      "path": "/scene/models/{id}/",
      "summary": "Update model",
      "detail": {
        "signature": "update_model_deprecated(id)",
        "description": "Update model\nDeprecated. See [/scene/{scene_id}/models/{id}/](#operation/updateModel)",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the model",
            "notes": ""
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "ModifyingASceneDeprecatedApi",
      "method": "update_scene_deprecated",
      "verb": "PUT",
      "path": "/scene/",
      "summary": "Update Scene",
      "detail": {
        "signature": "SceneModel update_scene_deprecated()",
        "description": "Update Scene\nDeprecated. See [/scene/{scene_id}/](#operation/updateScene)",
        "params": [

        ],
        "returnType": "SceneModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "OperationsApi",
      "method": "call_print",
      "verb": "POST",
      "path": "/scene/{scene_id}/print/",
      "summary": "Print",
      "detail": {
        "signature": "Print200Response call_print(scene_id, print_request, var_async=var_async)",
        "description": "Print\nUpload the current scene to a printer or Fleet Control.\nBy default, only locally discovered printer names or local IP addresses are supported.\nTo upload prints remotely to your Fleet Control queue or printers registered to your\nDashboard account, you must be logged in and have an Internet connection.\nUse the Login endpoint to authenticate with Formlabs Web Services.",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "print_request",
            "type": "PrintRequest(PrintRequest.md)",
            "description": "",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "Print200Response",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "OperationsApi",
      "method": "get_all_operations",
      "verb": "GET",
      "path": "/operations/",
      "summary": "List All Operations",
      "detail": {
        "signature": "GetAllOperations200Response get_all_operations()",
        "description": "List All Operations\nList all in-progress, completed, and failed operations that have been started since this server was launched. Operations are not currently persisted across server restarts.\nTo get the result of a completed or errored operation, call GET `/operations/{id}/`.",
        "params": [

        ],
        "returnType": "GetAllOperations200Response",
        "statuses": [
          {
            "code": "200",
            "description": "List of operations"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "OperationsApi",
      "method": "get_operation",
      "verb": "GET",
      "path": "/operations/{id}/",
      "summary": "Get Operation Status",
      "detail": {
        "signature": "GetOperation200Response get_operation(id)",
        "description": "Get Operation Status\nRetrieve the status, progress, and result of a long-running operation by its ID.",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the operation.",
            "notes": ""
          }
        ],
        "returnType": "GetOperation200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Operation details. Will be a 200 regardless of if the operations is in progress, succeeded, or failed."
          },
          {
            "code": "404",
            "description": "Operation not found."
          },
          {
            "code": "500",
            "description": "Internal server error."
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "OperationsDeprecatedApi",
      "method": "print_deprecated",
      "verb": "POST",
      "path": "/scene/print/",
      "summary": "Print",
      "detail": {
        "signature": "Print200Response print_deprecated()",
        "description": "Print\nDeprecated. See [/scene/{scene_id}/print/](#operation/print)",
        "params": [

        ],
        "returnType": "Print200Response",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "PrintSettingsApi",
      "method": "list_materials",
      "verb": "GET",
      "path": "/list-materials/",
      "summary": "List Materials",
      "detail": {
        "signature": "ListMaterials200Response list_materials()",
        "description": "List Materials\nList all available materials and material settings by printer type.\nThe returned JSON has 3 layers: Printer types (e.g. \"Form 4\"), Materials (e.g. \"Black V5\"), and Material Setting (e.g. \"0.025mm\" or \"0.100mm (Legacy)\"). These \"label\" strings at each level are the preferred way of referring to that printer types, materials, and settings. They can presented in a UI as a 3-level dropdown menu, or a flat filtered list. This list is static (it will not change for a given version of the PreFormServer executable).\nEach value has `scene_settings` with all data needed to create a new scene. It can be passed directly to a /scene/ POST to create a scene for that printer, material, and materialSettings.",
        "params": [

        ],
        "returnType": "ListMaterials200Response",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "PrintingApi",
      "method": "call_print",
      "verb": "POST",
      "path": "/scene/{scene_id}/print/",
      "summary": "Print",
      "detail": {
        "signature": "Print200Response call_print(scene_id, print_request, var_async=var_async)",
        "description": "Print\nUpload the current scene to a printer or Fleet Control.\nBy default, only locally discovered printer names or local IP addresses are supported.\nTo upload prints remotely to your Fleet Control queue or printers registered to your\nDashboard account, you must be logged in and have an Internet connection.\nUse the Login endpoint to authenticate with Formlabs Web Services.",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "print_request",
            "type": "PrintRequest(PrintRequest.md)",
            "description": "",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "Print200Response",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "PrintingDeprecatedApi",
      "method": "print_deprecated",
      "verb": "POST",
      "path": "/scene/print/",
      "summary": "Print",
      "detail": {
        "signature": "Print200Response print_deprecated()",
        "description": "Print\nDeprecated. See [/scene/{scene_id}/print/](#operation/print)",
        "params": [

        ],
        "returnType": "Print200Response",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "RemoteAccessApi",
      "method": "call_print",
      "verb": "POST",
      "path": "/scene/{scene_id}/print/",
      "summary": "Print",
      "detail": {
        "signature": "Print200Response call_print(scene_id, print_request, var_async=var_async)",
        "description": "Print\nUpload the current scene to a printer or Fleet Control.\nBy default, only locally discovered printer names or local IP addresses are supported.\nTo upload prints remotely to your Fleet Control queue or printers registered to your\nDashboard account, you must be logged in and have an Internet connection.\nUse the Login endpoint to authenticate with Formlabs Web Services.",
        "params": [
          {
            "name": "scene_id",
            "type": "str",
            "description": "The unique identifier of the scene",
            "notes": ""
          },
          {
            "name": "print_request",
            "type": "PrintRequest(PrintRequest.md)",
            "description": "",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "Print200Response",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "RemoteAccessApi",
      "method": "discover_devices",
      "verb": "POST",
      "path": "/discover-devices/",
      "summary": "Discover Devices",
      "detail": {
        "signature": "DiscoverDevices200Response discover_devices(discover_devices_request, var_async=var_async)",
        "description": "Discover Devices\nDiscover new devices on the network",
        "params": [
          {
            "name": "discover_devices_request",
            "type": "DiscoverDevicesRequest(DiscoverDevicesRequest.md)",
            "description": "",
            "notes": ""
          },
          {
            "name": "var_async",
            "type": "bool",
            "description": "Whether to run the operation asynchronously",
            "notes": "[optional]"
          }
        ],
        "returnType": "DiscoverDevices200Response",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "RemoteAccessApi",
      "method": "get_device",
      "verb": "GET",
      "path": "/devices/{id}/",
      "summary": "Get Device",
      "detail": {
        "signature": "DeviceStatusModel get_device(id)",
        "description": "Get Device\nGet a previously discovered device's status",
        "params": [
          {
            "name": "id",
            "type": "str",
            "description": "The unique identifier of the printer",
            "notes": ""
          }
        ],
        "returnType": "DeviceStatusModel",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "RemoteAccessApi",
      "method": "get_devices",
      "verb": "GET",
      "path": "/devices/",
      "summary": "Get Devices",
      "detail": {
        "signature": "GetDevices200Response get_devices(can_print=can_print)",
        "description": "Get Devices\nList of previously discovered device statuses\nBy default, only locally discovered printer names are returned.\nTo include your Fleet Control queues or printers registered to your\nDashboard account, you must be logged in and have an Internet connection.\nUse the Login endpoint to authenticate with Formlabs Web Services.",
        "params": [
          {
            "name": "can_print",
            "type": "bool",
            "description": "If true, only devices that can receive prints will be returned.",
            "notes": "[optional]"
          }
        ],
        "returnType": "GetDevices200Response",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "RemoteAccessApi",
      "method": "get_user",
      "verb": "GET",
      "path": "/user/",
      "summary": "Get logged in user information",
      "detail": {
        "signature": "UserInformationModel get_user()",
        "description": "Get logged in user information\nGet the logged in user's account information",
        "params": [

        ],
        "returnType": "UserInformationModel",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "404",
            "description": "No user is logged in"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "RemoteAccessApi",
      "method": "login",
      "verb": "POST",
      "path": "/login/",
      "summary": "Login",
      "detail": {
        "signature": "WebAuthTokensModel login(login_request)",
        "description": "Login\nLog in to Formlabs Web Services using an existing formlabs.com account.",
        "params": [
          {
            "name": "login_request",
            "type": "LoginRequest(LoginRequest.md)",
            "description": "User credentials",
            "notes": ""
          }
        ],
        "returnType": "WebAuthTokensModel",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "RemoteAccessApi",
      "method": "logout",
      "verb": "POST",
      "path": "/logout/",
      "summary": "Log out",
      "detail": {
        "signature": "logout()",
        "description": "Log out\nLog out of Formlabs Web Services",
        "params": [

        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Bad Request"
          }
        ]
      }
    },
    {
      "source": "Local API + SDK",
      "apiClass": "RemoteAccessDeprecatedApi",
      "method": "print_deprecated",
      "verb": "POST",
      "path": "/scene/print/",
      "summary": "Print",
      "detail": {
        "signature": "Print200Response print_deprecated()",
        "description": "Print\nDeprecated. See [/scene/{scene_id}/print/](#operation/print)",
        "params": [

        ],
        "returnType": "Print200Response",
        "statuses": [
          {
            "code": "200",
            "description": "OK"
          },
          {
            "code": "400",
            "description": "Bad Request"
          },
          {
            "code": "202",
            "description": "Async operation accepted"
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "AuthenticationApi",
      "method": "request_an_access_token",
      "verb": "POST",
      "path": "/developer/v1/o/token/",
      "summary": "",
      "detail": {
        "signature": "RequestAnAccessToken200Response request_an_access_token(grant_type, client_id, client_secret)",
        "description": "To log in to the Dashboard Developer API, you need to request an access token.\nThis token is used to authenticate your requests to the API.\nYou can request an access token by providing your client ID and client secret.",
        "params": [
          {
            "name": "grant_type",
            "type": "str",
            "description": "The type of grant being used. Currently only &#x60;client_credentials&#x60; is supported",
            "notes": ""
          },
          {
            "name": "client_id",
            "type": "str",
            "description": "Your Client ID.",
            "notes": ""
          },
          {
            "name": "client_secret",
            "type": "str",
            "description": "Your Client Secret.",
            "notes": ""
          }
        ],
        "returnType": "RequestAnAccessToken200Response",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "400",
            "description": "Invalid credentials"
          },
          {
            "code": "401",
            "description": "Unauthorized"
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "AuthenticationApi",
      "method": "revoke_an_access_token",
      "verb": "POST",
      "path": "/developer/v1/o/revoke_token/",
      "summary": "",
      "detail": {
        "signature": "revoke_an_access_token(token, client_id, client_secret)",
        "description": "You can log out from your current authenticated session by revoking the access token.\nWhen successfully revoked, the API does not return any response.\nAs aforementioned, once you send a request to revoke the specified access token,\nthis token can no longer be used to make requests to the Dashboard Developer API.\nPlease retrieve a new access token to start using the API again.",
        "params": [
          {
            "name": "token",
            "type": "str",
            "description": "Your access token.",
            "notes": ""
          },
          {
            "name": "client_id",
            "type": "str",
            "description": "Your client ID.",
            "notes": ""
          },
          {
            "name": "client_secret",
            "type": "str",
            "description": "Your client secret.",
            "notes": ""
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "Success"
          },
          {
            "code": "401",
            "description": "Unauthorized"
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "CartridgesApi",
      "method": "cartridges_list",
      "verb": "GET",
      "path": "/developer/v1/cartridges/",
      "summary": "",
      "detail": {
        "signature": "PaginatedCartridgeList cartridges_list(page=page, per_page=per_page)",
        "description": "List of all resin cartridges associated with my account",
        "params": [
          {
            "name": "page",
            "type": "int",
            "description": "A page number within the paginated result set.",
            "notes": "[optional]"
          },
          {
            "name": "per_page",
            "type": "int",
            "description": "Number of results to return per page.",
            "notes": "[optional]"
          }
        ],
        "returnType": "PaginatedCartridgeList",
        "statuses": [
          {
            "code": "200",
            "description": ""
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "EventsApi",
      "method": "events_list",
      "verb": "GET",
      "path": "/developer/v1/events/",
      "summary": "",
      "detail": {
        "signature": "PaginatedUserEventReadOnlyList events_list(cartridge=cartridge, date__gt=date__gt, date__lt=date__lt, page=page, per_page=per_page, print_run=print_run, printer=printer, tank=tank, type=type)",
        "description": "List of all events associated with my account",
        "params": [
          {
            "name": "cartridge",
            "type": "str",
            "description": "Filter by resin cartridge serial",
            "notes": "[optional]"
          },
          {
            "name": "date__gt",
            "type": "datetime",
            "description": "Filter by date greater than date specified (ISO 8601 Format)",
            "notes": "[optional]"
          },
          {
            "name": "date__lt",
            "type": "datetime",
            "description": "Filter by date less than date specified (ISO 8601 Format)",
            "notes": "[optional]"
          },
          {
            "name": "page",
            "type": "int",
            "description": "A page number within the paginated result set.",
            "notes": "[optional]"
          },
          {
            "name": "per_page",
            "type": "int",
            "description": "Number of results to return per page.",
            "notes": "[optional]"
          },
          {
            "name": "print_run",
            "type": "str",
            "description": "Filter by print id",
            "notes": "[optional]"
          },
          {
            "name": "printer",
            "type": "str",
            "description": "Filter by printer serial",
            "notes": "[optional]"
          },
          {
            "name": "tank",
            "type": "str",
            "description": "Filter by resin tank serial",
            "notes": "[optional]"
          },
          {
            "name": "type",
            "type": "str",
            "description": "Filter by Event Type",
            "notes": "[optional]"
          }
        ],
        "returnType": "PaginatedUserEventReadOnlyList",
        "statuses": [
          {
            "code": "200",
            "description": ""
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrinterGroupsApi",
      "method": "groups_bulk_add_printers_create",
      "verb": "POST",
      "path": "/developer/v1/groups/bulk-add-printers/",
      "summary": "",
      "detail": {
        "signature": "groups_bulk_add_printers_create(developer_api_groups_bulk_add_printers_request)",
        "description": "Move Printer(s) to a Printer Group.  \n**Notes:** Request sender needs to be admin of target group and all of the Printers’ groups.",
        "params": [
          {
            "name": "developer_api_groups_bulk_add_printers_request",
            "type": "DeveloperAPIGroupsBulkAddPrintersRequest(DeveloperAPIGroupsBulkAddPrintersRequest.md)",
            "description": "",
            "notes": ""
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "200",
            "description": "No response body"
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrinterGroupsApi",
      "method": "groups_create",
      "verb": "POST",
      "path": "/developer/v1/groups/",
      "summary": "",
      "detail": {
        "signature": "NewWorkgroup groups_create(partial_work_group_request)",
        "description": "Create a group for my account, and make me an administrator.",
        "params": [
          {
            "name": "partial_work_group_request",
            "type": "PartialWorkGroupRequest(PartialWorkGroupRequest.md)",
            "description": "",
            "notes": ""
          }
        ],
        "returnType": "NewWorkgroup",
        "statuses": [
          {
            "code": "201",
            "description": ""
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrinterGroupsApi",
      "method": "groups_destroy",
      "verb": "DELETE",
      "path": "/developer/v1/groups/{group_id}/",
      "summary": "",
      "detail": {
        "signature": "groups_destroy(group_id)",
        "description": "Delete a group administered by my account.",
        "params": [
          {
            "name": "group_id",
            "type": "str",
            "description": "A UUID string identifying this workgroup.",
            "notes": ""
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "204",
            "description": "No response body"
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrinterGroupsApi",
      "method": "groups_list",
      "verb": "GET",
      "path": "/developer/v1/groups/",
      "summary": "",
      "detail": {
        "signature": "List[Workgroup] groups_list()",
        "description": "List of all groups for my account.",
        "params": [

        ],
        "returnType": "List[Workgroup]",
        "statuses": [
          {
            "code": "200",
            "description": ""
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrinterGroupsApi",
      "method": "groups_members_create",
      "verb": "POST",
      "path": "/developer/v1/groups/{group_id}/members/",
      "summary": "",
      "detail": {
        "signature": "WorkgroupMembership groups_members_create(group_id, developer_api_group_membership_create_request)",
        "description": "Invite a user into my group.",
        "params": [
          {
            "name": "group_id",
            "type": "str",
            "description": "A UUID string identifying this Printer Group",
            "notes": ""
          },
          {
            "name": "developer_api_group_membership_create_request",
            "type": "DeveloperAPIGroupMembershipCreateRequest(DeveloperAPIGroupMembershipCreateRequest.md)",
            "description": "",
            "notes": ""
          }
        ],
        "returnType": "WorkgroupMembership",
        "statuses": [
          {
            "code": "201",
            "description": ""
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrinterGroupsApi",
      "method": "groups_members_destroy",
      "verb": "DELETE",
      "path": "/developer/v1/groups/{group_id}/members/",
      "summary": "",
      "detail": {
        "signature": "groups_members_destroy(group_id, groups_members_destroy_request=groups_members_destroy_request)",
        "description": "Delete a membership in an administered group.",
        "params": [
          {
            "name": "group_id",
            "type": "str",
            "description": "A UUID string identifying this Printer Group",
            "notes": ""
          },
          {
            "name": "groups_members_destroy_request",
            "type": "GroupsMembersDestroyRequest(GroupsMembersDestroyRequest.md)",
            "description": "",
            "notes": "[optional]"
          }
        ],
        "returnType": "void (empty response body)",
        "statuses": [
          {
            "code": "204",
            "description": "No response body"
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrinterGroupsApi",
      "method": "groups_members_update",
      "verb": "PUT",
      "path": "/developer/v1/groups/{group_id}/members/",
      "summary": "",
      "detail": {
        "signature": "WorkgroupMembership groups_members_update(group_id, developer_api_group_membership_update_request)",
        "description": "Update a membership in an administered group.\n  **Warning: You cannot revoke the administrator right of yourself if there are no other administrators!**",
        "params": [
          {
            "name": "group_id",
            "type": "str",
            "description": "A UUID string identifying this Printer Group",
            "notes": ""
          },
          {
            "name": "developer_api_group_membership_update_request",
            "type": "DeveloperAPIGroupMembershipUpdateRequest(DeveloperAPIGroupMembershipUpdateRequest.md)",
            "description": "",
            "notes": ""
          }
        ],
        "returnType": "WorkgroupMembership",
        "statuses": [
          {
            "code": "200",
            "description": ""
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrinterGroupsApi",
      "method": "groups_partial_update",
      "verb": "PATCH",
      "path": "/developer/v1/groups/{group_id}/",
      "summary": "",
      "detail": {
        "signature": "Workgroup groups_partial_update(group_id, patched_partial_work_group_request=patched_partial_work_group_request)",
        "description": "Update a group administered by my account.",
        "params": [
          {
            "name": "group_id",
            "type": "str",
            "description": "A UUID string identifying this workgroup.",
            "notes": ""
          },
          {
            "name": "patched_partial_work_group_request",
            "type": "PatchedPartialWorkGroupRequest(PatchedPartialWorkGroupRequest.md)",
            "description": "",
            "notes": "[optional]"
          }
        ],
        "returnType": "Workgroup",
        "statuses": [
          {
            "code": "200",
            "description": ""
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrinterGroupsApi",
      "method": "groups_queue_list",
      "verb": "GET",
      "path": "/developer/v1/groups/{group_id}/queue/",
      "summary": "",
      "detail": {
        "signature": "List[DeveloperAPIMyCloudQueueItems] groups_queue_list(group_id)",
        "description": "List of all items in the queue of a group.\nA Printer Group can only have a queue if the group has Fleet Control turned on.\nFor non-Fleet Control groups, the queue is always empty and the call returns empty.",
        "params": [
          {
            "name": "group_id",
            "type": "str",
            "description": "A UUID string identifying this Printer Group",
            "notes": ""
          }
        ],
        "returnType": "List[DeveloperAPIMyCloudQueueItems]",
        "statuses": [
          {
            "code": "200",
            "description": ""
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrintersApi",
      "method": "printers_list",
      "verb": "GET",
      "path": "/developer/v1/printers/",
      "summary": "",
      "detail": {
        "signature": "List[DeveloperAPIMyPrinter] printers_list()",
        "description": "List of all Printers associated with my account",
        "params": [

        ],
        "returnType": "List[DeveloperAPIMyPrinter]",
        "statuses": [
          {
            "code": "200",
            "description": ""
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrintersApi",
      "method": "printers_retrieve",
      "verb": "GET",
      "path": "/developer/v1/printers/{printer_serial}/",
      "summary": "",
      "detail": {
        "signature": "DeveloperAPIMyPrinter printers_retrieve(printer_serial)",
        "description": "Specific Printer associated with my account",
        "params": [
          {
            "name": "printer_serial",
            "type": "str",
            "description": "A unique value identifying this printer.",
            "notes": ""
          }
        ],
        "returnType": "DeveloperAPIMyPrinter",
        "statuses": [
          {
            "code": "200",
            "description": ""
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrintsApi",
      "method": "printers_prints_list",
      "verb": "GET",
      "path": "/developer/v1/printers/{printer_serial}/prints/",
      "summary": "",
      "detail": {
        "signature": "PaginatedPrintRunWithFleetControlDataList printers_prints_list(printer_serial, var_date=var_date, date__gt=date__gt, date__lt=date__lt, machine_type_id=machine_type_id, material=material, name=name, page=page, per_page=per_page, printer=printer, status=status)",
        "description": "List of all prints associated with my account",
        "params": [
          {
            "name": "printer_serial",
            "type": "str",
            "description": "",
            "notes": ""
          },
          {
            "name": "var_date",
            "type": "datetime",
            "description": "Filter by date time (ISO 8601 Format)",
            "notes": "[optional]"
          },
          {
            "name": "date__gt",
            "type": "datetime",
            "description": "Filter by date time greater than date time specified (ISO 8601 Format)",
            "notes": "[optional]"
          },
          {
            "name": "date__lt",
            "type": "datetime",
            "description": "Filter by date time less than date time specified (ISO 8601 Format)",
            "notes": "[optional]"
          },
          {
            "name": "machine_type_id",
            "type": "List[str](str.md)",
            "description": "Filter by machine type id.",
            "notes": "[optional]"
          },
          {
            "name": "material",
            "type": "str",
            "description": "",
            "notes": "[optional]"
          },
          {
            "name": "name",
            "type": "str",
            "description": "Filter by name of the print (Substring Match)",
            "notes": "[optional]"
          },
          {
            "name": "page",
            "type": "int",
            "description": "A page number within the paginated result set.",
            "notes": "[optional]"
          },
          {
            "name": "per_page",
            "type": "int",
            "description": "Number of results to return per page.",
            "notes": "[optional]"
          },
          {
            "name": "printer",
            "type": "str",
            "description": "Filter by printer serial",
            "notes": "[optional]"
          },
          {
            "name": "status",
            "type": "str",
            "description": "Filter by status of the print. Possible values are:           * &#x60;QUEUED&#x60; - Queued           * &#x60;PREPRINT&#x60; - Preprint           * &#x60;PRINTING&#x60; - Printing           * &#x60;PAUSING&#x60; - Pausing           * &#x60;PAUSED&#x60; - Paused           * &#x60;FINISHED&#x60; - Finished           * &#x60;ABORTING&#x60; - Aborting           * &#x60;ABORTED&#x60; - Aborted           * &#x60;ERROR&#x60; - Error           * &#x60;WAITING_FOR_RESOLUTION&#x60; - Waiting for Resolution           * &#x60;PREHEAT&#x60; - Preheat           * &#x60;PRECOAT&#x60; - Precoat           * &#x60;POSTCOAT&#x60; - Postcoat",
            "notes": "[optional]"
          }
        ],
        "returnType": "PaginatedPrintRunWithFleetControlDataList",
        "statuses": [
          {
            "code": "200",
            "description": ""
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "PrintsApi",
      "method": "prints_list",
      "verb": "GET",
      "path": "/developer/v1/prints/",
      "summary": "",
      "detail": {
        "signature": "PaginatedPrintRunWithFleetControlDataList prints_list(var_date=var_date, date__gt=date__gt, date__lt=date__lt, machine_type_id=machine_type_id, material=material, name=name, page=page, per_page=per_page, printer=printer, status=status)",
        "description": "List of all prints associated with my account",
        "params": [
          {
            "name": "var_date",
            "type": "datetime",
            "description": "Filter by date time (ISO 8601 Format)",
            "notes": "[optional]"
          },
          {
            "name": "date__gt",
            "type": "datetime",
            "description": "Filter by date time greater than date time specified (ISO 8601 Format)",
            "notes": "[optional]"
          },
          {
            "name": "date__lt",
            "type": "datetime",
            "description": "Filter by date time less than date time specified (ISO 8601 Format)",
            "notes": "[optional]"
          },
          {
            "name": "machine_type_id",
            "type": "List[str](str.md)",
            "description": "Filter by machine type id.",
            "notes": "[optional]"
          },
          {
            "name": "material",
            "type": "str",
            "description": "",
            "notes": "[optional]"
          },
          {
            "name": "name",
            "type": "str",
            "description": "Filter by name of the print (Substring Match)",
            "notes": "[optional]"
          },
          {
            "name": "page",
            "type": "int",
            "description": "A page number within the paginated result set.",
            "notes": "[optional]"
          },
          {
            "name": "per_page",
            "type": "int",
            "description": "Number of results to return per page.",
            "notes": "[optional]"
          },
          {
            "name": "printer",
            "type": "str",
            "description": "Filter by printer serial",
            "notes": "[optional]"
          },
          {
            "name": "status",
            "type": "str",
            "description": "Filter by status of the print. Possible values are:           * &#x60;QUEUED&#x60; - Queued           * &#x60;PREPRINT&#x60; - Preprint           * &#x60;PRINTING&#x60; - Printing           * &#x60;PAUSING&#x60; - Pausing           * &#x60;PAUSED&#x60; - Paused           * &#x60;FINISHED&#x60; - Finished           * &#x60;ABORTING&#x60; - Aborting           * &#x60;ABORTED&#x60; - Aborted           * &#x60;ERROR&#x60; - Error           * &#x60;WAITING_FOR_RESOLUTION&#x60; - Waiting for Resolution           * &#x60;PREHEAT&#x60; - Preheat           * &#x60;PRECOAT&#x60; - Precoat           * &#x60;POSTCOAT&#x60; - Postcoat",
            "notes": "[optional]"
          }
        ],
        "returnType": "PaginatedPrintRunWithFleetControlDataList",
        "statuses": [
          {
            "code": "200",
            "description": ""
          }
        ]
      }
    },
    {
      "source": "Web API + SDK",
      "apiClass": "TanksApi",
      "method": "tanks_list",
      "verb": "GET",
      "path": "/developer/v1/tanks/",
      "summary": "",
      "detail": {
        "signature": "PaginatedTankList tanks_list(page=page, per_page=per_page)",
        "description": "List of all resin tanks associated with my account",
        "params": [
          {
            "name": "page",
            "type": "int",
            "description": "A page number within the paginated result set.",
            "notes": "[optional]"
          },
          {
            "name": "per_page",
            "type": "int",
            "description": "Number of results to return per page.",
            "notes": "[optional]"
          }
        ],
        "returnType": "PaginatedTankList",
        "statuses": [
          {
            "code": "200",
            "description": ""
          }
        ]
      }
    }
  ],
  "examples": [
    {
      "title": "Batching",
      "path": "batching.py",
      "kind": "py",
      "code": "\"\"\"\nDemo application that batches all STL files in a folder into .form files.\n\nUsage: python3 batching.py ~/Documents/folder-of-stl-files\n\nOptional flags:\n--auto-orient: Auto orient models\n--dental-mode: Use dental mode when auto orienting\n--auto-support: Auto support models\n--username: Username for login if uploading to a remote printer or Fleet Control queue\n--password: Password for login if uploading to a remote printer or Fleet Control queue\n--upload-to: Upload to a specific printer, IP Address, or Fleet Control Printer Group ID\n\"\"\"\n\nimport argparse\nimport os\nimport pathlib\nimport csv\nimport sys\nimport formlabs_local_api as formlabs\nfrom formlabs_local_api import (\n    AutoSupportRequest,\n    AutoOrientRequest,\n    AutoLayoutRequest,\n    SceneTypeModel,\n    Manual,\n    ManualLayerThicknessMm,\n    ModelsSelectionModel,\n    LoadFormFileRequest,\n    LoginRequest,\n    UsernameAndPassword,\n    PrintRequest,\n    Default,\n    DentalMode,\n)\n\n\ndef list_files_in_directory(directory_path):\n    return [\n        f\n        for f in os.listdir(directory_path)\n        if os.path.isfile(os.path.join(directory_path, f)) and f.endswith(\".stl\")\n    ]\n\ndef create_scene(preform):\n    return preform.api.create_default_scene(SceneTypeModel(Manual(\n        machine_type=\"FORM-4-0\",\n        material_code=\"FLGPGR05\",\n        layer_thickness_mm=ManualLayerThicknessMm(\"0.1\"),\n        print_setting=\"DEFAULT\",\n    )))\n\nparser = argparse.ArgumentParser(description=\"Process a folder path.\")\nparser.add_argument(\"folder\", type=str, help=\"Path to the folder\")\nparser.add_argument(\"--auto-orient\", action=\"store_true\", help=\"Auto orient models\")\nparser.add_argument(\"--dental-mode\", action=\"store_true\", help=\"Use dental mode when auto orienting\")\nparser.add_argument(\"--auto-support\", action=\"store_true\", help=\"Auto support models\")\nparser.add_argument(\"--username\", type=str, help=\"Username for login\")\nparser.add_argument(\"--password\", type=str, help=\"Password for login\")\nparser.add_argument(\"--upload-to\", type=str, help=\"Upload to a specific printer, IP Address, or Fleet Control Printer Group ID\")\nargs = parser.parse_args()\n\ndirectory_path = os.path.abspath(args.folder)\nfiles_to_batch = list_files_in_directory(directory_path)\nprint(\"Files to batch:\")\nprint(files_to_batch)\ncurrent_batch = 1\nmodels_in_current_batch = []\nCSV_RESULT_FILENAME = os.path.join(directory_path, \"summary.csv\")\n\npathToPreformServer = None\nif sys.platform == 'win32':\n    pathToPreformServer = pathlib.Path().resolve() / \"PreFormServer/PreFormServer.exe\"\nelif sys.platform == 'darwin':\n    pathToPreformServer = pathlib.Path().resolve() / \"PreFormServer.app/Contents/MacOS/PreFormServer\"\nelse:\n    print(\"Unsupported platform\")\n    sys.exit(1)\n\nwith formlabs.PreFormApi.start_preform_server(pathToPreformServer=pathToPreformServer) as preform:"
    },
    {
      "title": "Print Dialog / Print Dialog",
      "path": "print-dialog/print_dialog.py",
      "kind": "py",
      "code": "\"\"\"\nDemo application of a Print Upload Dialog using the Formlabs Local API.\n\nThe application is meant to be demo of the API calls and logic involved in building a print upload dialog.\nThe model to be sliced and uploaded is a simple cube.stl file included in the same directory as this script.\n\nThe following are all left intentionally unfinished to keep the demo code concise:\n- Loading user models\n- Print preparation\n- Application styling\n- Deployment\n\nInstallation:\n- On MacOS if using Python 3.12: brew install python-tk@3.12\n\"\"\"\n\nimport tkinter as tk\nfrom tkinter import messagebox, simpledialog\nfrom tkinter import ttk  # themed tk\nfrom typing import TypedDict, NotRequired\nimport atexit\nimport pathlib\nfrom requests import request\nfrom requests.exceptions import HTTPError\nimport formlabs_local_api_minimal as formlabs\nimport sys\nimport time\n\nserver_path: str = \"\"\nif sys.platform == \"win32\":\n    server_path = str(pathlib.Path().resolve().parents[1] / \"PreFormServer/PreFormServer.exe\")\nelif sys.platform == \"darwin\":\n    server_path = str(pathlib.Path().resolve().parents[1] / \"PreFormServer.app/Contents/MacOS/PreFormServer\")\nelse:\n    print(\"Unsupported platform\")\n    sys.exit(1)\n\n# Type Definitions\nPrinterTypeDropdownLabel = str  # Example \"Form 3/3+\"\nPrinterDropdownLabel = str  # Example [Form 3] TestyTest - Idle\nPrintSettingDropdownLabel = str  # Example \"Alumina 4N V1 0.050 mm (Default Settings)\"\nProductName = str  # Example: \"Form 3\"\nMachineTypeId = str  # Example: \"FORM-3-0\"\nPrintOperationId = str  # uuid string\nDeviceData = TypedDict(\n    \"DeviceData\",\n    {\n        \"product_name\": ProductName,\n        \"id\": str,\n        \"status\": str,\n        \"dashboard_queue_id\": NotRequired[str],\n        \"supported_machine_type_ids\": NotRequired[list[MachineTypeId]],\n        \"ready_to_print_now\": NotRequired[bool],\n    },\n)\nSceneSettings = TypedDict(\n    \"SceneSettings\",\n    {\n        \"layer_thickness_mm\": float,\n        \"machine_type\": MachineTypeId,\n        \"material_code\": str,\n        \"print_setting\": str,\n    },\n)\n\nTEST_FILE_PATH = pathlib.Path().resolve() / \"cube.stl\"\nSLICING_PROGRESS_POLL_INTERVAL_S = 0.5\nPRINTER_GROUP_PRODUCT_NAME: ProductName = \"Printer Group\"\nBASE_API_URL = \"http://localhost:44388\"\n\n\nclass AppState:\n    def __init__(self):\n        self.logged_in_access_token: str = \"\"\n        self.logged_in_username: str = \"\"\n        self.available_printers: dict[PrinterDropdownLabel, DeviceData] = self.get_printers()\n        self.selected_printer: PrinterDropdownLabel = \"\"\n        self.api_materials_and_printer_data = api_request(\"GET\", \"/list-materials/\")\n        self.product_names_within_material_group: dict[PrinterTypeDropdownLabel, list[ProductName]] = {}\n        self.supported_machine_type_ids_by_material_group: dict[PrinterTypeDropdownLabel, list[MachineTypeId]] = {}"
    },
    {
      "title": "Hello Web Api",
      "path": "hello-web-api.py",
      "kind": "py",
      "code": "\"\"\"\nDemo application of authenticating and making an authenticated request to the Formlabs Web API.\n\nGet your Client ID and Secret at https://dashboard.formlabs.com/#developer\n\"\"\"\n\nimport requests\n\nCLIENT_ID = \"\"\nCLIENT_SECRET = \"\"\n\n\ndef login_and_get_access_token():\n    payload = {\n        \"grant_type\": \"client_credentials\",\n        \"client_id\": CLIENT_ID,\n        \"client_secret\": CLIENT_SECRET,\n    }\n    headers = {\n        \"Content-Type\": \"application/x-www-form-urlencoded\",\n    }\n    response = requests.request(\n        \"POST\",\n        \"https://api.formlabs.com/developer/v1/o/token/\",\n        data=payload,\n        headers=headers,\n    )\n    response.raise_for_status()\n    access_token = response.json()[\"access_token\"]\n    return access_token\n\n\ndef request_all_printers_status(access_token):\n    headers = {\"Authorization\": f\"Bearer {access_token}\"}\n    response = requests.request(\n        \"GET\", \"https://api.formlabs.com/developer/v1/printers/\", headers=headers\n    )\n    response.raise_for_status()\n    return response.json()\n\n\ndef output_printer_status(printers_status_json):\n    print(\"Status of all printers:\")\n    for printer in printers_status_json:\n        print(f\"{printer['serial']}: {printer['printer_status']['status']}\")\n\n\nif __name__ == \"__main__\":\n    if not CLIENT_ID or not CLIENT_SECRET:\n        raise ValueError(\n            \"Please set CLIENT_ID and CLIENT_SECRET with your API client credentials\"\n        )\n    access_token = login_and_get_access_token()\n    status_data = request_all_printers_status(access_token)\n    output_printer_status(status_data)"
    },
    {
      "title": "Hello Server",
      "path": "hello-server.py",
      "kind": "py",
      "code": "import formlabs_local_api as formlabs\nfrom formlabs_local_api import Manual, ManualLayerThicknessMm, SceneTypeModel\nimport pathlib\nimport sys\n\ndef hello_server():\n    pathToPreformServer = None\n    if sys.platform == 'win32':\n        pathToPreformServer = pathlib.Path().resolve() / \"PreFormServer/PreFormServer.exe\"\n    elif sys.platform == 'darwin':\n        pathToPreformServer = pathlib.Path().resolve() / \"PreFormServer.app/Contents/MacOS/PreFormServer\"\n    else:\n        print(\"Unsupported platform\")\n        sys.exit(1)\n    with formlabs.PreFormApi.start_preform_server(pathToPreformServer=pathToPreformServer) as preform:\n        preform.api.create_scene(SceneTypeModel(Manual(\n            machine_type=\"FORM-4-0\",\n            material_code=\"FLRG1011\",\n            layer_thickness_mm=ManualLayerThicknessMm(\"0.1\"),\n            print_setting=\"DEFAULT\",\n        )))\n        print(\"Scene created, exiting\")\n\nif __name__ == \"__main__\":\n    hello_server()"
    },
    {
      "title": "Web Api Send Group Invitations / Requirements",
      "path": "web-api-send-group-invitations/requirements.txt",
      "kind": "txt",
      "code": "annotated-types==0.7.0\n-e file:///Users/janos.molnar/formlabs/formlabs-api-python/web-api/lib\npydantic==2.10.6\npydantic-core==2.27.2\npython-dateutil==2.9.0.post0\nsix==1.17.0\ntyping-extensions==4.12.2\nurllib3==2.3.0"
    },
    {
      "title": "Web Api Send Group Invitations / Readme",
      "path": "web-api-send-group-invitations/README.md",
      "kind": "md",
      "code": "# Web API Send Group Invitations\n\nThis project demonstrates how to use the Formlabs API to send group invitations via a Python script.\n\n## Prerequisites\n\n- Python 3.X\n- Formlabs API credentials\n\n## Installation\n\n1. Clone the repository:\n    ```sh\n    git clone https://github.com/yourusername/formlabs-api-python.git\n    ```\n2. Navigate to the project directory:\n    ```sh\n    cd formlabs-api-python/examples/web-api-send-group-invitations\n    ```\n3. Install the required dependencies:\n    ```sh\n    pip install -r requirements.txt\n    ```\n\n## Usage\n\n1. Run the script to send group invitations:\n    ```sh\n    CLIENT_ID=\"...\" CLIENT_SECRET=\"...\" python send_invitations.py\n    ```\n\n## License\n\nThis project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details."
    },
    {
      "title": "Web Api Send Group Invitations / Main",
      "path": "web-api-send-group-invitations/main.py",
      "kind": "py",
      "code": "\"\"\"\nScript to invite a list of users to a list of Dashboard groups.\nThe script assumes that the authenticated user is admin in the dashboard groups,\notherwise permission errors will be returned from the backend.\n\nGet your Client ID and Secret at https://dashboard.formlabs.com/#developer\n\"\"\"\n\nimport os\nfrom typing import List\n\nfrom formlabs_web_api import PrinterGroupsApi, ApiClient, AuthenticationApi\nfrom formlabs_web_api.rest import ApiException\nfrom formlabs_web_api.exceptions import BadRequestException, ForbiddenException\n\nfrom formlabs_web_api.models.request_an_access_token200_response import RequestAnAccessToken200Response\nfrom formlabs_web_api.models.workgroup import Workgroup\nfrom formlabs_web_api.models.developer_api_group_membership_create_request import DeveloperAPIGroupMembershipCreateRequest\n\napi_client: ApiClient = ApiClient()\ngroup_api: PrinterGroupsApi = PrinterGroupsApi(api_client=api_client)\n\n\ndef authenticate_client(api_client: ApiClient, grant_type: str, client_id: str, client_secret: str) -> None:\n    \"\"\" Obtain an OAuth2 Access Token and set it on the client \"\"\"\n    authentication_api: AuthenticationApi = AuthenticationApi(api_client)\n    api_response: RequestAnAccessToken200Response = authentication_api.request_an_access_token(grant_type, client_id, client_secret)\n    access_token: str = api_response.access_token\n    api_client.set_default_header(\"Authorization\", f\"Bearer {access_token}\")\n\n\ndef send_invitation(group: Workgroup, email: str, is_admin: bool = False):\n    \"\"\" Sends an invitation to a Workgroup for user with email \"\"\"\n    group_create_request = DeveloperAPIGroupMembershipCreateRequest.from_dict({\n        'user': email,\n        'is_admin': is_admin\n    })\n    try:\n        group_api.groups_members_create(group.id, developer_api_group_membership_create_request=group_create_request)\n        print(f\"successfully added user with '{email}' to '{group.name}' group\")\n    except BadRequestException as e:\n        print(f\"bad request when adding user with '{email}' to '{group.name}' group: {e.body}\")\n    except ForbiddenException as e:\n        print(f\"permission denied when adding '{email}' to '{group.name}' group: {e.body}\")\n\nif __name__ == '__main__':\n    # Client secrets from Environment\n    CLIENT_ID = os.getenv(\"CLIENT_ID\", \"\")\n    CLIENT_SECRET = os.getenv(\"CLIENT_SECRET\", \"\")\n\n    # edit these to match your group names and users\n    groups_to_add: List[str] = [\"My group\", \"My other group\"]\n    user_emails: List[str] = [\"some_user@my_company.com\", \"some_other_user@my_company.com\"]\n\n    try:\n        authenticate_client(api_client, \"client_credentials\", CLIENT_ID, CLIENT_SECRET)\n    except ApiException as e:\n        print(\"exception when obtaining access token: %s\\n\" % e)\n        print(\"invalid credential, exiting...\")\n        exit(1)\n\n    groups: List[Workgroup] = group_api.groups_list()\n    filtered_group: List[Workgroup] = [group for group in groups if group.name in groups_to_add]\n\n    if len(filtered_group) == 0:\n        print(\"no groups found, make sure the group names are correct!\")\n        exit(0)\n\n    for group in filtered_group:\n        for email in user_emails:\n            send_invitation(group, email)\n\n    print(\"Done.\")"
    },
    {
      "title": "Batching Minimal",
      "path": "batching-minimal.py",
      "kind": "py",
      "code": "\"\"\"\nDemo application that batches all STL files in a folder into .form files.\n\nUsage: python3 batching-minimal.py ~/Documents/folder-of-stl-files\n\nOptional flags:\n--auto-orient: Auto orient models\n--dental-mode: Use dental mode when auto orienting\n--auto-support: Auto support models\n--username: Username for login if uploading to a remote printer or Fleet Control queue\n--password: Password for login if uploading to a remote printer or Fleet Control queue\n--upload-to: Upload to a specific printer, IP Address, or Fleet Control Printer Group ID\n\"\"\"\n\nimport argparse\nimport os\nimport pathlib\nimport csv\nimport sys\nimport requests\nimport formlabs_local_api_minimal as formlabs\n\n\ndef list_files_in_directory(directory_path):\n    return [\n        f\n        for f in os.listdir(directory_path)\n        if os.path.isfile(os.path.join(directory_path, f)) and f.endswith(\".stl\")\n    ]\n\n\ndef create_scene():\n    response = requests.request(\n        \"POST\",\n        \"http://localhost:44388/scene/\",\n        json={\n            \"machine_type\": \"FORM-4-0\",\n            \"material_code\": \"FLGPGR05\",\n            \"layer_thickness_mm\": 0.1,\n            \"print_setting\": \"DEFAULT\",\n        },\n    )\n    response.raise_for_status()\n    return response.json()[\"id\"]\n\n\nparser = argparse.ArgumentParser(description=\"Process a folder path.\")\nparser.add_argument(\"folder\", type=str, help=\"Path to the folder\")\nparser.add_argument(\"--auto-orient\", action=\"store_true\", help=\"Auto orient models\")\nparser.add_argument(\"--dental-mode\", action=\"store_true\", help=\"Use dental mode when auto orienting\")\nparser.add_argument(\"--auto-support\", action=\"store_true\", help=\"Auto support models\")\nparser.add_argument(\"--username\", type=str, help=\"Username for login\")\nparser.add_argument(\"--password\", type=str, help=\"Password for login\")\nparser.add_argument(\"--upload-to\", type=str, help=\"Upload to a specific printer, IP Address, or Fleet Control Printer Group ID\")\nargs = parser.parse_args()\n\ndirectory_path = os.path.abspath(args.folder)\nfiles_to_batch = list_files_in_directory(directory_path)\nprint(\"Files to batch:\")\nprint(files_to_batch)\ncurrent_batch = 1\nmodels_in_current_batch = []\nscene_id = None\nCSV_RESULT_FILENAME = os.path.join(directory_path, \"summary.csv\")\n\npathToPreformServer = None\nif sys.platform == 'win32':\n    pathToPreformServer = pathlib.Path().resolve() / \"PreFormServer/PreFormServer.exe\"\nelif sys.platform == 'darwin':\n    pathToPreformServer = pathlib.Path().resolve() / \"PreFormServer.app/Contents/MacOS/PreFormServer\"\nelse:\n    print(\"Unsupported platform\")\n    sys.exit(1)\n\nwith formlabs.PreFormApi.start_preform_server(pathToPreformServer=pathToPreformServer):\n    if args.username and args.password:\n        login_response = requests.request(\n            \"POST\",\n            \"http://localhost:44388/login/\",\n            json={"
    },
    {
      "title": "Hello Server Minimal",
      "path": "hello-server-minimal.py",
      "kind": "py",
      "code": "import formlabs_local_api_minimal as formlabs\nimport requests\nimport pathlib\nimport sys\n\ndef hello_server():\n    pathToPreformServer = None\n    if sys.platform == 'win32':\n        pathToPreformServer = pathlib.Path().resolve() / \"PreFormServer/PreFormServer.exe\"\n    elif sys.platform == 'darwin':\n        pathToPreformServer = pathlib.Path().resolve() / \"PreFormServer.app/Contents/MacOS/PreFormServer\"\n    else:\n        print(\"Unsupported platform\")\n        sys.exit(1)\n    with formlabs.PreFormApi.start_or_connect_to_preform_server(pathToPreformServer=pathToPreformServer):\n        payload = {\n            \"machine_type\": \"FORM-4-0\",\n            \"material_code\": \"FLRG1011\",\n            \"layer_thickness_mm\": 0.1,\n            \"print_setting\": \"DEFAULT\"\n        }\n        response = requests.request(\"POST\", \"http://localhost:44388/scene/\", json=payload)\n        response.raise_for_status()\n        print(response.json())\n        print(\"Scene created, exiting\")\n\nif __name__ == \"__main__\":\n    hello_server()"
    },
    {
      "title": "Speedrun",
      "path": "speedrun.py",
      "kind": "py",
      "code": "\"\"\"\nGenerate variations of print settings from a given .form file to optimize for speed, with a possible tradeoff of print quality or print success.\n\n## Limitations:\n- Only works for Form 4 and Form 4L printers. Supporting other printer types is possible but would require additional development.\n- Only supports .form files saved using PreForm 3.42 or later.\n- Changing wiping behavior may not change the estimated print time, although it would decrease actual print times\n\n## Example Usage:\n1. Prepare your print like normal using PreForm 3.42 or newer. Save the prepared print as a .form file.\n2. Run speedrun.py with the path to the .form file and your desired speedup options. Run `python3 examples/speedrun.py --help` to see available options.\n\npython3 examples/speedrun.py test.form --reduce_wiping --reduce_exposure\n\n3. The script will generate variations and output:\n- A report.md file with a summary of the results\n- A .fps Print Setting file for each variation that can be imported into PreForm\n- A .form file for each variation using the optimized print settings\n\n4. If you are loading the generated .form file variations into PreForm,\n   you must first import the variation's matching .fps file into PreForm's Print Settings Editor before loading .form file.\n   \n   Importing the variation .form file without first loading the matching .fps file will not apply the correct print settings\n   and will give the error \"FORM File Warning: The Print Settings saved in this .form file is no longer available.\n   The selected material has been updated to the last used material.\"\n\"\"\"\n\nimport formlabs_local_api_minimal as formlabs\nimport requests\nimport argparse\nimport json\nimport os\nimport sys\nimport copy\nimport difflib\nimport pathlib\nimport itertools\nimport uuid\n\n\nserver_path = None\nif sys.platform == \"win32\":\n    server_path = pathlib.Path().resolve() / \"PreFormServer/PreFormServer.exe\"\nelif sys.platform == \"darwin\":\n    server_path = (\n        pathlib.Path().resolve()/ \"PreFormServer.app/Contents/MacOS/PreFormServer\"\n    )\nelse:\n    print(\"Unsupported platform\")\n    sys.exit(1)\n\n\ndef main():\n    args = parse_args()\n\n    report_data = []\n    with formlabs.PreFormApi.start_preform_server(pathToPreformServer=server_path):\n        # Load the base .form file and get the estimated print time\n        requests.request(\n            \"POST\",\n            \"http://localhost:44388/load-form/\",\n            json={\n                \"file\": args.form_file,\n            },\n        ).raise_for_status()\n        estimate_print_time_response = requests.request(\n            \"POST\",\n            f\"http://localhost:44388/scene/estimate-print-time/\",\n        )\n        estimate_print_time_response.raise_for_status()\n        base_estimated_print_time_s = estimate_print_time_response.json()[\n            \"total_print_time_s\"\n        ]\n\n        base_settings_path = None\n        if args.settings_file:\n            base_settings_path = args.settings_file\n        else:\n            print(\"Exacting initial settings from form file\")\n            base_settings_path = os.path.abspath(\"base_settings.fps\")"
    },
    {
      "title": "List Materials",
      "path": "list-materials.py",
      "kind": "py",
      "code": "import formlabs_local_api_minimal as formlabs\nimport requests\nimport pathlib\nimport sys\nimport json\n\npathToPreformServer = None\nif sys.platform == 'win32':\n    pathToPreformServer = pathlib.Path().resolve() / \"PreFormServer/PreFormServer.exe\"\nelif sys.platform == 'darwin':\n    pathToPreformServer = pathlib.Path().resolve() / \"PreFormServer.app/Contents/MacOS/PreFormServer\"\nelse:\n    print(\"Unsupported platform\")\n    sys.exit(1)\nwith formlabs.PreFormApi.start_preform_server(pathToPreformServer=pathToPreformServer):\n    response = requests.request(\"GET\", \"http://localhost:44388/list-materials/\")\n    response.raise_for_status()\n    json_result = response.json()\n    with open(\"formlabs-materials-data.json\", \"w\") as file:\n        json.dump(json_result, file, indent=4, sort_keys=True)\n        print(\"Materials data saved to formlabs-materials-data.json\")"
    },
    {
      "title": "Web Sls Packer / Index",
      "path": "web-sls-packer/index.html",
      "kind": "html",
      "code": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Job Manager</title>\n    <style>\n        * {\n            box-sizing: border-box;\n        }\n        /* Use Arial font for everything */\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n        }\n        #container {\n            display: flex;\n            flex-direction: row;\n            height: 100vh;\n        }\n        \n        #sidebar {\n            flex: 0 0 180px;\n            background-color: #f4f4f4;\n            padding: 20px;\n            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);\n        }\n        \n        #content {\n            flex-grow: 1;\n            padding: 20px 40px;\n        }\n        \n        #job-list {\n            list-style: none;\n            padding: 0;\n        }\n        \n        #job-list li {\n            margin: 10px 0;\n            cursor: pointer;\n        }\n        #job-list li.selected {\n            font-weight: bold;\n        }\n        \n        #job-thumbnail {\n            max-width: 400px;\n            height: auto;\n            margin: 10px 0;\n        }\n        \n        #download-link {\n            display: inline-block;\n            margin-top: 10px;\n        }\n        \n        #import-form {\n            padding: 20px;\n            background-color: #fff;\n            border: 1px solid #ddd;\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            z-index: 1000;\n            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n        }\n        \n        #import-form h2 {\n            margin-top: 0;\n        }\n        \n        #import-form label {\n            display: block;\n            margin: 10px 0 5px;\n        }\n        \n        #import-form input[type=\"text\"],"
    },
    {
      "title": "Web Sls Packer / Requirements",
      "path": "web-sls-packer/requirements.txt",
      "kind": "txt",
      "code": "Flask==3.0.3\nFlask-Cors==4.0.2\nrequests\n# -e local-api/lib"
    },
    {
      "title": "Web Sls Packer / App",
      "path": "web-sls-packer/app.py",
      "kind": "py",
      "code": "from flask import Flask, jsonify, request, send_from_directory, render_template\nfrom flask_cors import CORS\nfrom werkzeug.utils import secure_filename\nimport os\nimport json\nimport pathlib\nfrom pathlib import Path\nimport formlabs_local_api_minimal as formlabs\nimport requests\nimport subprocess\nimport sys\n\n# Directory where jobs are stored\nJOBS_DIR = 'jobs'\nUPLOAD_FOLDER = '/tmp'\n\npathToPreformServer = None\nif sys.platform == 'win32':\n    pathToPreformServer = pathlib.Path().resolve().parents[1] / \"PreFormServer/PreFormServer.exe\"\nelif sys.platform == 'darwin':\n    pathToPreformServer = pathlib.Path().resolve().parents[1] / \"PreFormServer.app/Contents/MacOS/PreFormServer\"\nelse:\n    print(\"Unsupported platform\")\n    sys.exit(1)\n\napp = Flask(__name__)\napp.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER\nCORS(app)\n\n\nclass PreFormApi:\n    def __init__(self):\n        self.api = None\n\n    def load_form(self, form_file_path):\n        print(f\"Loading form: {form_file_path}\")\n        load_form_response = requests.request(\n            \"POST\",\n            \"http://localhost:44388/load-form/\",\n            json={\n                \"file\": form_file_path,\n            },\n        )\n        load_form_response.raise_for_status()\n\n    def import_model(self, model_path):\n        import_model_response = requests.request(\n            \"POST\",\n            \"http://localhost:44388/scene/import-model/\",\n            json={\n                \"file\": model_path,\n            },\n        )\n        import_model_response.raise_for_status()\n\n    def auto_pack(self):\n        auto_pack_response = requests.request(\n            \"POST\",\n            \"http://localhost:44388/scene/auto-pack/\",\n            json={},\n        )\n        auto_pack_response.raise_for_status()\n\n    def save_screenshot(self, screenshot_path):\n        save_screenshot_response = requests.request(\n            \"POST\",\n            \"http://localhost:44388/scene/save-screenshot/\",\n            json={\n                \"file\": screenshot_path,\n            },\n        )\n        save_screenshot_response.raise_for_status()\n\n    def get_scene(self):\n        response = requests.request(\"GET\", \"http://localhost:44388/scene/\")\n        response.raise_for_status()\n        return response.json()\n\n    def save_form(self, form_file_path):\n        save_form_response = requests.request("
    }
  ]
};
