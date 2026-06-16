window.FORMLABS_DATA = {
  "generatedFrom": {
    "localApiVersion": "0.9.22",
    "webApiVersion": "0.8.1",
    "sdkRepo": "https://github.com/Formlabs/formlabs-api-python"
  },
  "endpoints": [
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_api_version200_response import GetApiVersion200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.APIInfoApi(api_client)\n\n    try:\n        # Get API Version\n        api_response = api_instance.get_api_version()\n        print(\"The response of APIInfoApi->get_api_version:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling APIInfoApi->get_api_version: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "DiscoverDevicesRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.discover_devices200_response import DiscoverDevices200Response\nfrom formlabs_local_api.models.discover_devices_request import DiscoverDevicesRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.DevicesApi(api_client)\n    discover_devices_request = {\"timeout_seconds\":10} # DiscoverDevicesRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Discover Devices\n        api_response = api_instance.discover_devices(discover_devices_request, var_async=var_async)\n        print(\"The response of DevicesApi->discover_devices:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling DevicesApi->discover_devices: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.device_status_model import DeviceStatusModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.DevicesApi(api_client)\n    id = 'id_example' # str | The unique identifier of the printer\n\n    try:\n        # Get Device\n        api_response = api_instance.get_device(id)\n        print(\"The response of DevicesApi->get_device:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling DevicesApi->get_device: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_devices200_response import GetDevices200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.DevicesApi(api_client)\n    can_print = True # bool | If true, only devices that can receive prints will be returned. (optional)\n\n    try:\n        # Get Devices\n        api_response = api_instance.get_devices(can_print=can_print)\n        print(\"The response of DevicesApi->get_devices:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling DevicesApi->get_devices: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "UploadFirmwareRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.discover_devices200_response import DiscoverDevices200Response\nfrom formlabs_local_api.models.upload_firmware_request import UploadFirmwareRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.DevicesApi(api_client)\n    upload_firmware_request = {\"printer\":\"Form4-TestyTest\",\"file_path\":\"C:\\\\Users\\\\user\\\\Desktop\\\\form4-public-1.9.0-2444.formware\"} # UploadFirmwareRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Upload Firmware\n        api_response = api_instance.upload_firmware(upload_firmware_request, var_async=var_async)\n        print(\"The response of DevicesApi->upload_firmware:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling DevicesApi->upload_firmware: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "LoadFormFileRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.load_form_file_request import LoadFormFileRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    load_form_file_request = {\"file\":\"C:\\\\Users\\\\user\\\\Desktop\\\\test.form\"} # LoadFormFileRequest | Full path where the file should be saved\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Save .form file\n        api_instance.save_form_file(scene_id, load_form_file_request, var_async=var_async)\n    except Exception as e:\n        print(\"Exception when calling ExportingApi->save_form_file: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "SaveFpsFileRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.save_fps_file_request import SaveFpsFileRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    save_fps_file_request = {\"file\":\"C:\\\\Users\\\\user\\\\Desktop\\\\custom-grey.fps\"} # SaveFpsFileRequest | Full path where the FPS file should be saved\n\n    try:\n        # Save FPS file\n        api_instance.save_fps_file(scene_id, save_fps_file_request)\n    except Exception as e:\n        print(\"Exception when calling ExportingApi->save_fps_file: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "SaveScreenshotRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.save_screenshot_request import SaveScreenshotRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    save_screenshot_request = {\"file\":\"C:\\\\Users\\\\user\\\\Desktop\\\\screenshot.png\"} # SaveScreenshotRequest | Full path where the image should be saved\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Save screenshot file\n        api_instance.save_screenshot(scene_id, save_screenshot_request, var_async=var_async)\n    except Exception as e:\n        print(\"Exception when calling ExportingApi->save_screenshot: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingDeprecatedApi(api_client)\n\n    try:\n        # Save .form file\n        api_instance.save_form_file_deprecated()\n    except Exception as e:\n        print(\"Exception when calling ExportingDeprecatedApi->save_form_file_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingDeprecatedApi(api_client)\n\n    try:\n        # Save FPS file\n        api_instance.save_fps_file_deprecated()\n    except Exception as e:\n        print(\"Exception when calling ExportingDeprecatedApi->save_fps_file_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingDeprecatedApi(api_client)\n\n    try:\n        # Save screenshot file\n        api_instance.save_screenshot_deprecated()\n    except Exception as e:\n        print(\"Exception when calling ExportingDeprecatedApi->save_screenshot_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "ThinWallDetectionRequestModel",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.thin_wall_detection_request_model import ThinWallDetectionRequestModel\nfrom formlabs_local_api.models.thin_wall_detection_result_model import ThinWallDetectionResultModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    thin_wall_detection_request_model = formlabs_local_api.ThinWallDetectionRequestModel() # ThinWallDetectionRequestModel | Thin wall detection parameters\n    var_async = False # bool | If `true`, the server returns `202 Accepted` with an operation id and runs the detection in the background. Poll `/operations/{id}/` for completion. Recommended for large meshes or `models: \\\"ALL\\\"` requests where the synchronous response may be slow.  (optional) (default to False)\n\n    try:\n        # Detect Thin Walls\n        api_response = api_instance.detect_thin_walls(scene_id, thin_wall_detection_request_model, var_async=var_async)\n        print(\"The response of GettingSceneInformationApi->detect_thin_walls:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->detect_thin_walls: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.estimated_print_time_model import EstimatedPrintTimeModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Estimate Print Time\n        api_response = api_instance.estimate_print_time(scene_id, var_async=var_async)\n        print(\"The response of GettingSceneInformationApi->estimate_print_time:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->estimate_print_time: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_all_scenes200_response import GetAllScenes200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n\n    try:\n        # Get All Scenes\n        api_response = api_instance.get_all_scenes()\n        print(\"The response of GettingSceneInformationApi->get_all_scenes:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->get_all_scenes: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.model_properties import ModelProperties\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n\n    try:\n        # Get model\n        api_response = api_instance.get_model(id, scene_id)\n        print(\"The response of GettingSceneInformationApi->get_model:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->get_model: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print_validation_result_model import PrintValidationResultModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Get Print Validation\n        api_response = api_instance.get_print_validation(scene_id, var_async=var_async)\n        print(\"The response of GettingSceneInformationApi->get_print_validation:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->get_print_validation: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n\n    try:\n        # Get Scene\n        api_response = api_instance.get_scene(scene_id)\n        print(\"The response of GettingSceneInformationApi->get_scene:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->get_scene: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "GetSceneInterferencesRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_scene_interferences_request import GetSceneInterferencesRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    get_scene_interferences_request = formlabs_local_api.GetSceneInterferencesRequest() # GetSceneInterferencesRequest | Interferences parameters (optional)\n\n    try:\n        # Get Scene Interferences\n        api_instance.get_scene_interferences(scene_id, get_scene_interferences_request=get_scene_interferences_request)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->get_scene_interferences: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "ThinWallDetectionRequestModel",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.thin_wall_detection_request_model import ThinWallDetectionRequestModel\nfrom formlabs_local_api.models.thin_wall_detection_result_model import ThinWallDetectionResultModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n    thin_wall_detection_request_model = formlabs_local_api.ThinWallDetectionRequestModel() # ThinWallDetectionRequestModel | Thin wall detection parameters\n    var_async = False # bool |  (optional) (default to False)\n\n    try:\n        # Detect Thin Walls\n        api_response = api_instance.detect_thin_walls_deprecated(thin_wall_detection_request_model, var_async=var_async)\n        print(\"The response of GettingSceneInformationDeprecatedApi->detect_thin_walls_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->detect_thin_walls_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.estimated_print_time_model import EstimatedPrintTimeModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n\n    try:\n        # Estimate Print Time\n        api_response = api_instance.estimate_print_time_deprecated()\n        print(\"The response of GettingSceneInformationDeprecatedApi->estimate_print_time_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->estimate_print_time_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.model_properties import ModelProperties\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n\n    try:\n        # Get model\n        api_response = api_instance.get_model_deprecated(id)\n        print(\"The response of GettingSceneInformationDeprecatedApi->get_model_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->get_model_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print_validation_result_model import PrintValidationResultModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n\n    try:\n        # Get Print Validation\n        api_response = api_instance.get_print_validation_deprecated()\n        print(\"The response of GettingSceneInformationDeprecatedApi->get_print_validation_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->get_print_validation_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n\n    try:\n        # Get Scene\n        api_response = api_instance.get_scene_deprecated()\n        print(\"The response of GettingSceneInformationDeprecatedApi->get_scene_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->get_scene_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n\n    try:\n        # Get Scene Interferences\n        api_instance.get_scene_interferences_deprecated()\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->get_scene_interferences_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "AddDrainHolesRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.add_drain_holes200_response import AddDrainHoles200Response\nfrom formlabs_local_api.models.add_drain_holes_request import AddDrainHolesRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    add_drain_holes_request = formlabs_local_api.AddDrainHolesRequest() # AddDrainHolesRequest | Drain hole parameters\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Add Drain Holes\n        api_response = api_instance.add_drain_holes(scene_id, add_drain_holes_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->add_drain_holes:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->add_drain_holes: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "AutoLayoutRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.auto_layout_request import AutoLayoutRequest\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    auto_layout_request = {\"models\":\"ALL\",\"model_spacing_mm\":1.0,\"allow_overlapping_supports\":false,\"lock_rotation\":false,\"build_platform_2_optimized\":false} # AutoLayoutRequest | Models to run the auto layout operation on\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Auto Layout\n        api_response = api_instance.auto_layout(scene_id, auto_layout_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->auto_layout:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->auto_layout: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "AutoOrientRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.auto_orient_request import AutoOrientRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    auto_orient_request = {\"models\":\"ALL\"} # AutoOrientRequest | Models to run the auto orient operation on\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Auto Orient\n        api_instance.auto_orient(scene_id, auto_orient_request, var_async=var_async)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->auto_orient: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "AutoPackRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.auto_pack_request import AutoPackRequest\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    auto_pack_request = formlabs_local_api.AutoPackRequest() # AutoPackRequest | Auto pack parameters\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Auto Pack\n        api_response = api_instance.auto_pack(scene_id, auto_pack_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->auto_pack:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->auto_pack: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "AutoSupportRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.auto_support_request import AutoSupportRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    auto_support_request = {\"models\":\"ALL\"} # AutoSupportRequest | Models to run the auto support operation on\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Auto Support\n        api_instance.auto_support(scene_id, auto_support_request, var_async=var_async)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->auto_support: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "SceneTypeModel",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.models.scene_type_model import SceneTypeModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_type_model = {\"machine_type\":\"FORM-4-0\",\"material_code\":\"FLGPBK05\",\"print_setting\":\"DEFAULT\",\"layer_thickness_mm\":0.025} # SceneTypeModel | Create a default scene with a given printing setup. For a full list of possible settings, call the GET /list-materials/ endpoint \n\n    try:\n        # Create Default Scene\n        api_response = api_instance.create_default_scene(scene_type_model)\n        print(\"The response of ModifyingASceneApi->create_default_scene:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->create_default_scene: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "SceneTypeModel",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.models.scene_type_model import SceneTypeModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_type_model = {\"machine_type\":\"FORM-4-0\",\"material_code\":\"FLGPBK05\",\"print_setting\":\"DEFAULT\",\"layer_thickness_mm\":0.025} # SceneTypeModel | Create a scene with a given printing setup. For a full list of possible settings, call the GET /list-materials/ endpoint \n\n    try:\n        # Create Scene\n        api_response = api_instance.create_scene(scene_type_model)\n        print(\"The response of ModifyingASceneApi->create_scene:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->create_scene: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n\n    try:\n        # Delete Default Scene\n        api_response = api_instance.delete_default_scene()\n        print(\"The response of ModifyingASceneApi->delete_default_scene:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->delete_default_scene: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n\n    try:\n        # Delete model\n        api_instance.delete_model(id, scene_id)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->delete_model: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n\n    try:\n        # Delete Scene\n        api_response = api_instance.delete_scene(scene_id)\n        print(\"The response of ModifyingASceneApi->delete_scene:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->delete_scene: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "DuplicateModelRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.duplicate_model_request import DuplicateModelRequest\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    duplicate_model_request = formlabs_local_api.DuplicateModelRequest() # DuplicateModelRequest | \n\n    try:\n        # Duplicate model\n        api_response = api_instance.duplicate_model(id, scene_id, duplicate_model_request)\n        print(\"The response of ModifyingASceneApi->duplicate_model:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->duplicate_model: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "HollowModelRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.hollow_model200_response import HollowModel200Response\nfrom formlabs_local_api.models.hollow_model_request import HollowModelRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    hollow_model_request = formlabs_local_api.HollowModelRequest() # HollowModelRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Hollow Model\n        api_response = api_instance.hollow_model(scene_id, hollow_model_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->hollow_model:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->hollow_model: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "ImportModelRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.import_model_request import ImportModelRequest\nfrom formlabs_local_api.models.model_properties import ModelProperties\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    import_model_request = {\"file\":\"C:\\\\Users\\\\user\\\\Desktop\\\\test.stl\"} # ImportModelRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Import model\n        api_response = api_instance.import_model(scene_id, import_model_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->import_model:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->import_model: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "LabelPartRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.hollow_model200_response import HollowModel200Response\nfrom formlabs_local_api.models.label_part_request import LabelPartRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    label_part_request = formlabs_local_api.LabelPartRequest() # LabelPartRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Label Part\n        api_response = api_instance.label_part(scene_id, label_part_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->label_part:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->label_part: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "LoadFormFileRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.load_form_file_request import LoadFormFileRequest\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    load_form_file_request = {\"file\":\"C:\\\\Users\\\\user\\\\Desktop\\\\test.form\"} # LoadFormFileRequest | Full path to the .form file to load\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Load .form file\n        api_response = api_instance.load_form_file(load_form_file_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->load_form_file:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->load_form_file: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "PackAndCageRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.pack_and_cage_request import PackAndCageRequest\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    pack_and_cage_request = formlabs_local_api.PackAndCageRequest() # PackAndCageRequest | Auto pack parameters\n\n    try:\n        # Pack and Cage\n        api_response = api_instance.pack_and_cage(pack_and_cage_request)\n        print(\"The response of ModifyingASceneApi->pack_and_cage:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->pack_and_cage: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "ReplaceModelRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.replace_model200_response import ReplaceModel200Response\nfrom formlabs_local_api.models.replace_model_request import ReplaceModelRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    replace_model_request = formlabs_local_api.ReplaceModelRequest() # ReplaceModelRequest | \n\n    try:\n        # Replace model\n        api_response = api_instance.replace_model(id, scene_id, replace_model_request)\n        print(\"The response of ModifyingASceneApi->replace_model:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->replace_model: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "ScanToModelRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scan_to_model200_response import ScanToModel200Response\nfrom formlabs_local_api.models.scan_to_model_request import ScanToModelRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    scan_to_model_request = formlabs_local_api.ScanToModelRequest() # ScanToModelRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Scan to model\n        api_response = api_instance.scan_to_model(scene_id, scan_to_model_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->scan_to_model:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->scan_to_model: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "UpdateModelRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.update_model_request import UpdateModelRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    update_model_request = {\"position\":{\"x\":10,\"y\":1,\"z\":2}} # UpdateModelRequest | Model properties to update\n\n    try:\n        # Update model\n        api_instance.update_model(id, scene_id, update_model_request)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->update_model: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "SceneTypeModel",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.models.scene_type_model import SceneTypeModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    scene_type_model = {\"machine_type\":\"FORM-4-0\",\"material_code\":\"FLGPBK05\",\"print_setting\":\"DEFAULT\",\"layer_thickness_mm\":0.025} # SceneTypeModel | \n\n    try:\n        # Update Scene\n        api_response = api_instance.update_scene(scene_id, scene_type_model)\n        print(\"The response of ModifyingASceneApi->update_scene:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->update_scene: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.add_drain_holes200_response import AddDrainHoles200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Add Drain Holes\n        api_response = api_instance.add_drain_holes_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->add_drain_holes_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->add_drain_holes_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Auto Layout\n        api_response = api_instance.auto_layout_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->auto_layout_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->auto_layout_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Auto Orient\n        api_instance.auto_orient_deprecated()\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->auto_orient_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Auto Pack\n        api_response = api_instance.auto_pack_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->auto_pack_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->auto_pack_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Auto Support\n        api_instance.auto_support_deprecated()\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->auto_support_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n\n    try:\n        # Delete model\n        api_instance.delete_model_deprecated(id)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->delete_model_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n\n    try:\n        # Duplicate model\n        api_response = api_instance.duplicate_model_deprecated(id)\n        print(\"The response of ModifyingASceneDeprecatedApi->duplicate_model_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->duplicate_model_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.hollow_model200_response import HollowModel200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Hollow Model\n        api_response = api_instance.hollow_model_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->hollow_model_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->hollow_model_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.model_properties import ModelProperties\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Import model\n        api_response = api_instance.import_model_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->import_model_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->import_model_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.hollow_model200_response import HollowModel200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Label Part\n        api_response = api_instance.label_part_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->label_part_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->label_part_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.replace_model200_response import ReplaceModel200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n\n    try:\n        # Replace model\n        api_response = api_instance.replace_model_deprecated(id)\n        print(\"The response of ModifyingASceneDeprecatedApi->replace_model_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->replace_model_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scan_to_model200_response import ScanToModel200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Scan to model\n        api_response = api_instance.scan_to_model_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->scan_to_model_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->scan_to_model_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n\n    try:\n        # Update model\n        api_instance.update_model_deprecated(id)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->update_model_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Update Scene\n        api_response = api_instance.update_scene_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->update_scene_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->update_scene_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "PrintRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.models.print_request import PrintRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.OperationsApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    print_request = {\"printer\":\"10.35.15.12\",\"job_name\":\"Test Job\"} # PrintRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Print\n        api_response = api_instance.call_print(scene_id, print_request, var_async=var_async)\n        print(\"The response of OperationsApi->call_print:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling OperationsApi->call_print: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_all_operations200_response import GetAllOperations200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.OperationsApi(api_client)\n\n    try:\n        # List All Operations\n        api_response = api_instance.get_all_operations()\n        print(\"The response of OperationsApi->get_all_operations:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling OperationsApi->get_all_operations: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_operation200_response import GetOperation200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.OperationsApi(api_client)\n    id = 'id_example' # str | The unique identifier of the operation.\n\n    try:\n        # Get Operation Status\n        api_response = api_instance.get_operation(id)\n        print(\"The response of OperationsApi->get_operation:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling OperationsApi->get_operation: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.OperationsDeprecatedApi(api_client)\n\n    try:\n        # Print\n        api_response = api_instance.print_deprecated()\n        print(\"The response of OperationsDeprecatedApi->print_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling OperationsDeprecatedApi->print_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.list_materials200_response import ListMaterials200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.PrintSettingsApi(api_client)\n\n    try:\n        # List Materials\n        api_response = api_instance.list_materials()\n        print(\"The response of PrintSettingsApi->list_materials:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintSettingsApi->list_materials: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "PrintRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.models.print_request import PrintRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.PrintingApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    print_request = {\"printer\":\"10.35.15.12\",\"job_name\":\"Test Job\"} # PrintRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Print\n        api_response = api_instance.call_print(scene_id, print_request, var_async=var_async)\n        print(\"The response of PrintingApi->call_print:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintingApi->call_print: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.PrintingDeprecatedApi(api_client)\n\n    try:\n        # Print\n        api_response = api_instance.print_deprecated()\n        print(\"The response of PrintingDeprecatedApi->print_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintingDeprecatedApi->print_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "PrintRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.models.print_request import PrintRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    print_request = {\"printer\":\"10.35.15.12\",\"job_name\":\"Test Job\"} # PrintRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Print\n        api_response = api_instance.call_print(scene_id, print_request, var_async=var_async)\n        print(\"The response of RemoteAccessApi->call_print:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->call_print: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "DiscoverDevicesRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.discover_devices200_response import DiscoverDevices200Response\nfrom formlabs_local_api.models.discover_devices_request import DiscoverDevicesRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n    discover_devices_request = {\"timeout_seconds\":10} # DiscoverDevicesRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Discover Devices\n        api_response = api_instance.discover_devices(discover_devices_request, var_async=var_async)\n        print(\"The response of RemoteAccessApi->discover_devices:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->discover_devices: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.device_status_model import DeviceStatusModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n    id = 'id_example' # str | The unique identifier of the printer\n\n    try:\n        # Get Device\n        api_response = api_instance.get_device(id)\n        print(\"The response of RemoteAccessApi->get_device:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->get_device: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_devices200_response import GetDevices200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n    can_print = True # bool | If true, only devices that can receive prints will be returned. (optional)\n\n    try:\n        # Get Devices\n        api_response = api_instance.get_devices(can_print=can_print)\n        print(\"The response of RemoteAccessApi->get_devices:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->get_devices: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.user_information_model import UserInformationModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n\n    try:\n        # Get logged in user information\n        api_response = api_instance.get_user()\n        print(\"The response of RemoteAccessApi->get_user:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->get_user: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
            "type": "LoginRequest",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.login_request import LoginRequest\nfrom formlabs_local_api.models.web_auth_tokens_model import WebAuthTokensModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n    login_request = {\"username\":\"username\",\"password\":\"password\"} # LoginRequest | User credentials\n\n    try:\n        # Login\n        api_response = api_instance.login(login_request)\n        print(\"The response of RemoteAccessApi->login:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->login: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n\n    try:\n        # Log out\n        api_instance.logout()\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->logout: %s\\n\" % e)"
      }
    },
    {
      "source": "Local API",
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
        ],
        "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessDeprecatedApi(api_client)\n\n    try:\n        # Print\n        api_response = api_instance.print_deprecated()\n        print(\"The response of RemoteAccessDeprecatedApi->print_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessDeprecatedApi->print_deprecated: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.request_an_access_token200_response import RequestAnAccessToken200Response\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.AuthenticationApi(api_client)\n    grant_type = 'grant_type_example' # str | The type of grant being used. Currently only `client_credentials` is supported\n    client_id = 'client_id_example' # str | Your Client ID.\n    client_secret = 'client_secret_example' # str | Your Client Secret.\n\n    try:\n        api_response = api_instance.request_an_access_token(grant_type, client_id, client_secret)\n        print(\"The response of AuthenticationApi->request_an_access_token:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling AuthenticationApi->request_an_access_token: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.AuthenticationApi(api_client)\n    token = 'token_example' # str | Your access token.\n    client_id = 'client_id_example' # str | Your client ID.\n    client_secret = 'client_secret_example' # str | Your client secret.\n\n    try:\n        api_instance.revoke_an_access_token(token, client_id, client_secret)\n    except Exception as e:\n        print(\"Exception when calling AuthenticationApi->revoke_an_access_token: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_cartridge_list import PaginatedCartridgeList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.CartridgesApi(api_client)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n\n    try:\n        api_response = api_instance.cartridges_list(page=page, per_page=per_page)\n        print(\"The response of CartridgesApi->cartridges_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling CartridgesApi->cartridges_list: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_user_event_read_only_list import PaginatedUserEventReadOnlyList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.EventsApi(api_client)\n    cartridge = 'cartridge_example' # str | Filter by resin cartridge serial (optional)\n    date__gt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date greater than date specified (ISO 8601 Format) (optional)\n    date__lt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date less than date specified (ISO 8601 Format) (optional)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n    print_run = 'print_run_example' # str | Filter by print id (optional)\n    printer = 'printer_example' # str | Filter by printer serial (optional)\n    tank = 'tank_example' # str | Filter by resin tank serial (optional)\n    type = 'type_example' # str | Filter by Event Type (optional)\n\n    try:\n        api_response = api_instance.events_list(cartridge=cartridge, date__gt=date__gt, date__lt=date__lt, page=page, per_page=per_page, print_run=print_run, printer=printer, tank=tank, type=type)\n        print(\"The response of EventsApi->events_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling EventsApi->events_list: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
            "type": "DeveloperAPIGroupsBulkAddPrintersRequest",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_api_groups_bulk_add_printers_request import DeveloperAPIGroupsBulkAddPrintersRequest\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    developer_api_groups_bulk_add_printers_request = {\"target_group\":\"61e94a6e-8012-42fa-8fa7-642d2587bef0\",\"printers\":[\"SweetMatcha\",\"CornyCaffeine\"]} # DeveloperAPIGroupsBulkAddPrintersRequest | \n\n    try:\n        api_instance.groups_bulk_add_printers_create(developer_api_groups_bulk_add_printers_request)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_bulk_add_printers_create: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
            "type": "PartialWorkGroupRequest",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.new_workgroup import NewWorkgroup\nfrom formlabs_web_api.models.partial_work_group_request import PartialWorkGroupRequest\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    partial_work_group_request = formlabs_web_api.PartialWorkGroupRequest() # PartialWorkGroupRequest | \n\n    try:\n        api_response = api_instance.groups_create(partial_work_group_request)\n        print(\"The response of PrinterGroupsApi->groups_create:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_create: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    group_id = 'group_id_example' # str | A UUID string identifying this workgroup.\n\n    try:\n        api_instance.groups_destroy(group_id)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_destroy: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.workgroup import Workgroup\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n\n    try:\n        api_response = api_instance.groups_list()\n        print(\"The response of PrinterGroupsApi->groups_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_list: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
            "type": "DeveloperAPIGroupMembershipCreateRequest",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_api_group_membership_create_request import DeveloperAPIGroupMembershipCreateRequest\nfrom formlabs_web_api.models.workgroup_membership import WorkgroupMembership\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    group_id = 'group_id_example' # str | A UUID string identifying this Printer Group\n    developer_api_group_membership_create_request = formlabs_web_api.DeveloperAPIGroupMembershipCreateRequest() # DeveloperAPIGroupMembershipCreateRequest | \n\n    try:\n        api_response = api_instance.groups_members_create(group_id, developer_api_group_membership_create_request)\n        print(\"The response of PrinterGroupsApi->groups_members_create:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_members_create: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
            "type": "GroupsMembersDestroyRequest",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.groups_members_destroy_request import GroupsMembersDestroyRequest\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    group_id = 'group_id_example' # str | A UUID string identifying this Printer Group\n    groups_members_destroy_request = formlabs_web_api.GroupsMembersDestroyRequest() # GroupsMembersDestroyRequest |  (optional)\n\n    try:\n        api_instance.groups_members_destroy(group_id, groups_members_destroy_request=groups_members_destroy_request)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_members_destroy: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
            "type": "DeveloperAPIGroupMembershipUpdateRequest",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_api_group_membership_update_request import DeveloperAPIGroupMembershipUpdateRequest\nfrom formlabs_web_api.models.workgroup_membership import WorkgroupMembership\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    group_id = 'group_id_example' # str | A UUID string identifying this Printer Group\n    developer_api_group_membership_update_request = formlabs_web_api.DeveloperAPIGroupMembershipUpdateRequest() # DeveloperAPIGroupMembershipUpdateRequest | \n\n    try:\n        api_response = api_instance.groups_members_update(group_id, developer_api_group_membership_update_request)\n        print(\"The response of PrinterGroupsApi->groups_members_update:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_members_update: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
            "type": "PatchedPartialWorkGroupRequest",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.patched_partial_work_group_request import PatchedPartialWorkGroupRequest\nfrom formlabs_web_api.models.workgroup import Workgroup\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    group_id = 'group_id_example' # str | A UUID string identifying this workgroup.\n    patched_partial_work_group_request = formlabs_web_api.PatchedPartialWorkGroupRequest() # PatchedPartialWorkGroupRequest |  (optional)\n\n    try:\n        api_response = api_instance.groups_partial_update(group_id, patched_partial_work_group_request=patched_partial_work_group_request)\n        print(\"The response of PrinterGroupsApi->groups_partial_update:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_partial_update: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_apimy_cloud_queue_items import DeveloperAPIMyCloudQueueItems\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    group_id = 'group_id_example' # str | A UUID string identifying this Printer Group\n\n    try:\n        api_response = api_instance.groups_queue_list(group_id)\n        print(\"The response of PrinterGroupsApi->groups_queue_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_queue_list: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_apimy_printer import DeveloperAPIMyPrinter\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrintersApi(api_client)\n\n    try:\n        api_response = api_instance.printers_list()\n        print(\"The response of PrintersApi->printers_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintersApi->printers_list: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_apimy_printer import DeveloperAPIMyPrinter\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrintersApi(api_client)\n    printer_serial = 'printer_serial_example' # str | A unique value identifying this printer.\n\n    try:\n        api_response = api_instance.printers_retrieve(printer_serial)\n        print(\"The response of PrintersApi->printers_retrieve:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintersApi->printers_retrieve: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
            "type": "List[str]",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_print_run_with_fleet_control_data_list import PaginatedPrintRunWithFleetControlDataList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrintsApi(api_client)\n    printer_serial = 'printer_serial_example' # str | \n    var_date = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time (ISO 8601 Format)  (optional)\n    date__gt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time greater than date time specified (ISO 8601 Format) (optional)\n    date__lt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time less than date time specified (ISO 8601 Format) (optional)\n    machine_type_id = ['machine_type_id_example'] # List[str] | Filter by machine type id. (optional)\n    material = 'material_example' # str |  (optional)\n    name = 'name_example' # str | Filter by name of the print (Substring Match) (optional)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n    printer = 'printer_example' # str | Filter by printer serial (optional)\n    status = 'status_example' # str | Filter by status of the print. Possible values are:           * `QUEUED` - Queued           * `PREPRINT` - Preprint           * `PRINTING` - Printing           * `PAUSING` - Pausing           * `PAUSED` - Paused           * `FINISHED` - Finished           * `ABORTING` - Aborting           * `ABORTED` - Aborted           * `ERROR` - Error           * `WAITING_FOR_RESOLUTION` - Waiting for Resolution           * `PREHEAT` - Preheat           * `PRECOAT` - Precoat           * `POSTCOAT` - Postcoat (optional)\n\n    try:\n        api_response = api_instance.printers_prints_list(printer_serial, var_date=var_date, date__gt=date__gt, date__lt=date__lt, machine_type_id=machine_type_id, material=material, name=name, page=page, per_page=per_page, printer=printer, status=status)\n        print(\"The response of PrintsApi->printers_prints_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintsApi->printers_prints_list: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
            "type": "List[str]",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_print_run_with_fleet_control_data_list import PaginatedPrintRunWithFleetControlDataList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrintsApi(api_client)\n    var_date = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time (ISO 8601 Format)  (optional)\n    date__gt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time greater than date time specified (ISO 8601 Format) (optional)\n    date__lt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time less than date time specified (ISO 8601 Format) (optional)\n    machine_type_id = ['machine_type_id_example'] # List[str] | Filter by machine type id. (optional)\n    material = 'material_example' # str |  (optional)\n    name = 'name_example' # str | Filter by name of the print (Substring Match) (optional)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n    printer = 'printer_example' # str | Filter by printer serial (optional)\n    status = 'status_example' # str | Filter by status of the print. Possible values are:           * `QUEUED` - Queued           * `PREPRINT` - Preprint           * `PRINTING` - Printing           * `PAUSING` - Pausing           * `PAUSED` - Paused           * `FINISHED` - Finished           * `ABORTING` - Aborting           * `ABORTED` - Aborted           * `ERROR` - Error           * `WAITING_FOR_RESOLUTION` - Waiting for Resolution           * `PREHEAT` - Preheat           * `PRECOAT` - Precoat           * `POSTCOAT` - Postcoat (optional)\n\n    try:\n        api_response = api_instance.prints_list(var_date=var_date, date__gt=date__gt, date__lt=date__lt, machine_type_id=machine_type_id, material=material, name=name, page=page, per_page=per_page, printer=printer, status=status)\n        print(\"The response of PrintsApi->prints_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintsApi->prints_list: %s\\n\" % e)"
      }
    },
    {
      "source": "Web API",
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
        ],
        "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_tank_list import PaginatedTankList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.TanksApi(api_client)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n\n    try:\n        api_response = api_instance.tanks_list(page=page, per_page=per_page)\n        print(\"The response of TanksApi->tanks_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling TanksApi->tanks_list: %s\\n\" % e)"
      }
    }
  ],
  "sdkDocs": [
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.APIInfoApi",
      "file": "APIInfoApi.md",
      "summary": "Methods: get_api_version",
      "methods": [
        {
          "name": "get_api_version",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_api_version200_response import GetApiVersion200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.APIInfoApi(api_client)\n\n    try:\n        # Get API Version\n        api_response = api_instance.get_api_version()\n        print(\"The response of APIInfoApi->get_api_version:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling APIInfoApi->get_api_version: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_api_version200_response import GetApiVersion200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.APIInfoApi(api_client)\n\n    try:\n        # Get API Version\n        api_response = api_instance.get_api_version()\n        print(\"The response of APIInfoApi->get_api_version:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling APIInfoApi->get_api_version: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "AccessToken",
      "file": "AccessToken.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "access_token",
          "type": "str",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.access_token import AccessToken\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of AccessToken from a JSON string\naccess_token_instance = AccessToken.from_json(json)\n# print the JSON string representation of the object\nprint(AccessToken.to_json())\n\n# convert the object into a dict\naccess_token_dict = access_token_instance.to_dict()\n# create an instance of AccessToken from a dict\naccess_token_from_dict = AccessToken.from_dict(access_token_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "AddDrainHoles200Response",
      "file": "AddDrainHoles200Response.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "plugs",
          "type": "ModelsSelectionModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "warnings",
          "type": "List[str]",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "infos",
          "type": "List[str]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.add_drain_holes200_response import AddDrainHoles200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of AddDrainHoles200Response from a JSON string\nadd_drain_holes200_response_instance = AddDrainHoles200Response.from_json(json)\n# print the JSON string representation of the object\nprint(AddDrainHoles200Response.to_json())\n\n# convert the object into a dict\nadd_drain_holes200_response_dict = add_drain_holes200_response_instance.to_dict()\n# create an instance of AddDrainHoles200Response from a dict\nadd_drain_holes200_response_from_dict = AddDrainHoles200Response.from_dict(add_drain_holes200_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "AddDrainHolesRequest",
      "file": "AddDrainHolesRequest.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "model_id",
          "type": "str",
          "description": "The ID of the model to add drain holes to",
          "notes": ""
        },
        {
          "name": "drain_holes",
          "type": "List[DrainHoleModel]",
          "description": "List of drain holes to add",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.add_drain_holes_request import AddDrainHolesRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of AddDrainHolesRequest from a JSON string\nadd_drain_holes_request_instance = AddDrainHolesRequest.from_json(json)\n# print the JSON string representation of the object\nprint(AddDrainHolesRequest.to_json())\n\n# convert the object into a dict\nadd_drain_holes_request_dict = add_drain_holes_request_instance.to_dict()\n# create an instance of AddDrainHolesRequest from a dict\nadd_drain_holes_request_from_dict = AddDrainHolesRequest.from_dict(add_drain_holes_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "AutoLayoutRequest",
      "file": "AutoLayoutRequest.md",
      "summary": "Model with 7 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "models",
          "type": "ModelsSelectionModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "mode",
          "type": "str",
          "description": "&#x60;\\&quot;DENTAL\\&quot;&#x60; mode applies algorithms used in PreForm&#39;s Dental Workspace. Leave mode unset to use algorithms from the Standard Workspace.",
          "notes": "[optional]"
        },
        {
          "name": "model_spacing_mm",
          "type": "float",
          "description": "Minimum (non-zero) distance between models in the scene.",
          "notes": "[optional]"
        },
        {
          "name": "allow_overlapping_supports",
          "type": "bool",
          "description": "Whether to allow rafts to overlap.",
          "notes": "[optional]"
        },
        {
          "name": "lock_rotation",
          "type": "bool",
          "description": "Whether to keep model rotation about Z fixed during layout.",
          "notes": "[optional]"
        },
        {
          "name": "build_platform_2_optimized",
          "type": "bool",
          "description": "Whether to optimize the build platform for two models.",
          "notes": "[optional]"
        },
        {
          "name": "custom_bounds",
          "type": "AutoLayoutRequestCustomBounds",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.auto_layout_request import AutoLayoutRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of AutoLayoutRequest from a JSON string\nauto_layout_request_instance = AutoLayoutRequest.from_json(json)\n# print the JSON string representation of the object\nprint(AutoLayoutRequest.to_json())\n\n# convert the object into a dict\nauto_layout_request_dict = auto_layout_request_instance.to_dict()\n# create an instance of AutoLayoutRequest from a dict\nauto_layout_request_from_dict = AutoLayoutRequest.from_dict(auto_layout_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "AutoLayoutRequestCustomBounds",
      "file": "AutoLayoutRequestCustomBounds.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "x_min_mm",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "x_max_mm",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "y_min_mm",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "y_max_mm",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.auto_layout_request_custom_bounds import AutoLayoutRequestCustomBounds\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of AutoLayoutRequestCustomBounds from a JSON string\nauto_layout_request_custom_bounds_instance = AutoLayoutRequestCustomBounds.from_json(json)\n# print the JSON string representation of the object\nprint(AutoLayoutRequestCustomBounds.to_json())\n\n# convert the object into a dict\nauto_layout_request_custom_bounds_dict = auto_layout_request_custom_bounds_instance.to_dict()\n# create an instance of AutoLayoutRequestCustomBounds from a dict\nauto_layout_request_custom_bounds_from_dict = AutoLayoutRequestCustomBounds.from_dict(auto_layout_request_custom_bounds_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "AutoOrientRequest",
      "file": "AutoOrientRequest.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "models",
          "type": "ModelsSelectionModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "mode",
          "type": "str",
          "description": "DENTAL mode applies algorithms used in PreForm&#39;s Dental Workspace",
          "notes": ""
        },
        {
          "name": "tilt",
          "type": "int",
          "description": "Degrees of tilt. Only applies to the DENTAL mode",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.auto_orient_request import AutoOrientRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of AutoOrientRequest from a JSON string\nauto_orient_request_instance = AutoOrientRequest.from_json(json)\n# print the JSON string representation of the object\nprint(AutoOrientRequest.to_json())\n\n# convert the object into a dict\nauto_orient_request_dict = auto_orient_request_instance.to_dict()\n# create an instance of AutoOrientRequest from a dict\nauto_orient_request_from_dict = AutoOrientRequest.from_dict(auto_orient_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "AutoPackRequest",
      "file": "AutoPackRequest.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "model_spacing_mm",
          "type": "float",
          "description": "The minimum spacing between models when packing",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.auto_pack_request import AutoPackRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of AutoPackRequest from a JSON string\nauto_pack_request_instance = AutoPackRequest.from_json(json)\n# print the JSON string representation of the object\nprint(AutoPackRequest.to_json())\n\n# convert the object into a dict\nauto_pack_request_dict = auto_pack_request_instance.to_dict()\n# create an instance of AutoPackRequest from a dict\nauto_pack_request_from_dict = AutoPackRequest.from_dict(auto_pack_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "AutoSupportRequest",
      "file": "AutoSupportRequest.md",
      "summary": "Model with 13 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "models",
          "type": "ModelsSelectionModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "density",
          "type": "float",
          "description": "Unitless factor to adjust the density of supports (default is 1.0)",
          "notes": "[optional]"
        },
        {
          "name": "slope_multiplier",
          "type": "float",
          "description": "Unitless factor to increase or decrease support density on steep slopes (default is 1.0)",
          "notes": "[optional]"
        },
        {
          "name": "only_minima",
          "type": "bool",
          "description": "Whether to only generate touchpoints on local minima, skipping all other supports. Default is false.",
          "notes": "[optional]"
        },
        {
          "name": "raft_type",
          "type": "str",
          "description": "The type of raft to apply to the models",
          "notes": "[optional]"
        },
        {
          "name": "raft_label_enabled",
          "type": "bool",
          "description": "Whether to enable raft labeling",
          "notes": "[optional]"
        },
        {
          "name": "breakaway_structure_enabled",
          "type": "bool",
          "description": "Whether to enable breakaway structure",
          "notes": "[optional]"
        },
        {
          "name": "touchpoint_size_mm",
          "type": "float",
          "description": "The size of the touchpoints",
          "notes": "[optional]"
        },
        {
          "name": "internal_supports_enabled",
          "type": "bool",
          "description": "Whether to enable internal supports",
          "notes": "[optional]"
        },
        {
          "name": "raft_thickness_mm",
          "type": "float",
          "description": "The thickness of the raft",
          "notes": "[optional]"
        },
        {
          "name": "height_above_raft_mm",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "z_compression_correction_mm",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "early_layer_merge_mm",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.auto_support_request import AutoSupportRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of AutoSupportRequest from a JSON string\nauto_support_request_instance = AutoSupportRequest.from_json(json)\n# print the JSON string representation of the object\nprint(AutoSupportRequest.to_json())\n\n# convert the object into a dict\nauto_support_request_dict = auto_support_request_instance.to_dict()\n# create an instance of AutoSupportRequest from a dict\nauto_support_request_from_dict = AutoSupportRequest.from_dict(auto_support_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "BaseDeviceStatusModel",
      "file": "BaseDeviceStatusModel.md",
      "summary": "Model with 7 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "product_name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "status",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "is_connected",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "connection_type",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ip_address",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.base_device_status_model import BaseDeviceStatusModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of BaseDeviceStatusModel from a JSON string\nbase_device_status_model_instance = BaseDeviceStatusModel.from_json(json)\n# print the JSON string representation of the object\nprint(BaseDeviceStatusModel.to_json())\n\n# convert the object into a dict\nbase_device_status_model_dict = base_device_status_model_instance.to_dict()\n# create an instance of BaseDeviceStatusModel from a dict\nbase_device_status_model_from_dict = BaseDeviceStatusModel.from_dict(base_device_status_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "BasePrintingDeviceStatusModel",
      "file": "BasePrintingDeviceStatusModel.md",
      "summary": "Model with 8 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "product_name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "status",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "is_connected",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "connection_type",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ip_address",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ready_to_print_now",
          "type": "bool",
          "description": "If the default behavior for newly uploaded jobs is to start printing them automatically. If false, uploaded jobs will be added to the printing queue.",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.base_printing_device_status_model import BasePrintingDeviceStatusModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of BasePrintingDeviceStatusModel from a JSON string\nbase_printing_device_status_model_instance = BasePrintingDeviceStatusModel.from_json(json)\n# print the JSON string representation of the object\nprint(BasePrintingDeviceStatusModel.to_json())\n\n# convert the object into a dict\nbase_printing_device_status_model_dict = base_printing_device_status_model_instance.to_dict()\n# create an instance of BasePrintingDeviceStatusModel from a dict\nbase_printing_device_status_model_from_dict = BasePrintingDeviceStatusModel.from_dict(base_printing_device_status_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "Default",
      "file": "Default.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "models",
          "type": "ModelsSelectionModel",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.default import Default\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of Default from a JSON string\ndefault_instance = Default.from_json(json)\n# print the JSON string representation of the object\nprint(Default.to_json())\n\n# convert the object into a dict\ndefault_dict = default_instance.to_dict()\n# create an instance of Default from a dict\ndefault_from_dict = Default.from_dict(default_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "DentalMode",
      "file": "DentalMode.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "models",
          "type": "ModelsSelectionModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "mode",
          "type": "str",
          "description": "DENTAL mode applies algorithms used in PreForm&#39;s Dental Workspace",
          "notes": ""
        },
        {
          "name": "tilt",
          "type": "int",
          "description": "Degrees of tilt. Only applies to the DENTAL mode",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.dental_mode import DentalMode\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DentalMode from a JSON string\ndental_mode_instance = DentalMode.from_json(json)\n# print the JSON string representation of the object\nprint(DentalMode.to_json())\n\n# convert the object into a dict\ndental_mode_dict = dental_mode_instance.to_dict()\n# create an instance of DentalMode from a dict\ndental_mode_from_dict = DentalMode.from_dict(dental_mode_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "DeviceStatusModel",
      "file": "DeviceStatusModel.md",
      "summary": "Model with 28 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "product_name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "status",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "is_connected",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "connection_type",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ip_address",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ready_to_print_now",
          "type": "bool",
          "description": "If the default behavior for newly uploaded jobs is to start printing them automatically. If false, uploaded jobs will be added to the printing queue.",
          "notes": ""
        },
        {
          "name": "dashboard_group_id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "dashboard_queue_id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "queue_paused",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "has_form_auto",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "supported_machine_type_ids",
          "type": "List[str]",
          "description": "",
          "notes": ""
        },
        {
          "name": "printers",
          "type": "List[FleetControlPrinterGroupDeviceStatusModelAllOfPrinters]",
          "description": "",
          "notes": ""
        },
        {
          "name": "is_remote_print_enabled",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "estimated_print_time_remaining_ms",
          "type": "int",
          "description": "",
          "notes": ""
        },
        {
          "name": "tank_id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "tank_material_code",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "cartridge_data",
          "type": "Dict[str, Form4FamilyDeviceStatusModelAllOfCartridgeData]",
          "description": "",
          "notes": ""
        },
        {
          "name": "form_auto_status",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "bed_temperature_c",
          "type": "float",
          "description": "",
          "notes": ""
        },
        {
          "name": "powder_level",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "printing_layer",
          "type": "int",
          "description": "",
          "notes": ""
        },
        {
          "name": "printing_guid",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "cylinder_material_code",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "cylinder_serial",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "printer_material_code",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "powder_credit_g",
          "type": "float",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.device_status_model import DeviceStatusModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DeviceStatusModel from a JSON string\ndevice_status_model_instance = DeviceStatusModel.from_json(json)\n# print the JSON string representation of the object\nprint(DeviceStatusModel.to_json())\n\n# convert the object into a dict\ndevice_status_model_dict = device_status_model_instance.to_dict()\n# create an instance of DeviceStatusModel from a dict\ndevice_status_model_from_dict = DeviceStatusModel.from_dict(device_status_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.DevicesApi",
      "file": "DevicesApi.md",
      "summary": "Methods: discover_devices, get_device, get_devices, upload_firmware",
      "methods": [
        {
          "name": "discover_devices",
          "signature": "DiscoverDevices200Response discover_devices(discover_devices_request, var_async=var_async)",
          "description": "Discover Devices\nDiscover new devices on the network",
          "params": [
            {
              "name": "discover_devices_request",
              "type": "DiscoverDevicesRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.discover_devices200_response import DiscoverDevices200Response\nfrom formlabs_local_api.models.discover_devices_request import DiscoverDevicesRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.DevicesApi(api_client)\n    discover_devices_request = {\"timeout_seconds\":10} # DiscoverDevicesRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Discover Devices\n        api_response = api_instance.discover_devices(discover_devices_request, var_async=var_async)\n        print(\"The response of DevicesApi->discover_devices:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling DevicesApi->discover_devices: %s\\n\" % e)"
        },
        {
          "name": "get_device",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.device_status_model import DeviceStatusModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.DevicesApi(api_client)\n    id = 'id_example' # str | The unique identifier of the printer\n\n    try:\n        # Get Device\n        api_response = api_instance.get_device(id)\n        print(\"The response of DevicesApi->get_device:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling DevicesApi->get_device: %s\\n\" % e)"
        },
        {
          "name": "get_devices",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_devices200_response import GetDevices200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.DevicesApi(api_client)\n    can_print = True # bool | If true, only devices that can receive prints will be returned. (optional)\n\n    try:\n        # Get Devices\n        api_response = api_instance.get_devices(can_print=can_print)\n        print(\"The response of DevicesApi->get_devices:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling DevicesApi->get_devices: %s\\n\" % e)"
        },
        {
          "name": "upload_firmware",
          "signature": "DiscoverDevices200Response upload_firmware(upload_firmware_request, var_async=var_async)",
          "description": "Upload Firmware\nUpload new firmware to a device",
          "params": [
            {
              "name": "upload_firmware_request",
              "type": "UploadFirmwareRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.discover_devices200_response import DiscoverDevices200Response\nfrom formlabs_local_api.models.upload_firmware_request import UploadFirmwareRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.DevicesApi(api_client)\n    upload_firmware_request = {\"printer\":\"Form4-TestyTest\",\"file_path\":\"C:\\\\Users\\\\user\\\\Desktop\\\\form4-public-1.9.0-2444.formware\"} # UploadFirmwareRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Upload Firmware\n        api_response = api_instance.upload_firmware(upload_firmware_request, var_async=var_async)\n        print(\"The response of DevicesApi->upload_firmware:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling DevicesApi->upload_firmware: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.discover_devices200_response import DiscoverDevices200Response\nfrom formlabs_local_api.models.discover_devices_request import DiscoverDevicesRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.DevicesApi(api_client)\n    discover_devices_request = {\"timeout_seconds\":10} # DiscoverDevicesRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Discover Devices\n        api_response = api_instance.discover_devices(discover_devices_request, var_async=var_async)\n        print(\"The response of DevicesApi->discover_devices:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling DevicesApi->discover_devices: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "DirectionVectorsModel",
      "file": "DirectionVectorsModel.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "z_direction",
          "type": "List[float]",
          "description": "3D unit vector in model space saying which piece of the model will point \\&quot;up\\&quot; in scene space.",
          "notes": ""
        },
        {
          "name": "x_direction",
          "type": "List[float]",
          "description": "3D unit vector in model space, perpendicular to Z direction, saying which piece of the model will point \\&quot;right\\&quot; in scene space.",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.direction_vectors_model import DirectionVectorsModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DirectionVectorsModel from a JSON string\ndirection_vectors_model_instance = DirectionVectorsModel.from_json(json)\n# print the JSON string representation of the object\nprint(DirectionVectorsModel.to_json())\n\n# convert the object into a dict\ndirection_vectors_model_dict = direction_vectors_model_instance.to_dict()\n# create an instance of DirectionVectorsModel from a dict\ndirection_vectors_model_from_dict = DirectionVectorsModel.from_dict(direction_vectors_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "DiscoverDevices200Response",
      "file": "DiscoverDevices200Response.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "count",
          "type": "int",
          "description": "Number of newly discovered devices",
          "notes": "[optional]"
        },
        {
          "name": "devices",
          "type": "List[DeviceStatusModel]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.discover_devices200_response import DiscoverDevices200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DiscoverDevices200Response from a JSON string\ndiscover_devices200_response_instance = DiscoverDevices200Response.from_json(json)\n# print the JSON string representation of the object\nprint(DiscoverDevices200Response.to_json())\n\n# convert the object into a dict\ndiscover_devices200_response_dict = discover_devices200_response_instance.to_dict()\n# create an instance of DiscoverDevices200Response from a dict\ndiscover_devices200_response_from_dict = DiscoverDevices200Response.from_dict(discover_devices200_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "DiscoverDevicesRequest",
      "file": "DiscoverDevicesRequest.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "timeout_seconds",
          "type": "int",
          "description": "Number of seconds to wait when discovering devices",
          "notes": "[optional]"
        },
        {
          "name": "ip_address",
          "type": "str",
          "description": "Local network IP address to attempt to discover a device at",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.discover_devices_request import DiscoverDevicesRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DiscoverDevicesRequest from a JSON string\ndiscover_devices_request_instance = DiscoverDevicesRequest.from_json(json)\n# print the JSON string representation of the object\nprint(DiscoverDevicesRequest.to_json())\n\n# convert the object into a dict\ndiscover_devices_request_dict = discover_devices_request_instance.to_dict()\n# create an instance of DiscoverDevicesRequest from a dict\ndiscover_devices_request_from_dict = DiscoverDevicesRequest.from_dict(discover_devices_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "DrainHoleModel",
      "file": "DrainHoleModel.md",
      "summary": "Model with 7 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "orientation",
          "type": "OrientationModel",
          "description": "",
          "notes": ""
        },
        {
          "name": "position",
          "type": "ScenePositionModel",
          "description": "",
          "notes": ""
        },
        {
          "name": "diameter_mm",
          "type": "float",
          "description": "The diameter of the drain hole, in mm",
          "notes": ""
        },
        {
          "name": "depth_mm",
          "type": "DrainHoleModelDepthMm",
          "description": "",
          "notes": ""
        },
        {
          "name": "outset_mm",
          "type": "float",
          "description": "The back depth of the drain hole, in mm",
          "notes": "[optional]"
        },
        {
          "name": "create_plug",
          "type": "bool",
          "description": "Whether or not to create a plug for the drain hole",
          "notes": ""
        },
        {
          "name": "max_search_distance",
          "type": "float",
          "description": "The maximum distance, in mm, from the given position to search for a point on the surface of the model. Must be combined with depth_mm: \\&quot;AUTO\\&quot;.",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.drain_hole_model import DrainHoleModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DrainHoleModel from a JSON string\ndrain_hole_model_instance = DrainHoleModel.from_json(json)\n# print the JSON string representation of the object\nprint(DrainHoleModel.to_json())\n\n# convert the object into a dict\ndrain_hole_model_dict = drain_hole_model_instance.to_dict()\n# create an instance of DrainHoleModel from a dict\ndrain_hole_model_from_dict = DrainHoleModel.from_dict(drain_hole_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "DrainHoleModelDepthMm",
      "file": "DrainHoleModelDepthMm.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": "from formlabs_local_api.models.drain_hole_model_depth_mm import DrainHoleModelDepthMm\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DrainHoleModelDepthMm from a JSON string\ndrain_hole_model_depth_mm_instance = DrainHoleModelDepthMm.from_json(json)\n# print the JSON string representation of the object\nprint(DrainHoleModelDepthMm.to_json())\n\n# convert the object into a dict\ndrain_hole_model_depth_mm_dict = drain_hole_model_depth_mm_instance.to_dict()\n# create an instance of DrainHoleModelDepthMm from a dict\ndrain_hole_model_depth_mm_from_dict = DrainHoleModelDepthMm.from_dict(drain_hole_model_depth_mm_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "DuplicateModelRequest",
      "file": "DuplicateModelRequest.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "count",
          "type": "int",
          "description": "Number of duplicates to create",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.duplicate_model_request import DuplicateModelRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DuplicateModelRequest from a JSON string\nduplicate_model_request_instance = DuplicateModelRequest.from_json(json)\n# print the JSON string representation of the object\nprint(DuplicateModelRequest.to_json())\n\n# convert the object into a dict\nduplicate_model_request_dict = duplicate_model_request_instance.to_dict()\n# create an instance of DuplicateModelRequest from a dict\nduplicate_model_request_from_dict = DuplicateModelRequest.from_dict(duplicate_model_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ErrorModel",
      "file": "ErrorModel.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "error",
          "type": "ErrorModelError",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.error_model import ErrorModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ErrorModel from a JSON string\nerror_model_instance = ErrorModel.from_json(json)\n# print the JSON string representation of the object\nprint(ErrorModel.to_json())\n\n# convert the object into a dict\nerror_model_dict = error_model_instance.to_dict()\n# create an instance of ErrorModel from a dict\nerror_model_from_dict = ErrorModel.from_dict(error_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ErrorModelError",
      "file": "ErrorModelError.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "code",
          "type": "str",
          "description": "Unique and stable string identifying this error, e.g. \\&quot;PRINTER_IP_NOT_FOUND\\&quot;",
          "notes": "[optional]"
        },
        {
          "name": "message",
          "type": "str",
          "description": "Human-readable english string describing the error, e.g. \\&quot;The printer at IP address 10.34.0.1 could not be found\\&quot;",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.error_model_error import ErrorModelError\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ErrorModelError from a JSON string\nerror_model_error_instance = ErrorModelError.from_json(json)\n# print the JSON string representation of the object\nprint(ErrorModelError.to_json())\n\n# convert the object into a dict\nerror_model_error_dict = error_model_error_instance.to_dict()\n# create an instance of ErrorModelError from a dict\nerror_model_error_from_dict = ErrorModelError.from_dict(error_model_error_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "EstimatedPrintTimeModel",
      "file": "EstimatedPrintTimeModel.md",
      "summary": "Model with 5 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "total_print_time_s",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "preprint_time_s",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "printing_time_s",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "cool_to_removal_time_s",
          "type": "float",
          "description": "Time it takes to cool the build chamber to around 100°C when it can be removed from the printer.",
          "notes": "[optional]"
        },
        {
          "name": "additional_cool_to_room_temp_time_s",
          "type": "float",
          "description": "Time it takes to cool the build from around 100°C to nearly room temperature while inside of the printer.",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.estimated_print_time_model import EstimatedPrintTimeModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of EstimatedPrintTimeModel from a JSON string\nestimated_print_time_model_instance = EstimatedPrintTimeModel.from_json(json)\n# print the JSON string representation of the object\nprint(EstimatedPrintTimeModel.to_json())\n\n# convert the object into a dict\nestimated_print_time_model_dict = estimated_print_time_model_instance.to_dict()\n# create an instance of EstimatedPrintTimeModel from a dict\nestimated_print_time_model_from_dict = EstimatedPrintTimeModel.from_dict(estimated_print_time_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "EulerAnglesModel",
      "file": "EulerAnglesModel.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "x",
          "type": "float",
          "description": "Rotation in degrees around the x axis (applied second)",
          "notes": ""
        },
        {
          "name": "y",
          "type": "float",
          "description": "Rotation in degrees around the y axis (applied last)",
          "notes": ""
        },
        {
          "name": "z",
          "type": "float",
          "description": "Rotation in degrees around the z axis (applied first)",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.euler_angles_model import EulerAnglesModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of EulerAnglesModel from a JSON string\neuler_angles_model_instance = EulerAnglesModel.from_json(json)\n# print the JSON string representation of the object\nprint(EulerAnglesModel.to_json())\n\n# convert the object into a dict\neuler_angles_model_dict = euler_angles_model_instance.to_dict()\n# create an instance of EulerAnglesModel from a dict\neuler_angles_model_from_dict = EulerAnglesModel.from_dict(euler_angles_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.ExportingApi",
      "file": "ExportingApi.md",
      "summary": "Methods: save_form_file, save_fps_file, save_screenshot",
      "methods": [
        {
          "name": "save_form_file",
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
              "type": "LoadFormFileRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.load_form_file_request import LoadFormFileRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    load_form_file_request = {\"file\":\"C:\\\\Users\\\\user\\\\Desktop\\\\test.form\"} # LoadFormFileRequest | Full path where the file should be saved\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Save .form file\n        api_instance.save_form_file(scene_id, load_form_file_request, var_async=var_async)\n    except Exception as e:\n        print(\"Exception when calling ExportingApi->save_form_file: %s\\n\" % e)"
        },
        {
          "name": "save_fps_file",
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
              "type": "SaveFpsFileRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.save_fps_file_request import SaveFpsFileRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    save_fps_file_request = {\"file\":\"C:\\\\Users\\\\user\\\\Desktop\\\\custom-grey.fps\"} # SaveFpsFileRequest | Full path where the FPS file should be saved\n\n    try:\n        # Save FPS file\n        api_instance.save_fps_file(scene_id, save_fps_file_request)\n    except Exception as e:\n        print(\"Exception when calling ExportingApi->save_fps_file: %s\\n\" % e)"
        },
        {
          "name": "save_screenshot",
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
              "type": "SaveScreenshotRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.save_screenshot_request import SaveScreenshotRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    save_screenshot_request = {\"file\":\"C:\\\\Users\\\\user\\\\Desktop\\\\screenshot.png\"} # SaveScreenshotRequest | Full path where the image should be saved\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Save screenshot file\n        api_instance.save_screenshot(scene_id, save_screenshot_request, var_async=var_async)\n    except Exception as e:\n        print(\"Exception when calling ExportingApi->save_screenshot: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.load_form_file_request import LoadFormFileRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    load_form_file_request = {\"file\":\"C:\\\\Users\\\\user\\\\Desktop\\\\test.form\"} # LoadFormFileRequest | Full path where the file should be saved\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Save .form file\n        api_instance.save_form_file(scene_id, load_form_file_request, var_async=var_async)\n    except Exception as e:\n        print(\"Exception when calling ExportingApi->save_form_file: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.ExportingDeprecatedApi",
      "file": "ExportingDeprecatedApi.md",
      "summary": "Methods: save_form_file_deprecated, save_fps_file_deprecated, save_screenshot_deprecated",
      "methods": [
        {
          "name": "save_form_file_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingDeprecatedApi(api_client)\n\n    try:\n        # Save .form file\n        api_instance.save_form_file_deprecated()\n    except Exception as e:\n        print(\"Exception when calling ExportingDeprecatedApi->save_form_file_deprecated: %s\\n\" % e)"
        },
        {
          "name": "save_fps_file_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingDeprecatedApi(api_client)\n\n    try:\n        # Save FPS file\n        api_instance.save_fps_file_deprecated()\n    except Exception as e:\n        print(\"Exception when calling ExportingDeprecatedApi->save_fps_file_deprecated: %s\\n\" % e)"
        },
        {
          "name": "save_screenshot_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingDeprecatedApi(api_client)\n\n    try:\n        # Save screenshot file\n        api_instance.save_screenshot_deprecated()\n    except Exception as e:\n        print(\"Exception when calling ExportingDeprecatedApi->save_screenshot_deprecated: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ExportingDeprecatedApi(api_client)\n\n    try:\n        # Save .form file\n        api_instance.save_form_file_deprecated()\n    except Exception as e:\n        print(\"Exception when calling ExportingDeprecatedApi->save_form_file_deprecated: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "FPSFile",
      "file": "FPSFile.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "fps_file",
          "type": "str",
          "description": "The full path to the .FPS file",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.fps_file import FPSFile\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of FPSFile from a JSON string\nfps_file_instance = FPSFile.from_json(json)\n# print the JSON string representation of the object\nprint(FPSFile.to_json())\n\n# convert the object into a dict\nfps_file_dict = fps_file_instance.to_dict()\n# create an instance of FPSFile from a dict\nfps_file_from_dict = FPSFile.from_dict(fps_file_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "FleetControlPrinterGroupDeviceStatusModel",
      "file": "FleetControlPrinterGroupDeviceStatusModel.md",
      "summary": "Model with 14 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "product_name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "status",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "is_connected",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "connection_type",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ip_address",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ready_to_print_now",
          "type": "bool",
          "description": "If the default behavior for newly uploaded jobs is to start printing them automatically. If false, uploaded jobs will be added to the printing queue.",
          "notes": ""
        },
        {
          "name": "dashboard_group_id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "dashboard_queue_id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "queue_paused",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "has_form_auto",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "supported_machine_type_ids",
          "type": "List[str]",
          "description": "",
          "notes": ""
        },
        {
          "name": "printers",
          "type": "List[FleetControlPrinterGroupDeviceStatusModelAllOfPrinters]",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.fleet_control_printer_group_device_status_model import FleetControlPrinterGroupDeviceStatusModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of FleetControlPrinterGroupDeviceStatusModel from a JSON string\nfleet_control_printer_group_device_status_model_instance = FleetControlPrinterGroupDeviceStatusModel.from_json(json)\n# print the JSON string representation of the object\nprint(FleetControlPrinterGroupDeviceStatusModel.to_json())\n\n# convert the object into a dict\nfleet_control_printer_group_device_status_model_dict = fleet_control_printer_group_device_status_model_instance.to_dict()\n# create an instance of FleetControlPrinterGroupDeviceStatusModel from a dict\nfleet_control_printer_group_device_status_model_from_dict = FleetControlPrinterGroupDeviceStatusModel.from_dict(fleet_control_printer_group_device_status_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "FleetControlPrinterGroupDeviceStatusModelAllOfPrinters",
      "file": "FleetControlPrinterGroupDeviceStatusModelAllOfPrinters.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "machine_type_id",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.fleet_control_printer_group_device_status_model_all_of_printers import FleetControlPrinterGroupDeviceStatusModelAllOfPrinters\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of FleetControlPrinterGroupDeviceStatusModelAllOfPrinters from a JSON string\nfleet_control_printer_group_device_status_model_all_of_printers_instance = FleetControlPrinterGroupDeviceStatusModelAllOfPrinters.from_json(json)\n# print the JSON string representation of the object\nprint(FleetControlPrinterGroupDeviceStatusModelAllOfPrinters.to_json())\n\n# convert the object into a dict\nfleet_control_printer_group_device_status_model_all_of_printers_dict = fleet_control_printer_group_device_status_model_all_of_printers_instance.to_dict()\n# create an instance of FleetControlPrinterGroupDeviceStatusModelAllOfPrinters from a dict\nfleet_control_printer_group_device_status_model_all_of_printers_from_dict = FleetControlPrinterGroupDeviceStatusModelAllOfPrinters.from_dict(fleet_control_printer_group_device_status_model_all_of_printers_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "Form2DeviceStatusModel",
      "file": "Form2DeviceStatusModel.md",
      "summary": "Model with 12 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "product_name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "status",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "is_connected",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "connection_type",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ip_address",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ready_to_print_now",
          "type": "bool",
          "description": "If the default behavior for newly uploaded jobs is to start printing them automatically. If false, uploaded jobs will be added to the printing queue.",
          "notes": ""
        },
        {
          "name": "estimated_print_time_remaining_ms",
          "type": "int",
          "description": "",
          "notes": ""
        },
        {
          "name": "tank_id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "tank_material_code",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "cartridge_data",
          "type": "Dict[str, Form4FamilyDeviceStatusModelAllOfCartridgeData]",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.form2_device_status_model import Form2DeviceStatusModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of Form2DeviceStatusModel from a JSON string\nform2_device_status_model_instance = Form2DeviceStatusModel.from_json(json)\n# print the JSON string representation of the object\nprint(Form2DeviceStatusModel.to_json())\n\n# convert the object into a dict\nform2_device_status_model_dict = form2_device_status_model_instance.to_dict()\n# create an instance of Form2DeviceStatusModel from a dict\nform2_device_status_model_from_dict = Form2DeviceStatusModel.from_dict(form2_device_status_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "Form3FamilyDeviceStatusModel",
      "file": "Form3FamilyDeviceStatusModel.md",
      "summary": "Model with 14 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "product_name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "status",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "is_connected",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "connection_type",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ip_address",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ready_to_print_now",
          "type": "bool",
          "description": "If the default behavior for newly uploaded jobs is to start printing them automatically. If false, uploaded jobs will be added to the printing queue.",
          "notes": ""
        },
        {
          "name": "is_remote_print_enabled",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "estimated_print_time_remaining_ms",
          "type": "int",
          "description": "",
          "notes": ""
        },
        {
          "name": "tank_id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "tank_material_code",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "cartridge_data",
          "type": "Dict[str, Form4FamilyDeviceStatusModelAllOfCartridgeData]",
          "description": "",
          "notes": ""
        },
        {
          "name": "form_auto_status",
          "type": "str",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.form3_family_device_status_model import Form3FamilyDeviceStatusModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of Form3FamilyDeviceStatusModel from a JSON string\nform3_family_device_status_model_instance = Form3FamilyDeviceStatusModel.from_json(json)\n# print the JSON string representation of the object\nprint(Form3FamilyDeviceStatusModel.to_json())\n\n# convert the object into a dict\nform3_family_device_status_model_dict = form3_family_device_status_model_instance.to_dict()\n# create an instance of Form3FamilyDeviceStatusModel from a dict\nform3_family_device_status_model_from_dict = Form3FamilyDeviceStatusModel.from_dict(form3_family_device_status_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "Form4FamilyDeviceStatusModel",
      "file": "Form4FamilyDeviceStatusModel.md",
      "summary": "Model with 13 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "product_name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "status",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "is_connected",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "connection_type",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ip_address",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ready_to_print_now",
          "type": "bool",
          "description": "If the default behavior for newly uploaded jobs is to start printing them automatically. If false, uploaded jobs will be added to the printing queue.",
          "notes": ""
        },
        {
          "name": "is_remote_print_enabled",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "estimated_print_time_remaining_ms",
          "type": "int",
          "description": "",
          "notes": ""
        },
        {
          "name": "tank_id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "tank_material_code",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "cartridge_data",
          "type": "Dict[str, Form4FamilyDeviceStatusModelAllOfCartridgeData]",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.form4_family_device_status_model import Form4FamilyDeviceStatusModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of Form4FamilyDeviceStatusModel from a JSON string\nform4_family_device_status_model_instance = Form4FamilyDeviceStatusModel.from_json(json)\n# print the JSON string representation of the object\nprint(Form4FamilyDeviceStatusModel.to_json())\n\n# convert the object into a dict\nform4_family_device_status_model_dict = form4_family_device_status_model_instance.to_dict()\n# create an instance of Form4FamilyDeviceStatusModel from a dict\nform4_family_device_status_model_from_dict = Form4FamilyDeviceStatusModel.from_dict(form4_family_device_status_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "Form4FamilyDeviceStatusModelAllOfCartridgeData",
      "file": "Form4FamilyDeviceStatusModelAllOfCartridgeData.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "cartridge_material_code",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "cartridge_estimated_volume_dispensed_m_l",
          "type": "float",
          "description": "",
          "notes": ""
        },
        {
          "name": "cartridge_original_volume_m_l",
          "type": "float",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.form4_family_device_status_model_all_of_cartridge_data import Form4FamilyDeviceStatusModelAllOfCartridgeData\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of Form4FamilyDeviceStatusModelAllOfCartridgeData from a JSON string\nform4_family_device_status_model_all_of_cartridge_data_instance = Form4FamilyDeviceStatusModelAllOfCartridgeData.from_json(json)\n# print the JSON string representation of the object\nprint(Form4FamilyDeviceStatusModelAllOfCartridgeData.to_json())\n\n# convert the object into a dict\nform4_family_device_status_model_all_of_cartridge_data_dict = form4_family_device_status_model_all_of_cartridge_data_instance.to_dict()\n# create an instance of Form4FamilyDeviceStatusModelAllOfCartridgeData from a dict\nform4_family_device_status_model_all_of_cartridge_data_from_dict = Form4FamilyDeviceStatusModelAllOfCartridgeData.from_dict(form4_family_device_status_model_all_of_cartridge_data_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "Fuse1DeviceStatusModel",
      "file": "Fuse1DeviceStatusModel.md",
      "summary": "Model with 18 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "product_name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "status",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "is_connected",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "connection_type",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ip_address",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ready_to_print_now",
          "type": "bool",
          "description": "If the default behavior for newly uploaded jobs is to start printing them automatically. If false, uploaded jobs will be added to the printing queue.",
          "notes": ""
        },
        {
          "name": "is_remote_print_enabled",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "estimated_print_time_remaining_ms",
          "type": "int",
          "description": "",
          "notes": ""
        },
        {
          "name": "bed_temperature_c",
          "type": "float",
          "description": "",
          "notes": ""
        },
        {
          "name": "powder_level",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "printing_layer",
          "type": "int",
          "description": "",
          "notes": ""
        },
        {
          "name": "printing_guid",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "cylinder_material_code",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "cylinder_serial",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "printer_material_code",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "powder_credit_g",
          "type": "float",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.fuse1_device_status_model import Fuse1DeviceStatusModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of Fuse1DeviceStatusModel from a JSON string\nfuse1_device_status_model_instance = Fuse1DeviceStatusModel.from_json(json)\n# print the JSON string representation of the object\nprint(Fuse1DeviceStatusModel.to_json())\n\n# convert the object into a dict\nfuse1_device_status_model_dict = fuse1_device_status_model_instance.to_dict()\n# create an instance of Fuse1DeviceStatusModel from a dict\nfuse1_device_status_model_from_dict = Fuse1DeviceStatusModel.from_dict(fuse1_device_status_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "GenericDeviceStatusModel",
      "file": "GenericDeviceStatusModel.md",
      "summary": "Model with 7 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "product_name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "status",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "is_connected",
          "type": "bool",
          "description": "",
          "notes": ""
        },
        {
          "name": "connection_type",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "ip_address",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.generic_device_status_model import GenericDeviceStatusModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of GenericDeviceStatusModel from a JSON string\ngeneric_device_status_model_instance = GenericDeviceStatusModel.from_json(json)\n# print the JSON string representation of the object\nprint(GenericDeviceStatusModel.to_json())\n\n# convert the object into a dict\ngeneric_device_status_model_dict = generic_device_status_model_instance.to_dict()\n# create an instance of GenericDeviceStatusModel from a dict\ngeneric_device_status_model_from_dict = GenericDeviceStatusModel.from_dict(generic_device_status_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "GetAllOperations200Response",
      "file": "GetAllOperations200Response.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "count",
          "type": "int",
          "description": "Number of operations",
          "notes": "[optional]"
        },
        {
          "name": "operations",
          "type": "List[GetAllOperations200ResponseOperationsInner]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.get_all_operations200_response import GetAllOperations200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of GetAllOperations200Response from a JSON string\nget_all_operations200_response_instance = GetAllOperations200Response.from_json(json)\n# print the JSON string representation of the object\nprint(GetAllOperations200Response.to_json())\n\n# convert the object into a dict\nget_all_operations200_response_dict = get_all_operations200_response_instance.to_dict()\n# create an instance of GetAllOperations200Response from a dict\nget_all_operations200_response_from_dict = GetAllOperations200Response.from_dict(get_all_operations200_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "GetAllOperations200ResponseOperationsInner",
      "file": "GetAllOperations200ResponseOperationsInner.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "Operation ID.",
          "notes": "[optional]"
        },
        {
          "name": "status",
          "type": "str",
          "description": "Current status of the operation.",
          "notes": "[optional]"
        },
        {
          "name": "progress",
          "type": "float",
          "description": "Progress of the operation (0.0 to 1.0).",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.get_all_operations200_response_operations_inner import GetAllOperations200ResponseOperationsInner\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of GetAllOperations200ResponseOperationsInner from a JSON string\nget_all_operations200_response_operations_inner_instance = GetAllOperations200ResponseOperationsInner.from_json(json)\n# print the JSON string representation of the object\nprint(GetAllOperations200ResponseOperationsInner.to_json())\n\n# convert the object into a dict\nget_all_operations200_response_operations_inner_dict = get_all_operations200_response_operations_inner_instance.to_dict()\n# create an instance of GetAllOperations200ResponseOperationsInner from a dict\nget_all_operations200_response_operations_inner_from_dict = GetAllOperations200ResponseOperationsInner.from_dict(get_all_operations200_response_operations_inner_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "GetAllScenes200Response",
      "file": "GetAllScenes200Response.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "scenes",
          "type": "List[SceneModel]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.get_all_scenes200_response import GetAllScenes200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of GetAllScenes200Response from a JSON string\nget_all_scenes200_response_instance = GetAllScenes200Response.from_json(json)\n# print the JSON string representation of the object\nprint(GetAllScenes200Response.to_json())\n\n# convert the object into a dict\nget_all_scenes200_response_dict = get_all_scenes200_response_instance.to_dict()\n# create an instance of GetAllScenes200Response from a dict\nget_all_scenes200_response_from_dict = GetAllScenes200Response.from_dict(get_all_scenes200_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "GetApiVersion200Response",
      "file": "GetApiVersion200Response.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "version",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.get_api_version200_response import GetApiVersion200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of GetApiVersion200Response from a JSON string\nget_api_version200_response_instance = GetApiVersion200Response.from_json(json)\n# print the JSON string representation of the object\nprint(GetApiVersion200Response.to_json())\n\n# convert the object into a dict\nget_api_version200_response_dict = get_api_version200_response_instance.to_dict()\n# create an instance of GetApiVersion200Response from a dict\nget_api_version200_response_from_dict = GetApiVersion200Response.from_dict(get_api_version200_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "GetDevices200Response",
      "file": "GetDevices200Response.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "count",
          "type": "int",
          "description": "Number of discovered devices",
          "notes": "[optional]"
        },
        {
          "name": "devices",
          "type": "List[DeviceStatusModel]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.get_devices200_response import GetDevices200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of GetDevices200Response from a JSON string\nget_devices200_response_instance = GetDevices200Response.from_json(json)\n# print the JSON string representation of the object\nprint(GetDevices200Response.to_json())\n\n# convert the object into a dict\nget_devices200_response_dict = get_devices200_response_instance.to_dict()\n# create an instance of GetDevices200Response from a dict\nget_devices200_response_from_dict = GetDevices200Response.from_dict(get_devices200_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "GetOperation200Response",
      "file": "GetOperation200Response.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "Operation ID.",
          "notes": "[optional]"
        },
        {
          "name": "status",
          "type": "str",
          "description": "Current status of the operation.",
          "notes": "[optional]"
        },
        {
          "name": "progress",
          "type": "float",
          "description": "Progress of the operation (0.0 to 1.0).",
          "notes": "[optional]"
        },
        {
          "name": "result",
          "type": "object",
          "description": "Result of the operation, if succeeded or failed. Matches the schema of the operation or its error response.",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.get_operation200_response import GetOperation200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of GetOperation200Response from a JSON string\nget_operation200_response_instance = GetOperation200Response.from_json(json)\n# print the JSON string representation of the object\nprint(GetOperation200Response.to_json())\n\n# convert the object into a dict\nget_operation200_response_dict = get_operation200_response_instance.to_dict()\n# create an instance of GetOperation200Response from a dict\nget_operation200_response_from_dict = GetOperation200Response.from_dict(get_operation200_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "GetSceneInterferencesRequest",
      "file": "GetSceneInterferencesRequest.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "collision_offset_mm",
          "type": "float",
          "description": "The minimum distance between models for them not to be considered interfering with each other.",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.get_scene_interferences_request import GetSceneInterferencesRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of GetSceneInterferencesRequest from a JSON string\nget_scene_interferences_request_instance = GetSceneInterferencesRequest.from_json(json)\n# print the JSON string representation of the object\nprint(GetSceneInterferencesRequest.to_json())\n\n# convert the object into a dict\nget_scene_interferences_request_dict = get_scene_interferences_request_instance.to_dict()\n# create an instance of GetSceneInterferencesRequest from a dict\nget_scene_interferences_request_from_dict = GetSceneInterferencesRequest.from_dict(get_scene_interferences_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.GettingSceneInformationApi",
      "file": "GettingSceneInformationApi.md",
      "summary": "Methods: detect_thin_walls, estimate_print_time, get_all_scenes, get_model, ...",
      "methods": [
        {
          "name": "detect_thin_walls",
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
              "type": "ThinWallDetectionRequestModel",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.thin_wall_detection_request_model import ThinWallDetectionRequestModel\nfrom formlabs_local_api.models.thin_wall_detection_result_model import ThinWallDetectionResultModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    thin_wall_detection_request_model = formlabs_local_api.ThinWallDetectionRequestModel() # ThinWallDetectionRequestModel | Thin wall detection parameters\n    var_async = False # bool | If `true`, the server returns `202 Accepted` with an operation id and runs the detection in the background. Poll `/operations/{id}/` for completion. Recommended for large meshes or `models: \\\"ALL\\\"` requests where the synchronous response may be slow.  (optional) (default to False)\n\n    try:\n        # Detect Thin Walls\n        api_response = api_instance.detect_thin_walls(scene_id, thin_wall_detection_request_model, var_async=var_async)\n        print(\"The response of GettingSceneInformationApi->detect_thin_walls:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->detect_thin_walls: %s\\n\" % e)"
        },
        {
          "name": "estimate_print_time",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.estimated_print_time_model import EstimatedPrintTimeModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Estimate Print Time\n        api_response = api_instance.estimate_print_time(scene_id, var_async=var_async)\n        print(\"The response of GettingSceneInformationApi->estimate_print_time:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->estimate_print_time: %s\\n\" % e)"
        },
        {
          "name": "get_all_scenes",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_all_scenes200_response import GetAllScenes200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n\n    try:\n        # Get All Scenes\n        api_response = api_instance.get_all_scenes()\n        print(\"The response of GettingSceneInformationApi->get_all_scenes:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->get_all_scenes: %s\\n\" % e)"
        },
        {
          "name": "get_model",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.model_properties import ModelProperties\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n\n    try:\n        # Get model\n        api_response = api_instance.get_model(id, scene_id)\n        print(\"The response of GettingSceneInformationApi->get_model:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->get_model: %s\\n\" % e)"
        },
        {
          "name": "get_print_validation",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print_validation_result_model import PrintValidationResultModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Get Print Validation\n        api_response = api_instance.get_print_validation(scene_id, var_async=var_async)\n        print(\"The response of GettingSceneInformationApi->get_print_validation:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->get_print_validation: %s\\n\" % e)"
        },
        {
          "name": "get_scene",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n\n    try:\n        # Get Scene\n        api_response = api_instance.get_scene(scene_id)\n        print(\"The response of GettingSceneInformationApi->get_scene:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->get_scene: %s\\n\" % e)"
        },
        {
          "name": "get_scene_interferences",
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
              "type": "GetSceneInterferencesRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_scene_interferences_request import GetSceneInterferencesRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    get_scene_interferences_request = formlabs_local_api.GetSceneInterferencesRequest() # GetSceneInterferencesRequest | Interferences parameters (optional)\n\n    try:\n        # Get Scene Interferences\n        api_instance.get_scene_interferences(scene_id, get_scene_interferences_request=get_scene_interferences_request)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->get_scene_interferences: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.thin_wall_detection_request_model import ThinWallDetectionRequestModel\nfrom formlabs_local_api.models.thin_wall_detection_result_model import ThinWallDetectionResultModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    thin_wall_detection_request_model = formlabs_local_api.ThinWallDetectionRequestModel() # ThinWallDetectionRequestModel | Thin wall detection parameters\n    var_async = False # bool | If `true`, the server returns `202 Accepted` with an operation id and runs the detection in the background. Poll `/operations/{id}/` for completion. Recommended for large meshes or `models: \\\"ALL\\\"` requests where the synchronous response may be slow.  (optional) (default to False)\n\n    try:\n        # Detect Thin Walls\n        api_response = api_instance.detect_thin_walls(scene_id, thin_wall_detection_request_model, var_async=var_async)\n        print(\"The response of GettingSceneInformationApi->detect_thin_walls:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationApi->detect_thin_walls: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.GettingSceneInformationDeprecatedApi",
      "file": "GettingSceneInformationDeprecatedApi.md",
      "summary": "Methods: detect_thin_walls_deprecated, estimate_print_time_deprecated, get_model_deprecated, get_print_validation_deprecated, ...",
      "methods": [
        {
          "name": "detect_thin_walls_deprecated",
          "signature": "ThinWallDetectionResultModel detect_thin_walls_deprecated(thin_wall_detection_request_model, var_async=var_async)",
          "description": "Detect Thin Walls\nDeprecated. See [/scene/{scene_id}/thin-wall-detection/](#operation/detectThinWalls)",
          "params": [
            {
              "name": "thin_wall_detection_request_model",
              "type": "ThinWallDetectionRequestModel",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.thin_wall_detection_request_model import ThinWallDetectionRequestModel\nfrom formlabs_local_api.models.thin_wall_detection_result_model import ThinWallDetectionResultModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n    thin_wall_detection_request_model = formlabs_local_api.ThinWallDetectionRequestModel() # ThinWallDetectionRequestModel | Thin wall detection parameters\n    var_async = False # bool |  (optional) (default to False)\n\n    try:\n        # Detect Thin Walls\n        api_response = api_instance.detect_thin_walls_deprecated(thin_wall_detection_request_model, var_async=var_async)\n        print(\"The response of GettingSceneInformationDeprecatedApi->detect_thin_walls_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->detect_thin_walls_deprecated: %s\\n\" % e)"
        },
        {
          "name": "estimate_print_time_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.estimated_print_time_model import EstimatedPrintTimeModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n\n    try:\n        # Estimate Print Time\n        api_response = api_instance.estimate_print_time_deprecated()\n        print(\"The response of GettingSceneInformationDeprecatedApi->estimate_print_time_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->estimate_print_time_deprecated: %s\\n\" % e)"
        },
        {
          "name": "get_model_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.model_properties import ModelProperties\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n\n    try:\n        # Get model\n        api_response = api_instance.get_model_deprecated(id)\n        print(\"The response of GettingSceneInformationDeprecatedApi->get_model_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->get_model_deprecated: %s\\n\" % e)"
        },
        {
          "name": "get_print_validation_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print_validation_result_model import PrintValidationResultModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n\n    try:\n        # Get Print Validation\n        api_response = api_instance.get_print_validation_deprecated()\n        print(\"The response of GettingSceneInformationDeprecatedApi->get_print_validation_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->get_print_validation_deprecated: %s\\n\" % e)"
        },
        {
          "name": "get_scene_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n\n    try:\n        # Get Scene\n        api_response = api_instance.get_scene_deprecated()\n        print(\"The response of GettingSceneInformationDeprecatedApi->get_scene_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->get_scene_deprecated: %s\\n\" % e)"
        },
        {
          "name": "get_scene_interferences_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n\n    try:\n        # Get Scene Interferences\n        api_instance.get_scene_interferences_deprecated()\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->get_scene_interferences_deprecated: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.thin_wall_detection_request_model import ThinWallDetectionRequestModel\nfrom formlabs_local_api.models.thin_wall_detection_result_model import ThinWallDetectionResultModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.GettingSceneInformationDeprecatedApi(api_client)\n    thin_wall_detection_request_model = formlabs_local_api.ThinWallDetectionRequestModel() # ThinWallDetectionRequestModel | Thin wall detection parameters\n    var_async = False # bool |  (optional) (default to False)\n\n    try:\n        # Detect Thin Walls\n        api_response = api_instance.detect_thin_walls_deprecated(thin_wall_detection_request_model, var_async=var_async)\n        print(\"The response of GettingSceneInformationDeprecatedApi->detect_thin_walls_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling GettingSceneInformationDeprecatedApi->detect_thin_walls_deprecated: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "HollowModel200Response",
      "file": "HollowModel200Response.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "warnings",
          "type": "List[str]",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "infos",
          "type": "List[str]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.hollow_model200_response import HollowModel200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of HollowModel200Response from a JSON string\nhollow_model200_response_instance = HollowModel200Response.from_json(json)\n# print the JSON string representation of the object\nprint(HollowModel200Response.to_json())\n\n# convert the object into a dict\nhollow_model200_response_dict = hollow_model200_response_instance.to_dict()\n# create an instance of HollowModel200Response from a dict\nhollow_model200_response_from_dict = HollowModel200Response.from_dict(hollow_model200_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "HollowModel400Response",
      "file": "HollowModel400Response.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "failures",
          "type": "List[str]",
          "description": "The IDs of models the hollowing operation failed for",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.hollow_model400_response import HollowModel400Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of HollowModel400Response from a JSON string\nhollow_model400_response_instance = HollowModel400Response.from_json(json)\n# print the JSON string representation of the object\nprint(HollowModel400Response.to_json())\n\n# convert the object into a dict\nhollow_model400_response_dict = hollow_model400_response_instance.to_dict()\n# create an instance of HollowModel400Response from a dict\nhollow_model400_response_from_dict = HollowModel400Response.from_dict(hollow_model400_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "HollowModelRequest",
      "file": "HollowModelRequest.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "models",
          "type": "ModelsSelectionModel",
          "description": "A list of models to hollow",
          "notes": "[optional]"
        },
        {
          "name": "wall_thickness_mm",
          "type": "float",
          "description": "The desired wall thickness of the hollowed models",
          "notes": "[optional]"
        },
        {
          "name": "feature_size_mm",
          "type": "float",
          "description": "The size of features to keep on hollowed geometry. Higher values will produce a smoother, simpler inner hollowed surface with a less accurate thickness wall thickness around features smaller than this value.",
          "notes": "[optional] [default to 1]"
        },
        {
          "name": "accuracy",
          "type": "float",
          "description": "The accuracy of the hollowing operation. Higher values are slower but more accurate.",
          "notes": "[optional] [default to 0.5]"
        }
      ],
      "example": "from formlabs_local_api.models.hollow_model_request import HollowModelRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of HollowModelRequest from a JSON string\nhollow_model_request_instance = HollowModelRequest.from_json(json)\n# print the JSON string representation of the object\nprint(HollowModelRequest.to_json())\n\n# convert the object into a dict\nhollow_model_request_dict = hollow_model_request_instance.to_dict()\n# create an instance of HollowModelRequest from a dict\nhollow_model_request_from_dict = HollowModelRequest.from_dict(hollow_model_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ImportModelRequest",
      "file": "ImportModelRequest.md",
      "summary": "Model with 8 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "file",
          "type": "str",
          "description": "Full path to the file to load",
          "notes": ""
        },
        {
          "name": "repair_behavior",
          "type": "RepairBehaviorModel",
          "description": "",
          "notes": "[optional] [default to RepairBehaviorModel.ERROR]"
        },
        {
          "name": "name",
          "type": "str",
          "description": "The name of the model used within job preparation.",
          "notes": "[optional]"
        },
        {
          "name": "position",
          "type": "ScenePositionModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "orientation",
          "type": "OrientationModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "scale",
          "type": "float",
          "description": "The scale factor to apply to the model",
          "notes": "[optional] [default to 1]"
        },
        {
          "name": "units",
          "type": "ImportUnitsModel",
          "description": "",
          "notes": "[optional] [default to ImportUnitsModel.DETECTED]"
        },
        {
          "name": "lock",
          "type": "LockModel",
          "description": "",
          "notes": "[optional] [default to LockModel.FREE]"
        }
      ],
      "example": "from formlabs_local_api.models.import_model_request import ImportModelRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ImportModelRequest from a JSON string\nimport_model_request_instance = ImportModelRequest.from_json(json)\n# print the JSON string representation of the object\nprint(ImportModelRequest.to_json())\n\n# convert the object into a dict\nimport_model_request_dict = import_model_request_instance.to_dict()\n# create an instance of ImportModelRequest from a dict\nimport_model_request_from_dict = ImportModelRequest.from_dict(import_model_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ImportUnitsModel",
      "file": "ImportUnitsModel.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": ""
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "LabelPart400Response",
      "file": "LabelPart400Response.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "error",
          "type": "LabelPart400ResponseError",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.label_part400_response import LabelPart400Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of LabelPart400Response from a JSON string\nlabel_part400_response_instance = LabelPart400Response.from_json(json)\n# print the JSON string representation of the object\nprint(LabelPart400Response.to_json())\n\n# convert the object into a dict\nlabel_part400_response_dict = label_part400_response_instance.to_dict()\n# create an instance of LabelPart400Response from a dict\nlabel_part400_response_from_dict = LabelPart400Response.from_dict(label_part400_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "LabelPart400ResponseError",
      "file": "LabelPart400ResponseError.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "message",
          "type": "LabelPart400ResponseErrorMessage",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.label_part400_response_error import LabelPart400ResponseError\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of LabelPart400ResponseError from a JSON string\nlabel_part400_response_error_instance = LabelPart400ResponseError.from_json(json)\n# print the JSON string representation of the object\nprint(LabelPart400ResponseError.to_json())\n\n# convert the object into a dict\nlabel_part400_response_error_dict = label_part400_response_error_instance.to_dict()\n# create an instance of LabelPart400ResponseError from a dict\nlabel_part400_response_error_from_dict = LabelPart400ResponseError.from_dict(label_part400_response_error_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "LabelPart400ResponseErrorMessage",
      "file": "LabelPart400ResponseErrorMessage.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": "from formlabs_local_api.models.label_part400_response_error_message import LabelPart400ResponseErrorMessage\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of LabelPart400ResponseErrorMessage from a JSON string\nlabel_part400_response_error_message_instance = LabelPart400ResponseErrorMessage.from_json(json)\n# print the JSON string representation of the object\nprint(LabelPart400ResponseErrorMessage.to_json())\n\n# convert the object into a dict\nlabel_part400_response_error_message_dict = label_part400_response_error_message_instance.to_dict()\n# create an instance of LabelPart400ResponseErrorMessage from a dict\nlabel_part400_response_error_message_from_dict = LabelPart400ResponseErrorMessage.from_dict(label_part400_response_error_message_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "LabelPartRequest",
      "file": "LabelPartRequest.md",
      "summary": "Model with 7 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "model_id",
          "type": "str",
          "description": "The ID of the model to label",
          "notes": ""
        },
        {
          "name": "orientation",
          "type": "OrientationModel",
          "description": "The orientation of the label (+x left-to-right along text, +y top-to-bottom along text, +z normal to text plane).",
          "notes": ""
        },
        {
          "name": "position",
          "type": "ScenePositionModel",
          "description": "The desired center point of the label",
          "notes": ""
        },
        {
          "name": "label",
          "type": "str",
          "description": "The label&#39;s text",
          "notes": ""
        },
        {
          "name": "application_mode",
          "type": "str",
          "description": "",
          "notes": "[optional] [default to 'EMBOSS']"
        },
        {
          "name": "font_size_mm",
          "type": "float",
          "description": "The font size of the label",
          "notes": ""
        },
        {
          "name": "depth_mm",
          "type": "float",
          "description": "The label&#39;s extrusion depth. This depth is a constant offset from the model&#39;s surface.",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.label_part_request import LabelPartRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of LabelPartRequest from a JSON string\nlabel_part_request_instance = LabelPartRequest.from_json(json)\n# print the JSON string representation of the object\nprint(LabelPartRequest.to_json())\n\n# convert the object into a dict\nlabel_part_request_dict = label_part_request_instance.to_dict()\n# create an instance of LabelPartRequest from a dict\nlabel_part_request_from_dict = LabelPartRequest.from_dict(label_part_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ListMaterials200Response",
      "file": "ListMaterials200Response.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "printer_types",
          "type": "List[ListMaterials200ResponsePrinterTypesInner]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.list_materials200_response import ListMaterials200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ListMaterials200Response from a JSON string\nlist_materials200_response_instance = ListMaterials200Response.from_json(json)\n# print the JSON string representation of the object\nprint(ListMaterials200Response.to_json())\n\n# convert the object into a dict\nlist_materials200_response_dict = list_materials200_response_instance.to_dict()\n# create an instance of ListMaterials200Response from a dict\nlist_materials200_response_from_dict = ListMaterials200Response.from_dict(list_materials200_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ListMaterials200ResponsePrinterTypesInner",
      "file": "ListMaterials200ResponsePrinterTypesInner.md",
      "summary": "Model with 5 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "label",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "build_volume_dimensions_mm",
          "type": "List[float]",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "supported_machine_type_ids",
          "type": "List[str]",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "supported_product_names",
          "type": "List[str]",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "materials",
          "type": "List[ListMaterials200ResponsePrinterTypesInnerMaterialsInner]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.list_materials200_response_printer_types_inner import ListMaterials200ResponsePrinterTypesInner\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ListMaterials200ResponsePrinterTypesInner from a JSON string\nlist_materials200_response_printer_types_inner_instance = ListMaterials200ResponsePrinterTypesInner.from_json(json)\n# print the JSON string representation of the object\nprint(ListMaterials200ResponsePrinterTypesInner.to_json())\n\n# convert the object into a dict\nlist_materials200_response_printer_types_inner_dict = list_materials200_response_printer_types_inner_instance.to_dict()\n# create an instance of ListMaterials200ResponsePrinterTypesInner from a dict\nlist_materials200_response_printer_types_inner_from_dict = ListMaterials200ResponsePrinterTypesInner.from_dict(list_materials200_response_printer_types_inner_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ListMaterials200ResponsePrinterTypesInnerMaterialsInner",
      "file": "ListMaterials200ResponsePrinterTypesInnerMaterialsInner.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "label",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "description",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "material_settings",
          "type": "List[ListMaterials200ResponsePrinterTypesInnerMaterialsInnerMaterialSettingsInner]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.list_materials200_response_printer_types_inner_materials_inner import ListMaterials200ResponsePrinterTypesInnerMaterialsInner\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ListMaterials200ResponsePrinterTypesInnerMaterialsInner from a JSON string\nlist_materials200_response_printer_types_inner_materials_inner_instance = ListMaterials200ResponsePrinterTypesInnerMaterialsInner.from_json(json)\n# print the JSON string representation of the object\nprint(ListMaterials200ResponsePrinterTypesInnerMaterialsInner.to_json())\n\n# convert the object into a dict\nlist_materials200_response_printer_types_inner_materials_inner_dict = list_materials200_response_printer_types_inner_materials_inner_instance.to_dict()\n# create an instance of ListMaterials200ResponsePrinterTypesInnerMaterialsInner from a dict\nlist_materials200_response_printer_types_inner_materials_inner_from_dict = ListMaterials200ResponsePrinterTypesInnerMaterialsInner.from_dict(list_materials200_response_printer_types_inner_materials_inner_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ListMaterials200ResponsePrinterTypesInnerMaterialsInnerMaterialSettingsInner",
      "file": "ListMaterials200ResponsePrinterTypesInnerMaterialsInnerMaterialSettingsInner.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "label",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "scene_settings",
          "type": "SceneTypeModel",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.list_materials200_response_printer_types_inner_materials_inner_material_settings_inner import ListMaterials200ResponsePrinterTypesInnerMaterialsInnerMaterialSettingsInner\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ListMaterials200ResponsePrinterTypesInnerMaterialsInnerMaterialSettingsInner from a JSON string\nlist_materials200_response_printer_types_inner_materials_inner_material_settings_inner_instance = ListMaterials200ResponsePrinterTypesInnerMaterialsInnerMaterialSettingsInner.from_json(json)\n# print the JSON string representation of the object\nprint(ListMaterials200ResponsePrinterTypesInnerMaterialsInnerMaterialSettingsInner.to_json())\n\n# convert the object into a dict\nlist_materials200_response_printer_types_inner_materials_inner_material_settings_inner_dict = list_materials200_response_printer_types_inner_materials_inner_material_settings_inner_instance.to_dict()\n# create an instance of ListMaterials200ResponsePrinterTypesInnerMaterialsInnerMaterialSettingsInner from a dict\nlist_materials200_response_printer_types_inner_materials_inner_material_settings_inner_from_dict = ListMaterials200ResponsePrinterTypesInnerMaterialsInnerMaterialSettingsInner.from_dict(list_materials200_response_printer_types_inner_materials_inner_material_settings_inner_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "LoadFormFileRequest",
      "file": "LoadFormFileRequest.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "file",
          "type": "str",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.load_form_file_request import LoadFormFileRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of LoadFormFileRequest from a JSON string\nload_form_file_request_instance = LoadFormFileRequest.from_json(json)\n# print the JSON string representation of the object\nprint(LoadFormFileRequest.to_json())\n\n# convert the object into a dict\nload_form_file_request_dict = load_form_file_request_instance.to_dict()\n# create an instance of LoadFormFileRequest from a dict\nload_form_file_request_from_dict = LoadFormFileRequest.from_dict(load_form_file_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "LockModel",
      "file": "LockModel.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": ""
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "LoginRequest",
      "file": "LoginRequest.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "username",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "password",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "access_token",
          "type": "str",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.login_request import LoginRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of LoginRequest from a JSON string\nlogin_request_instance = LoginRequest.from_json(json)\n# print the JSON string representation of the object\nprint(LoginRequest.to_json())\n\n# convert the object into a dict\nlogin_request_dict = login_request_instance.to_dict()\n# create an instance of LoginRequest from a dict\nlogin_request_from_dict = LoginRequest.from_dict(login_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "Manual",
      "file": "Manual.md",
      "summary": "Model with 5 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "machine_type",
          "type": "str",
          "description": "The machine type of the scene",
          "notes": ""
        },
        {
          "name": "material_code",
          "type": "str",
          "description": "The material code of the scene",
          "notes": ""
        },
        {
          "name": "print_setting",
          "type": "str",
          "description": "The print setting of the scene",
          "notes": "[optional]"
        },
        {
          "name": "layer_thickness_mm",
          "type": "ManualLayerThicknessMm",
          "description": "",
          "notes": ""
        },
        {
          "name": "custom_print_setting_id",
          "type": "str",
          "description": "The ID of the custom print setting used, if any.",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.manual import Manual\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of Manual from a JSON string\nmanual_instance = Manual.from_json(json)\n# print the JSON string representation of the object\nprint(Manual.to_json())\n\n# convert the object into a dict\nmanual_dict = manual_instance.to_dict()\n# create an instance of Manual from a dict\nmanual_from_dict = Manual.from_dict(manual_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ManualLayerThicknessMm",
      "file": "ManualLayerThicknessMm.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": "from formlabs_local_api.models.manual_layer_thickness_mm import ManualLayerThicknessMm\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ManualLayerThicknessMm from a JSON string\nmanual_layer_thickness_mm_instance = ManualLayerThicknessMm.from_json(json)\n# print the JSON string representation of the object\nprint(ManualLayerThicknessMm.to_json())\n\n# convert the object into a dict\nmanual_layer_thickness_mm_dict = manual_layer_thickness_mm_instance.to_dict()\n# create an instance of ManualLayerThicknessMm from a dict\nmanual_layer_thickness_mm_from_dict = ManualLayerThicknessMm.from_dict(manual_layer_thickness_mm_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "MaterialUsageModel",
      "file": "MaterialUsageModel.md",
      "summary": "Model with 7 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "volume_ml",
          "type": "float",
          "description": "The total volume of models and supports in the scene",
          "notes": ""
        },
        {
          "name": "unsupported_volume_ml",
          "type": "float",
          "description": "The total volume of all models in the scene, not including their supports",
          "notes": ""
        },
        {
          "name": "total_powder_ml",
          "type": "float",
          "description": "",
          "notes": ""
        },
        {
          "name": "total_powder_kg",
          "type": "float",
          "description": "",
          "notes": ""
        },
        {
          "name": "total_sintered_powder_ml",
          "type": "float",
          "description": "",
          "notes": ""
        },
        {
          "name": "total_sintered_powder_kg",
          "type": "float",
          "description": "",
          "notes": ""
        },
        {
          "name": "mass_packing_density",
          "type": "float",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.material_usage_model import MaterialUsageModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of MaterialUsageModel from a JSON string\nmaterial_usage_model_instance = MaterialUsageModel.from_json(json)\n# print the JSON string representation of the object\nprint(MaterialUsageModel.to_json())\n\n# convert the object into a dict\nmaterial_usage_model_dict = material_usage_model_instance.to_dict()\n# create an instance of MaterialUsageModel from a dict\nmaterial_usage_model_from_dict = MaterialUsageModel.from_dict(material_usage_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ModelProperties",
      "file": "ModelProperties.md",
      "summary": "Model with 14 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "The unique identifier of the model",
          "notes": "[optional]"
        },
        {
          "name": "name",
          "type": "str",
          "description": "The name of the model used within job preparation.",
          "notes": "[optional]"
        },
        {
          "name": "position",
          "type": "ScenePositionModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "orientation",
          "type": "EulerAnglesModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "scale",
          "type": "float",
          "description": "The scale factor to apply to the model",
          "notes": "[optional]"
        },
        {
          "name": "units",
          "type": "UnitsModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "bounding_box",
          "type": "ModelPropertiesBoundingBox",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "original_file",
          "type": "str",
          "description": "The original file path of the model",
          "notes": "[optional]"
        },
        {
          "name": "visible",
          "type": "bool",
          "description": "Whether the model is visible in the scene",
          "notes": "[optional]"
        },
        {
          "name": "has_supports",
          "type": "bool",
          "description": "Whether the model has supports",
          "notes": "[optional]"
        },
        {
          "name": "in_bounds",
          "type": "bool",
          "description": "Whether the model is within the build volume",
          "notes": "[optional]"
        },
        {
          "name": "raw_mesh_hash",
          "type": "str",
          "description": "The hash of the raw mesh data",
          "notes": "[optional]"
        },
        {
          "name": "canonical_model_hash",
          "type": "str",
          "description": "The hash of the mesh data and its transform (position, orientation, and scale)",
          "notes": "[optional]"
        },
        {
          "name": "lock",
          "type": "LockModel",
          "description": "",
          "notes": "[optional] [default to LockModel.FREE]"
        }
      ],
      "example": "from formlabs_local_api.models.model_properties import ModelProperties\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ModelProperties from a JSON string\nmodel_properties_instance = ModelProperties.from_json(json)\n# print the JSON string representation of the object\nprint(ModelProperties.to_json())\n\n# convert the object into a dict\nmodel_properties_dict = model_properties_instance.to_dict()\n# create an instance of ModelProperties from a dict\nmodel_properties_from_dict = ModelProperties.from_dict(model_properties_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ModelPropertiesBoundingBox",
      "file": "ModelPropertiesBoundingBox.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "min_corner",
          "type": "ScenePositionModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "max_corner",
          "type": "ScenePositionModel",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.model_properties_bounding_box import ModelPropertiesBoundingBox\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ModelPropertiesBoundingBox from a JSON string\nmodel_properties_bounding_box_instance = ModelPropertiesBoundingBox.from_json(json)\n# print the JSON string representation of the object\nprint(ModelPropertiesBoundingBox.to_json())\n\n# convert the object into a dict\nmodel_properties_bounding_box_dict = model_properties_bounding_box_instance.to_dict()\n# create an instance of ModelPropertiesBoundingBox from a dict\nmodel_properties_bounding_box_from_dict = ModelPropertiesBoundingBox.from_dict(model_properties_bounding_box_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ModelsSelectionModel",
      "file": "ModelsSelectionModel.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": "from formlabs_local_api.models.models_selection_model import ModelsSelectionModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ModelsSelectionModel from a JSON string\nmodels_selection_model_instance = ModelsSelectionModel.from_json(json)\n# print the JSON string representation of the object\nprint(ModelsSelectionModel.to_json())\n\n# convert the object into a dict\nmodels_selection_model_dict = models_selection_model_instance.to_dict()\n# create an instance of ModelsSelectionModel from a dict\nmodels_selection_model_from_dict = ModelsSelectionModel.from_dict(models_selection_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.ModifyingASceneApi",
      "file": "ModifyingASceneApi.md",
      "summary": "Methods: add_drain_holes, auto_layout, auto_orient, auto_pack, ...",
      "methods": [
        {
          "name": "add_drain_holes",
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
              "type": "AddDrainHolesRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.add_drain_holes200_response import AddDrainHoles200Response\nfrom formlabs_local_api.models.add_drain_holes_request import AddDrainHolesRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    add_drain_holes_request = formlabs_local_api.AddDrainHolesRequest() # AddDrainHolesRequest | Drain hole parameters\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Add Drain Holes\n        api_response = api_instance.add_drain_holes(scene_id, add_drain_holes_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->add_drain_holes:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->add_drain_holes: %s\\n\" % e)"
        },
        {
          "name": "auto_layout",
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
              "type": "AutoLayoutRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.auto_layout_request import AutoLayoutRequest\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    auto_layout_request = {\"models\":\"ALL\",\"model_spacing_mm\":1.0,\"allow_overlapping_supports\":false,\"lock_rotation\":false,\"build_platform_2_optimized\":false} # AutoLayoutRequest | Models to run the auto layout operation on\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Auto Layout\n        api_response = api_instance.auto_layout(scene_id, auto_layout_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->auto_layout:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->auto_layout: %s\\n\" % e)"
        },
        {
          "name": "auto_orient",
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
              "type": "AutoOrientRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.auto_orient_request import AutoOrientRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    auto_orient_request = {\"models\":\"ALL\"} # AutoOrientRequest | Models to run the auto orient operation on\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Auto Orient\n        api_instance.auto_orient(scene_id, auto_orient_request, var_async=var_async)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->auto_orient: %s\\n\" % e)"
        },
        {
          "name": "auto_pack",
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
              "type": "AutoPackRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.auto_pack_request import AutoPackRequest\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    auto_pack_request = formlabs_local_api.AutoPackRequest() # AutoPackRequest | Auto pack parameters\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Auto Pack\n        api_response = api_instance.auto_pack(scene_id, auto_pack_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->auto_pack:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->auto_pack: %s\\n\" % e)"
        },
        {
          "name": "auto_support",
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
              "type": "AutoSupportRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.auto_support_request import AutoSupportRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    auto_support_request = {\"models\":\"ALL\"} # AutoSupportRequest | Models to run the auto support operation on\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Auto Support\n        api_instance.auto_support(scene_id, auto_support_request, var_async=var_async)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->auto_support: %s\\n\" % e)"
        },
        {
          "name": "create_default_scene",
          "signature": "SceneModel create_default_scene(scene_type_model)",
          "description": "Create Default Scene\nCreate a default scene",
          "params": [
            {
              "name": "scene_type_model",
              "type": "SceneTypeModel",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.models.scene_type_model import SceneTypeModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_type_model = {\"machine_type\":\"FORM-4-0\",\"material_code\":\"FLGPBK05\",\"print_setting\":\"DEFAULT\",\"layer_thickness_mm\":0.025} # SceneTypeModel | Create a default scene with a given printing setup. For a full list of possible settings, call the GET /list-materials/ endpoint \n\n    try:\n        # Create Default Scene\n        api_response = api_instance.create_default_scene(scene_type_model)\n        print(\"The response of ModifyingASceneApi->create_default_scene:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->create_default_scene: %s\\n\" % e)"
        },
        {
          "name": "create_scene",
          "signature": "SceneModel create_scene(scene_type_model)",
          "description": "Create Scene\nCreate a new scene",
          "params": [
            {
              "name": "scene_type_model",
              "type": "SceneTypeModel",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.models.scene_type_model import SceneTypeModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_type_model = {\"machine_type\":\"FORM-4-0\",\"material_code\":\"FLGPBK05\",\"print_setting\":\"DEFAULT\",\"layer_thickness_mm\":0.025} # SceneTypeModel | Create a scene with a given printing setup. For a full list of possible settings, call the GET /list-materials/ endpoint \n\n    try:\n        # Create Scene\n        api_response = api_instance.create_scene(scene_type_model)\n        print(\"The response of ModifyingASceneApi->create_scene:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->create_scene: %s\\n\" % e)"
        },
        {
          "name": "delete_default_scene",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n\n    try:\n        # Delete Default Scene\n        api_response = api_instance.delete_default_scene()\n        print(\"The response of ModifyingASceneApi->delete_default_scene:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->delete_default_scene: %s\\n\" % e)"
        },
        {
          "name": "delete_model",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n\n    try:\n        # Delete model\n        api_instance.delete_model(id, scene_id)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->delete_model: %s\\n\" % e)"
        },
        {
          "name": "delete_scene",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n\n    try:\n        # Delete Scene\n        api_response = api_instance.delete_scene(scene_id)\n        print(\"The response of ModifyingASceneApi->delete_scene:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->delete_scene: %s\\n\" % e)"
        },
        {
          "name": "duplicate_model",
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
              "type": "DuplicateModelRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.duplicate_model_request import DuplicateModelRequest\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    duplicate_model_request = formlabs_local_api.DuplicateModelRequest() # DuplicateModelRequest | \n\n    try:\n        # Duplicate model\n        api_response = api_instance.duplicate_model(id, scene_id, duplicate_model_request)\n        print(\"The response of ModifyingASceneApi->duplicate_model:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->duplicate_model: %s\\n\" % e)"
        },
        {
          "name": "hollow_model",
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
              "type": "HollowModelRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.hollow_model200_response import HollowModel200Response\nfrom formlabs_local_api.models.hollow_model_request import HollowModelRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    hollow_model_request = formlabs_local_api.HollowModelRequest() # HollowModelRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Hollow Model\n        api_response = api_instance.hollow_model(scene_id, hollow_model_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->hollow_model:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->hollow_model: %s\\n\" % e)"
        },
        {
          "name": "import_model",
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
              "type": "ImportModelRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.import_model_request import ImportModelRequest\nfrom formlabs_local_api.models.model_properties import ModelProperties\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    import_model_request = {\"file\":\"C:\\\\Users\\\\user\\\\Desktop\\\\test.stl\"} # ImportModelRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Import model\n        api_response = api_instance.import_model(scene_id, import_model_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->import_model:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->import_model: %s\\n\" % e)"
        },
        {
          "name": "label_part",
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
              "type": "LabelPartRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.hollow_model200_response import HollowModel200Response\nfrom formlabs_local_api.models.label_part_request import LabelPartRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    label_part_request = formlabs_local_api.LabelPartRequest() # LabelPartRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Label Part\n        api_response = api_instance.label_part(scene_id, label_part_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->label_part:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->label_part: %s\\n\" % e)"
        },
        {
          "name": "load_form_file",
          "signature": "SceneModel load_form_file(load_form_file_request, var_async=var_async)",
          "description": "Load .form file\nLoad a .form file and create a new scene from it",
          "params": [
            {
              "name": "load_form_file_request",
              "type": "LoadFormFileRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.load_form_file_request import LoadFormFileRequest\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    load_form_file_request = {\"file\":\"C:\\\\Users\\\\user\\\\Desktop\\\\test.form\"} # LoadFormFileRequest | Full path to the .form file to load\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Load .form file\n        api_response = api_instance.load_form_file(load_form_file_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->load_form_file:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->load_form_file: %s\\n\" % e)"
        },
        {
          "name": "pack_and_cage",
          "signature": "SceneModel pack_and_cage(pack_and_cage_request)",
          "description": "Pack and Cage\nAutomatically arrange models in the build volume and create a cage around them. Only applies to SLS-type scenes like the Fuse 1+.",
          "params": [
            {
              "name": "pack_and_cage_request",
              "type": "PackAndCageRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.pack_and_cage_request import PackAndCageRequest\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    pack_and_cage_request = formlabs_local_api.PackAndCageRequest() # PackAndCageRequest | Auto pack parameters\n\n    try:\n        # Pack and Cage\n        api_response = api_instance.pack_and_cage(pack_and_cage_request)\n        print(\"The response of ModifyingASceneApi->pack_and_cage:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->pack_and_cage: %s\\n\" % e)"
        },
        {
          "name": "replace_model",
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
              "type": "ReplaceModelRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.replace_model200_response import ReplaceModel200Response\nfrom formlabs_local_api.models.replace_model_request import ReplaceModelRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    replace_model_request = formlabs_local_api.ReplaceModelRequest() # ReplaceModelRequest | \n\n    try:\n        # Replace model\n        api_response = api_instance.replace_model(id, scene_id, replace_model_request)\n        print(\"The response of ModifyingASceneApi->replace_model:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->replace_model: %s\\n\" % e)"
        },
        {
          "name": "scan_to_model",
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
              "type": "ScanToModelRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scan_to_model200_response import ScanToModel200Response\nfrom formlabs_local_api.models.scan_to_model_request import ScanToModelRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    scan_to_model_request = formlabs_local_api.ScanToModelRequest() # ScanToModelRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Scan to model\n        api_response = api_instance.scan_to_model(scene_id, scan_to_model_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->scan_to_model:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->scan_to_model: %s\\n\" % e)"
        },
        {
          "name": "update_model",
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
              "type": "UpdateModelRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.update_model_request import UpdateModelRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    update_model_request = {\"position\":{\"x\":10,\"y\":1,\"z\":2}} # UpdateModelRequest | Model properties to update\n\n    try:\n        # Update model\n        api_instance.update_model(id, scene_id, update_model_request)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->update_model: %s\\n\" % e)"
        },
        {
          "name": "update_scene",
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
              "type": "SceneTypeModel",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.models.scene_type_model import SceneTypeModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    scene_type_model = {\"machine_type\":\"FORM-4-0\",\"material_code\":\"FLGPBK05\",\"print_setting\":\"DEFAULT\",\"layer_thickness_mm\":0.025} # SceneTypeModel | \n\n    try:\n        # Update Scene\n        api_response = api_instance.update_scene(scene_id, scene_type_model)\n        print(\"The response of ModifyingASceneApi->update_scene:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->update_scene: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.add_drain_holes200_response import AddDrainHoles200Response\nfrom formlabs_local_api.models.add_drain_holes_request import AddDrainHolesRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    add_drain_holes_request = formlabs_local_api.AddDrainHolesRequest() # AddDrainHolesRequest | Drain hole parameters\n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Add Drain Holes\n        api_response = api_instance.add_drain_holes(scene_id, add_drain_holes_request, var_async=var_async)\n        print(\"The response of ModifyingASceneApi->add_drain_holes:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneApi->add_drain_holes: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.ModifyingASceneDeprecatedApi",
      "file": "ModifyingASceneDeprecatedApi.md",
      "summary": "Methods: add_drain_holes_deprecated, auto_layout_deprecated, auto_orient_deprecated, auto_pack_deprecated, ...",
      "methods": [
        {
          "name": "add_drain_holes_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.add_drain_holes200_response import AddDrainHoles200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Add Drain Holes\n        api_response = api_instance.add_drain_holes_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->add_drain_holes_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->add_drain_holes_deprecated: %s\\n\" % e)"
        },
        {
          "name": "auto_layout_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Auto Layout\n        api_response = api_instance.auto_layout_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->auto_layout_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->auto_layout_deprecated: %s\\n\" % e)"
        },
        {
          "name": "auto_orient_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Auto Orient\n        api_instance.auto_orient_deprecated()\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->auto_orient_deprecated: %s\\n\" % e)"
        },
        {
          "name": "auto_pack_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Auto Pack\n        api_response = api_instance.auto_pack_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->auto_pack_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->auto_pack_deprecated: %s\\n\" % e)"
        },
        {
          "name": "auto_support_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Auto Support\n        api_instance.auto_support_deprecated()\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->auto_support_deprecated: %s\\n\" % e)"
        },
        {
          "name": "delete_model_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n\n    try:\n        # Delete model\n        api_instance.delete_model_deprecated(id)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->delete_model_deprecated: %s\\n\" % e)"
        },
        {
          "name": "duplicate_model_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n\n    try:\n        # Duplicate model\n        api_response = api_instance.duplicate_model_deprecated(id)\n        print(\"The response of ModifyingASceneDeprecatedApi->duplicate_model_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->duplicate_model_deprecated: %s\\n\" % e)"
        },
        {
          "name": "hollow_model_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.hollow_model200_response import HollowModel200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Hollow Model\n        api_response = api_instance.hollow_model_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->hollow_model_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->hollow_model_deprecated: %s\\n\" % e)"
        },
        {
          "name": "import_model_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.model_properties import ModelProperties\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Import model\n        api_response = api_instance.import_model_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->import_model_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->import_model_deprecated: %s\\n\" % e)"
        },
        {
          "name": "label_part_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.hollow_model200_response import HollowModel200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Label Part\n        api_response = api_instance.label_part_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->label_part_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->label_part_deprecated: %s\\n\" % e)"
        },
        {
          "name": "replace_model_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.replace_model200_response import ReplaceModel200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n\n    try:\n        # Replace model\n        api_response = api_instance.replace_model_deprecated(id)\n        print(\"The response of ModifyingASceneDeprecatedApi->replace_model_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->replace_model_deprecated: %s\\n\" % e)"
        },
        {
          "name": "scan_to_model_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scan_to_model200_response import ScanToModel200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Scan to model\n        api_response = api_instance.scan_to_model_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->scan_to_model_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->scan_to_model_deprecated: %s\\n\" % e)"
        },
        {
          "name": "update_model_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n    id = 'id_example' # str | The unique identifier of the model\n\n    try:\n        # Update model\n        api_instance.update_model_deprecated(id)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->update_model_deprecated: %s\\n\" % e)"
        },
        {
          "name": "update_scene_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.scene_model import SceneModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Update Scene\n        api_response = api_instance.update_scene_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->update_scene_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->update_scene_deprecated: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.add_drain_holes200_response import AddDrainHoles200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.ModifyingASceneDeprecatedApi(api_client)\n\n    try:\n        # Add Drain Holes\n        api_response = api_instance.add_drain_holes_deprecated()\n        print(\"The response of ModifyingASceneDeprecatedApi->add_drain_holes_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling ModifyingASceneDeprecatedApi->add_drain_holes_deprecated: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "OperationAcceptedModel",
      "file": "OperationAcceptedModel.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "operation_id",
          "type": "str",
          "description": "Randomly-generated UUID for this operation",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.operation_accepted_model import OperationAcceptedModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of OperationAcceptedModel from a JSON string\noperation_accepted_model_instance = OperationAcceptedModel.from_json(json)\n# print the JSON string representation of the object\nprint(OperationAcceptedModel.to_json())\n\n# convert the object into a dict\noperation_accepted_model_dict = operation_accepted_model_instance.to_dict()\n# create an instance of OperationAcceptedModel from a dict\noperation_accepted_model_from_dict = OperationAcceptedModel.from_dict(operation_accepted_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.OperationsApi",
      "file": "OperationsApi.md",
      "summary": "Methods: call_print, get_all_operations, get_operation",
      "methods": [
        {
          "name": "call_print",
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
              "type": "PrintRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.models.print_request import PrintRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.OperationsApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    print_request = {\"printer\":\"10.35.15.12\",\"job_name\":\"Test Job\"} # PrintRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Print\n        api_response = api_instance.call_print(scene_id, print_request, var_async=var_async)\n        print(\"The response of OperationsApi->call_print:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling OperationsApi->call_print: %s\\n\" % e)"
        },
        {
          "name": "get_all_operations",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_all_operations200_response import GetAllOperations200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.OperationsApi(api_client)\n\n    try:\n        # List All Operations\n        api_response = api_instance.get_all_operations()\n        print(\"The response of OperationsApi->get_all_operations:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling OperationsApi->get_all_operations: %s\\n\" % e)"
        },
        {
          "name": "get_operation",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_operation200_response import GetOperation200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.OperationsApi(api_client)\n    id = 'id_example' # str | The unique identifier of the operation.\n\n    try:\n        # Get Operation Status\n        api_response = api_instance.get_operation(id)\n        print(\"The response of OperationsApi->get_operation:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling OperationsApi->get_operation: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.models.print_request import PrintRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.OperationsApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    print_request = {\"printer\":\"10.35.15.12\",\"job_name\":\"Test Job\"} # PrintRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Print\n        api_response = api_instance.call_print(scene_id, print_request, var_async=var_async)\n        print(\"The response of OperationsApi->call_print:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling OperationsApi->call_print: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.OperationsDeprecatedApi",
      "file": "OperationsDeprecatedApi.md",
      "summary": "Methods: print_deprecated",
      "methods": [
        {
          "name": "print_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.OperationsDeprecatedApi(api_client)\n\n    try:\n        # Print\n        api_response = api_instance.print_deprecated()\n        print(\"The response of OperationsDeprecatedApi->print_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling OperationsDeprecatedApi->print_deprecated: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.OperationsDeprecatedApi(api_client)\n\n    try:\n        # Print\n        api_response = api_instance.print_deprecated()\n        print(\"The response of OperationsDeprecatedApi->print_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling OperationsDeprecatedApi->print_deprecated: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "OrientationModel",
      "file": "OrientationModel.md",
      "summary": "Model with 6 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "x",
          "type": "float",
          "description": "Rotation in degrees around the x axis (applied second)",
          "notes": ""
        },
        {
          "name": "y",
          "type": "float",
          "description": "Rotation in degrees around the y axis (applied last)",
          "notes": ""
        },
        {
          "name": "z",
          "type": "float",
          "description": "Rotation in degrees around the z axis (applied first)",
          "notes": ""
        },
        {
          "name": "linear",
          "type": "List[List[float]]",
          "description": "",
          "notes": ""
        },
        {
          "name": "z_direction",
          "type": "List[float]",
          "description": "3D unit vector in model space saying which piece of the model will point \\&quot;up\\&quot; in scene space.",
          "notes": ""
        },
        {
          "name": "x_direction",
          "type": "List[float]",
          "description": "3D unit vector in model space, perpendicular to Z direction, saying which piece of the model will point \\&quot;right\\&quot; in scene space.",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.orientation_model import OrientationModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of OrientationModel from a JSON string\norientation_model_instance = OrientationModel.from_json(json)\n# print the JSON string representation of the object\nprint(OrientationModel.to_json())\n\n# convert the object into a dict\norientation_model_dict = orientation_model_instance.to_dict()\n# create an instance of OrientationModel from a dict\norientation_model_from_dict = OrientationModel.from_dict(orientation_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "PackAndCageRequest",
      "file": "PackAndCageRequest.md",
      "summary": "Model with 11 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "models",
          "type": "ModelsSelectionModel",
          "description": "A list of models to pack and cage",
          "notes": ""
        },
        {
          "name": "packing_type",
          "type": "PackingTypeModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "cage_label",
          "type": "str",
          "description": "The label engraved on the part cage.",
          "notes": "[optional]"
        },
        {
          "name": "generate_mesh_label",
          "type": "bool",
          "description": "Whether or not to physically emboss the label of the part cage",
          "notes": "[optional]"
        },
        {
          "name": "model_spacing_mm",
          "type": "float",
          "description": "Minimum distance between models in the cage.",
          "notes": "[optional]"
        },
        {
          "name": "bar_spacing_mm",
          "type": "float",
          "description": "Space between the bars of the cage",
          "notes": "[optional]"
        },
        {
          "name": "bar_thickness_mm",
          "type": "float",
          "description": "The space between the bars of the cage",
          "notes": "[optional]"
        },
        {
          "name": "bar_width_mm",
          "type": "float",
          "description": "Width of the bars of the cage. Defaults to the same as bar_thickness_mm",
          "notes": "[optional]"
        },
        {
          "name": "distance_to_cage_mm",
          "type": "float",
          "description": "Extra space between the models and the cage walls",
          "notes": "[optional]"
        },
        {
          "name": "enable_round_edges",
          "type": "bool",
          "description": "Rounds the edges of external cage corners",
          "notes": "[optional] [default to False]"
        },
        {
          "name": "enable_square_bars",
          "type": "bool",
          "description": "Generate square bars for the cage",
          "notes": "[optional] [default to True]"
        }
      ],
      "example": "from formlabs_local_api.models.pack_and_cage_request import PackAndCageRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PackAndCageRequest from a JSON string\npack_and_cage_request_instance = PackAndCageRequest.from_json(json)\n# print the JSON string representation of the object\nprint(PackAndCageRequest.to_json())\n\n# convert the object into a dict\npack_and_cage_request_dict = pack_and_cage_request_instance.to_dict()\n# create an instance of PackAndCageRequest from a dict\npack_and_cage_request_from_dict = PackAndCageRequest.from_dict(pack_and_cage_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "PackingTypeModel",
      "file": "PackingTypeModel.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "packing_type",
          "type": "str",
          "description": "The optimization strategy used for packing. Minimize the height or volume of the resulting cage, or skip packing entirely",
          "notes": "[optional] [default to 'PACK_VOLUME']"
        }
      ],
      "example": "from formlabs_local_api.models.packing_type_model import PackingTypeModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PackingTypeModel from a JSON string\npacking_type_model_instance = PackingTypeModel.from_json(json)\n# print the JSON string representation of the object\nprint(PackingTypeModel.to_json())\n\n# convert the object into a dict\npacking_type_model_dict = packing_type_model_instance.to_dict()\n# create an instance of PackingTypeModel from a dict\npacking_type_model_from_dict = PackingTypeModel.from_dict(packing_type_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "Print200Response",
      "file": "Print200Response.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "job_id",
          "type": "str",
          "description": "ID of the uploaded job",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.print200_response import Print200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of Print200Response from a JSON string\nprint200_response_instance = Print200Response.from_json(json)\n# print the JSON string representation of the object\nprint(Print200Response.to_json())\n\n# convert the object into a dict\nprint200_response_dict = print200_response_instance.to_dict()\n# create an instance of Print200Response from a dict\nprint200_response_from_dict = Print200Response.from_dict(print200_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "PrintRequest",
      "file": "PrintRequest.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "printer",
          "type": "str",
          "description": "Printer serial name, IP address, or Fleet Control Queue ID",
          "notes": ""
        },
        {
          "name": "job_name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "find_printer_timeout_seconds",
          "type": "int",
          "description": "Number of seconds to wait to find the given printer.",
          "notes": "[optional] [default to 30]"
        },
        {
          "name": "print_now",
          "type": "bool",
          "description": "If true, the job should be printed immediately if the printer&#39;s \\&quot;ready_to_print_now\\&quot; status is true. Attempting to print now on a printer that does not support it will result in an error. If false, the job should be uploaded to the printer&#39;s local queue. Not including this value will default to printing now if the printer is in a ready state, and queueing the job otherwise.",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.print_request import PrintRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PrintRequest from a JSON string\nprint_request_instance = PrintRequest.from_json(json)\n# print the JSON string representation of the object\nprint(PrintRequest.to_json())\n\n# convert the object into a dict\nprint_request_dict = print_request_instance.to_dict()\n# create an instance of PrintRequest from a dict\nprint_request_from_dict = PrintRequest.from_dict(print_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.PrintSettingsApi",
      "file": "PrintSettingsApi.md",
      "summary": "Methods: list_materials",
      "methods": [
        {
          "name": "list_materials",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.list_materials200_response import ListMaterials200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.PrintSettingsApi(api_client)\n\n    try:\n        # List Materials\n        api_response = api_instance.list_materials()\n        print(\"The response of PrintSettingsApi->list_materials:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintSettingsApi->list_materials: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.list_materials200_response import ListMaterials200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.PrintSettingsApi(api_client)\n\n    try:\n        # List Materials\n        api_response = api_instance.list_materials()\n        print(\"The response of PrintSettingsApi->list_materials:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintSettingsApi->list_materials: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "PrintValidationResultModel",
      "file": "PrintValidationResultModel.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "per_model_results",
          "type": "Dict[str, PrintValidationResultModelPerModelResultsValue]",
          "description": "A map of model IDs to their print validation results.",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.print_validation_result_model import PrintValidationResultModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PrintValidationResultModel from a JSON string\nprint_validation_result_model_instance = PrintValidationResultModel.from_json(json)\n# print the JSON string representation of the object\nprint(PrintValidationResultModel.to_json())\n\n# convert the object into a dict\nprint_validation_result_model_dict = print_validation_result_model_instance.to_dict()\n# create an instance of PrintValidationResultModel from a dict\nprint_validation_result_model_from_dict = PrintValidationResultModel.from_dict(print_validation_result_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "PrintValidationResultModelPerModelResultsValue",
      "file": "PrintValidationResultModelPerModelResultsValue.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "cups",
          "type": "int",
          "description": "The number of cups in the model",
          "notes": "[optional]"
        },
        {
          "name": "unsupported_minima",
          "type": "int",
          "description": "The number of unsupported minima in the model",
          "notes": "[optional]"
        },
        {
          "name": "undersupported",
          "type": "bool",
          "description": "Whether the model is undersupported",
          "notes": "[optional]"
        },
        {
          "name": "has_seamline",
          "type": "bool",
          "description": "Whether the model has a seamline",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.print_validation_result_model_per_model_results_value import PrintValidationResultModelPerModelResultsValue\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PrintValidationResultModelPerModelResultsValue from a JSON string\nprint_validation_result_model_per_model_results_value_instance = PrintValidationResultModelPerModelResultsValue.from_json(json)\n# print the JSON string representation of the object\nprint(PrintValidationResultModelPerModelResultsValue.to_json())\n\n# convert the object into a dict\nprint_validation_result_model_per_model_results_value_dict = print_validation_result_model_per_model_results_value_instance.to_dict()\n# create an instance of PrintValidationResultModelPerModelResultsValue from a dict\nprint_validation_result_model_per_model_results_value_from_dict = PrintValidationResultModelPerModelResultsValue.from_dict(print_validation_result_model_per_model_results_value_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.PrintingApi",
      "file": "PrintingApi.md",
      "summary": "Methods: call_print",
      "methods": [
        {
          "name": "call_print",
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
              "type": "PrintRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.models.print_request import PrintRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.PrintingApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    print_request = {\"printer\":\"10.35.15.12\",\"job_name\":\"Test Job\"} # PrintRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Print\n        api_response = api_instance.call_print(scene_id, print_request, var_async=var_async)\n        print(\"The response of PrintingApi->call_print:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintingApi->call_print: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.models.print_request import PrintRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.PrintingApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    print_request = {\"printer\":\"10.35.15.12\",\"job_name\":\"Test Job\"} # PrintRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Print\n        api_response = api_instance.call_print(scene_id, print_request, var_async=var_async)\n        print(\"The response of PrintingApi->call_print:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintingApi->call_print: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.PrintingDeprecatedApi",
      "file": "PrintingDeprecatedApi.md",
      "summary": "Methods: print_deprecated",
      "methods": [
        {
          "name": "print_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.PrintingDeprecatedApi(api_client)\n\n    try:\n        # Print\n        api_response = api_instance.print_deprecated()\n        print(\"The response of PrintingDeprecatedApi->print_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintingDeprecatedApi->print_deprecated: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.PrintingDeprecatedApi(api_client)\n\n    try:\n        # Print\n        api_response = api_instance.print_deprecated()\n        print(\"The response of PrintingDeprecatedApi->print_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintingDeprecatedApi->print_deprecated: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.RemoteAccessApi",
      "file": "RemoteAccessApi.md",
      "summary": "Methods: call_print, discover_devices, get_device, get_devices, ...",
      "methods": [
        {
          "name": "call_print",
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
              "type": "PrintRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.models.print_request import PrintRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    print_request = {\"printer\":\"10.35.15.12\",\"job_name\":\"Test Job\"} # PrintRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Print\n        api_response = api_instance.call_print(scene_id, print_request, var_async=var_async)\n        print(\"The response of RemoteAccessApi->call_print:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->call_print: %s\\n\" % e)"
        },
        {
          "name": "discover_devices",
          "signature": "DiscoverDevices200Response discover_devices(discover_devices_request, var_async=var_async)",
          "description": "Discover Devices\nDiscover new devices on the network",
          "params": [
            {
              "name": "discover_devices_request",
              "type": "DiscoverDevicesRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.discover_devices200_response import DiscoverDevices200Response\nfrom formlabs_local_api.models.discover_devices_request import DiscoverDevicesRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n    discover_devices_request = {\"timeout_seconds\":10} # DiscoverDevicesRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Discover Devices\n        api_response = api_instance.discover_devices(discover_devices_request, var_async=var_async)\n        print(\"The response of RemoteAccessApi->discover_devices:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->discover_devices: %s\\n\" % e)"
        },
        {
          "name": "get_device",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.device_status_model import DeviceStatusModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n    id = 'id_example' # str | The unique identifier of the printer\n\n    try:\n        # Get Device\n        api_response = api_instance.get_device(id)\n        print(\"The response of RemoteAccessApi->get_device:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->get_device: %s\\n\" % e)"
        },
        {
          "name": "get_devices",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.get_devices200_response import GetDevices200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n    can_print = True # bool | If true, only devices that can receive prints will be returned. (optional)\n\n    try:\n        # Get Devices\n        api_response = api_instance.get_devices(can_print=can_print)\n        print(\"The response of RemoteAccessApi->get_devices:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->get_devices: %s\\n\" % e)"
        },
        {
          "name": "get_user",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.user_information_model import UserInformationModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n\n    try:\n        # Get logged in user information\n        api_response = api_instance.get_user()\n        print(\"The response of RemoteAccessApi->get_user:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->get_user: %s\\n\" % e)"
        },
        {
          "name": "login",
          "signature": "WebAuthTokensModel login(login_request)",
          "description": "Login\nLog in to Formlabs Web Services using an existing formlabs.com account.",
          "params": [
            {
              "name": "login_request",
              "type": "LoginRequest",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.login_request import LoginRequest\nfrom formlabs_local_api.models.web_auth_tokens_model import WebAuthTokensModel\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n    login_request = {\"username\":\"username\",\"password\":\"password\"} # LoginRequest | User credentials\n\n    try:\n        # Login\n        api_response = api_instance.login(login_request)\n        print(\"The response of RemoteAccessApi->login:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->login: %s\\n\" % e)"
        },
        {
          "name": "logout",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n\n    try:\n        # Log out\n        api_instance.logout()\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->logout: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.models.print_request import PrintRequest\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessApi(api_client)\n    scene_id = 'scene_id_example' # str | The unique identifier of the scene\n    print_request = {\"printer\":\"10.35.15.12\",\"job_name\":\"Test Job\"} # PrintRequest | \n    var_async = True # bool | Whether to run the operation asynchronously (optional)\n\n    try:\n        # Print\n        api_response = api_instance.call_print(scene_id, print_request, var_async=var_async)\n        print(\"The response of RemoteAccessApi->call_print:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessApi->call_print: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "API class",
      "title": "formlabs_local_api.RemoteAccessDeprecatedApi",
      "file": "RemoteAccessDeprecatedApi.md",
      "summary": "Methods: print_deprecated",
      "methods": [
        {
          "name": "print_deprecated",
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
          ],
          "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessDeprecatedApi(api_client)\n\n    try:\n        # Print\n        api_response = api_instance.print_deprecated()\n        print(\"The response of RemoteAccessDeprecatedApi->print_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessDeprecatedApi->print_deprecated: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_local_api\nfrom formlabs_local_api.models.print200_response import Print200Response\nfrom formlabs_local_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to http://localhost:44388\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_local_api.Configuration(\n    host = \"http://localhost:44388\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_local_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_local_api.RemoteAccessDeprecatedApi(api_client)\n\n    try:\n        # Print\n        api_response = api_instance.print_deprecated()\n        print(\"The response of RemoteAccessDeprecatedApi->print_deprecated:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling RemoteAccessDeprecatedApi->print_deprecated: %s\\n\" % e)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "RepairBehaviorModel",
      "file": "RepairBehaviorModel.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": ""
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ReplaceModel200Response",
      "file": "ReplaceModel200Response.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "warnings",
          "type": "List[str]",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "model_properties",
          "type": "ModelProperties",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.replace_model200_response import ReplaceModel200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ReplaceModel200Response from a JSON string\nreplace_model200_response_instance = ReplaceModel200Response.from_json(json)\n# print the JSON string representation of the object\nprint(ReplaceModel200Response.to_json())\n\n# convert the object into a dict\nreplace_model200_response_dict = replace_model200_response_instance.to_dict()\n# create an instance of ReplaceModel200Response from a dict\nreplace_model200_response_from_dict = ReplaceModel200Response.from_dict(replace_model200_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ReplaceModelRequest",
      "file": "ReplaceModelRequest.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "file",
          "type": "str",
          "description": "Full path to the file to load",
          "notes": "[optional]"
        },
        {
          "name": "repair_behavior",
          "type": "RepairBehaviorModel",
          "description": "",
          "notes": "[optional] [default to RepairBehaviorModel.ERROR]"
        }
      ],
      "example": "from formlabs_local_api.models.replace_model_request import ReplaceModelRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ReplaceModelRequest from a JSON string\nreplace_model_request_instance = ReplaceModelRequest.from_json(json)\n# print the JSON string representation of the object\nprint(ReplaceModelRequest.to_json())\n\n# convert the object into a dict\nreplace_model_request_dict = replace_model_request_instance.to_dict()\n# create an instance of ReplaceModelRequest from a dict\nreplace_model_request_from_dict = ReplaceModelRequest.from_dict(replace_model_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "SLA",
      "file": "SLA.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "volume_ml",
          "type": "float",
          "description": "The total volume of models and supports in the scene",
          "notes": ""
        },
        {
          "name": "unsupported_volume_ml",
          "type": "float",
          "description": "The total volume of all models in the scene, not including their supports",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.sla import SLA\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of SLA from a JSON string\nsla_instance = SLA.from_json(json)\n# print the JSON string representation of the object\nprint(SLA.to_json())\n\n# convert the object into a dict\nsla_dict = sla_instance.to_dict()\n# create an instance of SLA from a dict\nsla_from_dict = SLA.from_dict(sla_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "SLAPrinterTypes",
      "file": "SLAPrinterTypes.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "total_print_time_s",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "preprint_time_s",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "printing_time_s",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.sla_printer_types import SLAPrinterTypes\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of SLAPrinterTypes from a JSON string\nsla_printer_types_instance = SLAPrinterTypes.from_json(json)\n# print the JSON string representation of the object\nprint(SLAPrinterTypes.to_json())\n\n# convert the object into a dict\nsla_printer_types_dict = sla_printer_types_instance.to_dict()\n# create an instance of SLAPrinterTypes from a dict\nsla_printer_types_from_dict = SLAPrinterTypes.from_dict(sla_printer_types_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "SLS",
      "file": "SLS.md",
      "summary": "Model with 5 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "total_powder_ml",
          "type": "float",
          "description": "",
          "notes": ""
        },
        {
          "name": "total_powder_kg",
          "type": "float",
          "description": "",
          "notes": ""
        },
        {
          "name": "total_sintered_powder_ml",
          "type": "float",
          "description": "",
          "notes": ""
        },
        {
          "name": "total_sintered_powder_kg",
          "type": "float",
          "description": "",
          "notes": ""
        },
        {
          "name": "mass_packing_density",
          "type": "float",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.sls import SLS\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of SLS from a JSON string\nsls_instance = SLS.from_json(json)\n# print the JSON string representation of the object\nprint(SLS.to_json())\n\n# convert the object into a dict\nsls_dict = sls_instance.to_dict()\n# create an instance of SLS from a dict\nsls_from_dict = SLS.from_dict(sls_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "SLSPrinterTypes",
      "file": "SLSPrinterTypes.md",
      "summary": "Model with 5 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "total_print_time_s",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "preprint_time_s",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "printing_time_s",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "cool_to_removal_time_s",
          "type": "float",
          "description": "Time it takes to cool the build chamber to around 100°C when it can be removed from the printer.",
          "notes": "[optional]"
        },
        {
          "name": "additional_cool_to_room_temp_time_s",
          "type": "float",
          "description": "Time it takes to cool the build from around 100°C to nearly room temperature while inside of the printer.",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.sls_printer_types import SLSPrinterTypes\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of SLSPrinterTypes from a JSON string\nsls_printer_types_instance = SLSPrinterTypes.from_json(json)\n# print the JSON string representation of the object\nprint(SLSPrinterTypes.to_json())\n\n# convert the object into a dict\nsls_printer_types_dict = sls_printer_types_instance.to_dict()\n# create an instance of SLSPrinterTypes from a dict\nsls_printer_types_from_dict = SLSPrinterTypes.from_dict(sls_printer_types_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "SaveFpsFileRequest",
      "file": "SaveFpsFileRequest.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "file",
          "type": "str",
          "description": "The file path to save the .fps file to",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.save_fps_file_request import SaveFpsFileRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of SaveFpsFileRequest from a JSON string\nsave_fps_file_request_instance = SaveFpsFileRequest.from_json(json)\n# print the JSON string representation of the object\nprint(SaveFpsFileRequest.to_json())\n\n# convert the object into a dict\nsave_fps_file_request_dict = save_fps_file_request_instance.to_dict()\n# create an instance of SaveFpsFileRequest from a dict\nsave_fps_file_request_from_dict = SaveFpsFileRequest.from_dict(save_fps_file_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "SaveScreenshotRequest",
      "file": "SaveScreenshotRequest.md",
      "summary": "Model with 8 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "file",
          "type": "str",
          "description": "The file path to save the .png/.webp screenshot or .webp flyaround to",
          "notes": ""
        },
        {
          "name": "view_type",
          "type": "str",
          "description": "The type of view to use when taking the screenshot",
          "notes": "[optional] [default to 'ZOOM_ON_MODELS']"
        },
        {
          "name": "yaw",
          "type": "float",
          "description": "Yaw rotation in degrees for the camera&#39;s view, where 0º looks down the negative X-axis",
          "notes": "[optional] [default to 45.0]"
        },
        {
          "name": "pitch",
          "type": "float",
          "description": "Pitch rotation in degrees for the camera&#39;s view, where 0º looks flat from the horizon and positive angles look down on models (in SLA scenes, toward the build platform)",
          "notes": "[optional] [default to 35.264]"
        },
        {
          "name": "image_size_px",
          "type": "int",
          "description": "Size of the largest dimension of the exported image in pixels.",
          "notes": "[optional] [default to 820]"
        },
        {
          "name": "crop_to_models",
          "type": "bool",
          "description": "If the screenshot view should be sized and cropped so the models take up most of the frame. If false, the zooming will be the same for all viewing angles.",
          "notes": "[optional] [default to True]"
        },
        {
          "name": "models",
          "type": "ModelsSelectionModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "flyaround_transform",
          "type": "SaveScreenshotRequestFlyaroundTransform",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.save_screenshot_request import SaveScreenshotRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of SaveScreenshotRequest from a JSON string\nsave_screenshot_request_instance = SaveScreenshotRequest.from_json(json)\n# print the JSON string representation of the object\nprint(SaveScreenshotRequest.to_json())\n\n# convert the object into a dict\nsave_screenshot_request_dict = save_screenshot_request_instance.to_dict()\n# create an instance of SaveScreenshotRequest from a dict\nsave_screenshot_request_from_dict = SaveScreenshotRequest.from_dict(save_screenshot_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "SaveScreenshotRequestFlyaroundTransform",
      "file": "SaveScreenshotRequestFlyaroundTransform.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "transform",
          "type": "List[SaveScreenshotRequestFlyaroundTransformTransformInner]",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "frame_count",
          "type": "float",
          "description": "The desired number of frames in the animation.",
          "notes": "[optional]"
        },
        {
          "name": "ensure_constant_size",
          "type": "bool",
          "description": "Whether or not to ensure that every frame in the animation is the same size.",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.save_screenshot_request_flyaround_transform import SaveScreenshotRequestFlyaroundTransform\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of SaveScreenshotRequestFlyaroundTransform from a JSON string\nsave_screenshot_request_flyaround_transform_instance = SaveScreenshotRequestFlyaroundTransform.from_json(json)\n# print the JSON string representation of the object\nprint(SaveScreenshotRequestFlyaroundTransform.to_json())\n\n# convert the object into a dict\nsave_screenshot_request_flyaround_transform_dict = save_screenshot_request_flyaround_transform_instance.to_dict()\n# create an instance of SaveScreenshotRequestFlyaroundTransform from a dict\nsave_screenshot_request_flyaround_transform_from_dict = SaveScreenshotRequestFlyaroundTransform.from_dict(save_screenshot_request_flyaround_transform_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "SaveScreenshotRequestFlyaroundTransformTransformInner",
      "file": "SaveScreenshotRequestFlyaroundTransformTransformInner.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "yaw",
          "type": "float",
          "description": "Yaw rotation in degrees for the camera&#39;s view, where 0º looks down the negative X-axis",
          "notes": ""
        },
        {
          "name": "pitch",
          "type": "float",
          "description": "Pitch rotation in degrees for the camera&#39;s view, where 0º looks flat from the horizon and positive angles look down on models (in SLA scenes, toward the build platform)",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.save_screenshot_request_flyaround_transform_transform_inner import SaveScreenshotRequestFlyaroundTransformTransformInner\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of SaveScreenshotRequestFlyaroundTransformTransformInner from a JSON string\nsave_screenshot_request_flyaround_transform_transform_inner_instance = SaveScreenshotRequestFlyaroundTransformTransformInner.from_json(json)\n# print the JSON string representation of the object\nprint(SaveScreenshotRequestFlyaroundTransformTransformInner.to_json())\n\n# convert the object into a dict\nsave_screenshot_request_flyaround_transform_transform_inner_dict = save_screenshot_request_flyaround_transform_transform_inner_instance.to_dict()\n# create an instance of SaveScreenshotRequestFlyaroundTransformTransformInner from a dict\nsave_screenshot_request_flyaround_transform_transform_inner_from_dict = SaveScreenshotRequestFlyaroundTransformTransformInner.from_dict(save_screenshot_request_flyaround_transform_transform_inner_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ScanToModel200Response",
      "file": "ScanToModel200Response.md",
      "summary": "Model with 7 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "models",
          "type": "List[ModelProperties]",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "scene_settings",
          "type": "SceneTypeModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "material_usage",
          "type": "MaterialUsageModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "layer_count",
          "type": "int",
          "description": "The number of layers in the scene",
          "notes": "[optional]"
        },
        {
          "name": "id",
          "type": "str",
          "description": "The ID of the created scene",
          "notes": "[optional]"
        },
        {
          "name": "warnings",
          "type": "List[str]",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "infos",
          "type": "List[str]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.scan_to_model200_response import ScanToModel200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ScanToModel200Response from a JSON string\nscan_to_model200_response_instance = ScanToModel200Response.from_json(json)\n# print the JSON string representation of the object\nprint(ScanToModel200Response.to_json())\n\n# convert the object into a dict\nscan_to_model200_response_dict = scan_to_model200_response_instance.to_dict()\n# create an instance of ScanToModel200Response from a dict\nscan_to_model200_response_from_dict = ScanToModel200Response.from_dict(scan_to_model200_response_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ScanToModelRequest",
      "file": "ScanToModelRequest.md",
      "summary": "Model with 15 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "file",
          "type": "str",
          "description": "Full path to the file to load",
          "notes": ""
        },
        {
          "name": "files",
          "type": "List[str]",
          "description": "Array of paths to the files to load",
          "notes": "[optional]"
        },
        {
          "name": "units",
          "type": "ImportUnitsModel",
          "description": "",
          "notes": "[optional] [default to ImportUnitsModel.DETECTED]"
        },
        {
          "name": "cutoff_height_mm",
          "type": "float",
          "description": "Remove all scan data below this height (in mm) from the model, replace with extrude from the bottom of the model.",
          "notes": ""
        },
        {
          "name": "extrude_distance_mm",
          "type": "float",
          "description": "Extrude this distance (in mm) from the removed bottom of the model. Default is 0mm.",
          "notes": "[optional]"
        },
        {
          "name": "hollow",
          "type": "bool",
          "description": "Whether to hollow the model.",
          "notes": "[optional]"
        },
        {
          "name": "enable_honeycomb_infill",
          "type": "bool",
          "description": "Whether to enable honeycomb infill when hollowing the model.",
          "notes": "[optional] [default to True]"
        },
        {
          "name": "cutoff_below_gumline_mm",
          "type": "float",
          "description": "Remove all scan data below this height (in mm) from the model, relative to the gumline, replace with extrude from the bottom of the model.",
          "notes": "[optional]"
        },
        {
          "name": "shell_thickness_mm",
          "type": "float",
          "description": "The thickness of the outer shell of the model, in mm. Requires hollow&#x3D;true.",
          "notes": "[optional]"
        },
        {
          "name": "wall_thickness_mm",
          "type": "float",
          "description": "The thickness of the honeycomb infill of the model, in mm. Requires hollow&#x3D;true.",
          "notes": "[optional]"
        },
        {
          "name": "drain_hole_radius_mm",
          "type": "float",
          "description": "The radius of drain holes in the model, in mm. Requires hollow&#x3D;true.",
          "notes": "[optional] [default to 1.5]"
        },
        {
          "name": "drain_hole_height_ratio",
          "type": "float",
          "description": "The ratio of the height of the drain hole to the width of the drain hole. Requires hollow&#x3D;true.",
          "notes": "[optional] [default to 1]"
        },
        {
          "name": "drain_hole_suppression_distance_mm",
          "type": "float",
          "description": "When generating draining holes, don&#39;t attempt to place them within this distance of each other. In other words, this controls the minimum distance between drain holes. Requires hollow&#x3D;true.",
          "notes": "[optional] [default to 2]"
        },
        {
          "name": "drain_hole_max_count",
          "type": "float",
          "description": "For each curve on the bottom of the model, place at most this many drain holes. Requires hollow&#x3D;true.",
          "notes": "[optional] [default to 2]"
        },
        {
          "name": "enable_smooth_contour_extended_sides",
          "type": "bool",
          "description": "Whether to enable smoothing contours that are extended from the bottom of the model to form base sides.",
          "notes": "[optional] [default to True]"
        }
      ],
      "example": "from formlabs_local_api.models.scan_to_model_request import ScanToModelRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ScanToModelRequest from a JSON string\nscan_to_model_request_instance = ScanToModelRequest.from_json(json)\n# print the JSON string representation of the object\nprint(ScanToModelRequest.to_json())\n\n# convert the object into a dict\nscan_to_model_request_dict = scan_to_model_request_instance.to_dict()\n# create an instance of ScanToModelRequest from a dict\nscan_to_model_request_from_dict = ScanToModelRequest.from_dict(scan_to_model_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "SceneModel",
      "file": "SceneModel.md",
      "summary": "Model with 5 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "models",
          "type": "List[ModelProperties]",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "scene_settings",
          "type": "SceneTypeModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "material_usage",
          "type": "MaterialUsageModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "layer_count",
          "type": "int",
          "description": "The number of layers in the scene",
          "notes": "[optional]"
        },
        {
          "name": "id",
          "type": "str",
          "description": "The ID of the created scene",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.scene_model import SceneModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of SceneModel from a JSON string\nscene_model_instance = SceneModel.from_json(json)\n# print the JSON string representation of the object\nprint(SceneModel.to_json())\n\n# convert the object into a dict\nscene_model_dict = scene_model_instance.to_dict()\n# create an instance of SceneModel from a dict\nscene_model_from_dict = SceneModel.from_dict(scene_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ScenePositionModel",
      "file": "ScenePositionModel.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "x",
          "type": "float",
          "description": "X-position, with 0 at the center of the print volume, and positive values moving to the right as you face the printer.",
          "notes": ""
        },
        {
          "name": "y",
          "type": "float",
          "description": "Y-position, with 0 at the center of the print volume and positive values moving away from you as you face the printer.",
          "notes": ""
        },
        {
          "name": "z",
          "type": "float",
          "description": "Vertical position of the model, with 0 at the bottom of the build platform.",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.scene_position_model import ScenePositionModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ScenePositionModel from a JSON string\nscene_position_model_instance = ScenePositionModel.from_json(json)\n# print the JSON string representation of the object\nprint(ScenePositionModel.to_json())\n\n# convert the object into a dict\nscene_position_model_dict = scene_position_model_instance.to_dict()\n# create an instance of ScenePositionModel from a dict\nscene_position_model_from_dict = ScenePositionModel.from_dict(scene_position_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "SceneTypeModel",
      "file": "SceneTypeModel.md",
      "summary": "Model with 6 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "machine_type",
          "type": "str",
          "description": "The machine type of the scene",
          "notes": ""
        },
        {
          "name": "material_code",
          "type": "str",
          "description": "The material code of the scene",
          "notes": ""
        },
        {
          "name": "print_setting",
          "type": "str",
          "description": "The print setting of the scene",
          "notes": "[optional]"
        },
        {
          "name": "layer_thickness_mm",
          "type": "ManualLayerThicknessMm",
          "description": "",
          "notes": ""
        },
        {
          "name": "custom_print_setting_id",
          "type": "str",
          "description": "The ID of the custom print setting used, if any.",
          "notes": "[optional]"
        },
        {
          "name": "fps_file",
          "type": "str",
          "description": "The full path to the .FPS file",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.scene_type_model import SceneTypeModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of SceneTypeModel from a JSON string\nscene_type_model_instance = SceneTypeModel.from_json(json)\n# print the JSON string representation of the object\nprint(SceneTypeModel.to_json())\n\n# convert the object into a dict\nscene_type_model_dict = scene_type_model_instance.to_dict()\n# create an instance of SceneTypeModel from a dict\nscene_type_model_from_dict = SceneTypeModel.from_dict(scene_type_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ThinWallDetectionRequestModel",
      "file": "ThinWallDetectionRequestModel.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "models",
          "type": "ThinWallDetectionRequestModelModels",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "threshold_mm",
          "type": "float",
          "description": "Wall thickness threshold in millimeters. Regions thinner than this are flagged. Effective detection resolution is internally clamped at a floor of 0.05 mm; thresholds requesting a finer voxel grid (&#x60;threshold_mm &lt; ~0.2&#x60;) coarsen rather than blow up memory, so features thinner than 0.05 mm cannot be detected regardless of threshold.",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.thin_wall_detection_request_model import ThinWallDetectionRequestModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ThinWallDetectionRequestModel from a JSON string\nthin_wall_detection_request_model_instance = ThinWallDetectionRequestModel.from_json(json)\n# print the JSON string representation of the object\nprint(ThinWallDetectionRequestModel.to_json())\n\n# convert the object into a dict\nthin_wall_detection_request_model_dict = thin_wall_detection_request_model_instance.to_dict()\n# create an instance of ThinWallDetectionRequestModel from a dict\nthin_wall_detection_request_model_from_dict = ThinWallDetectionRequestModel.from_dict(thin_wall_detection_request_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ThinWallDetectionRequestModelModels",
      "file": "ThinWallDetectionRequestModelModels.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": "from formlabs_local_api.models.thin_wall_detection_request_model_models import ThinWallDetectionRequestModelModels\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ThinWallDetectionRequestModelModels from a JSON string\nthin_wall_detection_request_model_models_instance = ThinWallDetectionRequestModelModels.from_json(json)\n# print the JSON string representation of the object\nprint(ThinWallDetectionRequestModelModels.to_json())\n\n# convert the object into a dict\nthin_wall_detection_request_model_models_dict = thin_wall_detection_request_model_models_instance.to_dict()\n# create an instance of ThinWallDetectionRequestModelModels from a dict\nthin_wall_detection_request_model_models_from_dict = ThinWallDetectionRequestModelModels.from_dict(thin_wall_detection_request_model_models_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ThinWallDetectionResultModel",
      "file": "ThinWallDetectionResultModel.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "per_model_results",
          "type": "Dict[str, ThinWallDetectionResultModelPerModelResultsValue]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.thin_wall_detection_result_model import ThinWallDetectionResultModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ThinWallDetectionResultModel from a JSON string\nthin_wall_detection_result_model_instance = ThinWallDetectionResultModel.from_json(json)\n# print the JSON string representation of the object\nprint(ThinWallDetectionResultModel.to_json())\n\n# convert the object into a dict\nthin_wall_detection_result_model_dict = thin_wall_detection_result_model_instance.to_dict()\n# create an instance of ThinWallDetectionResultModel from a dict\nthin_wall_detection_result_model_from_dict = ThinWallDetectionResultModel.from_dict(thin_wall_detection_result_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ThinWallDetectionResultModelPerModelResultsValue",
      "file": "ThinWallDetectionResultModelPerModelResultsValue.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "has_thin_walls",
          "type": "bool",
          "description": "Whether the model has any thin-wall regions below the threshold.",
          "notes": "[optional]"
        },
        {
          "name": "thin_volume_mm3",
          "type": "float",
          "description": "Total volume of thin-wall regions in cubic millimeters. Equals the sum of &#x60;thin_regions[].volume_mm3&#x60;.",
          "notes": "[optional]"
        },
        {
          "name": "thin_region_count",
          "type": "int",
          "description": "Number of distinct connected thin-wall regions. Equals &#x60;thin_regions.length&#x60;.",
          "notes": "[optional]"
        },
        {
          "name": "thin_regions",
          "type": "List[ThinWallDetectionResultModelPerModelResultsValueThinRegionsInner]",
          "description": "Per-region breakdown, sorted by volume descending. A single aggregate &#x60;thin_volume_mm3&#x60; / &#x60;thin_region_count&#x60; hides whether &#x60;N&#x60; regions are &#x60;N&#x60; real features or &#x60;N&#x60; tiny artifacts; this array exposes the per-region volumes and bounding boxes so the client can inspect the distribution. Empty when &#x60;has_thin_walls&#x60; is false.",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.thin_wall_detection_result_model_per_model_results_value import ThinWallDetectionResultModelPerModelResultsValue\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ThinWallDetectionResultModelPerModelResultsValue from a JSON string\nthin_wall_detection_result_model_per_model_results_value_instance = ThinWallDetectionResultModelPerModelResultsValue.from_json(json)\n# print the JSON string representation of the object\nprint(ThinWallDetectionResultModelPerModelResultsValue.to_json())\n\n# convert the object into a dict\nthin_wall_detection_result_model_per_model_results_value_dict = thin_wall_detection_result_model_per_model_results_value_instance.to_dict()\n# create an instance of ThinWallDetectionResultModelPerModelResultsValue from a dict\nthin_wall_detection_result_model_per_model_results_value_from_dict = ThinWallDetectionResultModelPerModelResultsValue.from_dict(thin_wall_detection_result_model_per_model_results_value_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ThinWallDetectionResultModelPerModelResultsValueThinRegionsInner",
      "file": "ThinWallDetectionResultModelPerModelResultsValueThinRegionsInner.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "volume_mm3",
          "type": "float",
          "description": "Volume of this connected region in mm³.",
          "notes": "[optional]"
        },
        {
          "name": "bounding_box",
          "type": "ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBox",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.thin_wall_detection_result_model_per_model_results_value_thin_regions_inner import ThinWallDetectionResultModelPerModelResultsValueThinRegionsInner\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ThinWallDetectionResultModelPerModelResultsValueThinRegionsInner from a JSON string\nthin_wall_detection_result_model_per_model_results_value_thin_regions_inner_instance = ThinWallDetectionResultModelPerModelResultsValueThinRegionsInner.from_json(json)\n# print the JSON string representation of the object\nprint(ThinWallDetectionResultModelPerModelResultsValueThinRegionsInner.to_json())\n\n# convert the object into a dict\nthin_wall_detection_result_model_per_model_results_value_thin_regions_inner_dict = thin_wall_detection_result_model_per_model_results_value_thin_regions_inner_instance.to_dict()\n# create an instance of ThinWallDetectionResultModelPerModelResultsValueThinRegionsInner from a dict\nthin_wall_detection_result_model_per_model_results_value_thin_regions_inner_from_dict = ThinWallDetectionResultModelPerModelResultsValueThinRegionsInner.from_dict(thin_wall_detection_result_model_per_model_results_value_thin_regions_inner_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBox",
      "file": "ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBox.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "min_corner",
          "type": "ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBoxMinCorner",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "max_corner",
          "type": "ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBoxMinCorner",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.thin_wall_detection_result_model_per_model_results_value_thin_regions_inner_bounding_box import ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBox\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBox from a JSON string\nthin_wall_detection_result_model_per_model_results_value_thin_regions_inner_bounding_box_instance = ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBox.from_json(json)\n# print the JSON string representation of the object\nprint(ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBox.to_json())\n\n# convert the object into a dict\nthin_wall_detection_result_model_per_model_results_value_thin_regions_inner_bounding_box_dict = thin_wall_detection_result_model_per_model_results_value_thin_regions_inner_bounding_box_instance.to_dict()\n# create an instance of ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBox from a dict\nthin_wall_detection_result_model_per_model_results_value_thin_regions_inner_bounding_box_from_dict = ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBox.from_dict(thin_wall_detection_result_model_per_model_results_value_thin_regions_inner_bounding_box_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBoxMinCorner",
      "file": "ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBoxMinCorner.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "x",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "y",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "z",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.thin_wall_detection_result_model_per_model_results_value_thin_regions_inner_bounding_box_min_corner import ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBoxMinCorner\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBoxMinCorner from a JSON string\nthin_wall_detection_result_model_per_model_results_value_thin_regions_inner_bounding_box_min_corner_instance = ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBoxMinCorner.from_json(json)\n# print the JSON string representation of the object\nprint(ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBoxMinCorner.to_json())\n\n# convert the object into a dict\nthin_wall_detection_result_model_per_model_results_value_thin_regions_inner_bounding_box_min_corner_dict = thin_wall_detection_result_model_per_model_results_value_thin_regions_inner_bounding_box_min_corner_instance.to_dict()\n# create an instance of ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBoxMinCorner from a dict\nthin_wall_detection_result_model_per_model_results_value_thin_regions_inner_bounding_box_min_corner_from_dict = ThinWallDetectionResultModelPerModelResultsValueThinRegionsInnerBoundingBoxMinCorner.from_dict(thin_wall_detection_result_model_per_model_results_value_thin_regions_inner_bounding_box_min_corner_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "TransformMatrixModel",
      "file": "TransformMatrixModel.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "linear",
          "type": "List[List[float]]",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.transform_matrix_model import TransformMatrixModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of TransformMatrixModel from a JSON string\ntransform_matrix_model_instance = TransformMatrixModel.from_json(json)\n# print the JSON string representation of the object\nprint(TransformMatrixModel.to_json())\n\n# convert the object into a dict\ntransform_matrix_model_dict = transform_matrix_model_instance.to_dict()\n# create an instance of TransformMatrixModel from a dict\ntransform_matrix_model_from_dict = TransformMatrixModel.from_dict(transform_matrix_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "UnitsModel",
      "file": "UnitsModel.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": ""
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "UpdateModelRequest",
      "file": "UpdateModelRequest.md",
      "summary": "Model with 6 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "name",
          "type": "str",
          "description": "The name of the model used within job preparation.",
          "notes": "[optional]"
        },
        {
          "name": "position",
          "type": "ScenePositionModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "orientation",
          "type": "OrientationModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "scale",
          "type": "float",
          "description": "The scale factor to apply to the model",
          "notes": "[optional]"
        },
        {
          "name": "units",
          "type": "UnitsModel",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "lock",
          "type": "LockModel",
          "description": "",
          "notes": "[optional] [default to LockModel.FREE]"
        }
      ],
      "example": "from formlabs_local_api.models.update_model_request import UpdateModelRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of UpdateModelRequest from a JSON string\nupdate_model_request_instance = UpdateModelRequest.from_json(json)\n# print the JSON string representation of the object\nprint(UpdateModelRequest.to_json())\n\n# convert the object into a dict\nupdate_model_request_dict = update_model_request_instance.to_dict()\n# create an instance of UpdateModelRequest from a dict\nupdate_model_request_from_dict = UpdateModelRequest.from_dict(update_model_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "UploadFirmwareRequest",
      "file": "UploadFirmwareRequest.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "printer",
          "type": "str",
          "description": "Local network IP address, or machine serial name to upload firmware to",
          "notes": ""
        },
        {
          "name": "file_path",
          "type": "str",
          "description": "Local file path to the firmware .formware or .formware2 file",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.upload_firmware_request import UploadFirmwareRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of UploadFirmwareRequest from a JSON string\nupload_firmware_request_instance = UploadFirmwareRequest.from_json(json)\n# print the JSON string representation of the object\nprint(UploadFirmwareRequest.to_json())\n\n# convert the object into a dict\nupload_firmware_request_dict = upload_firmware_request_instance.to_dict()\n# create an instance of UploadFirmwareRequest from a dict\nupload_firmware_request_from_dict = UploadFirmwareRequest.from_dict(upload_firmware_request_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "UserInformationModel",
      "file": "UserInformationModel.md",
      "summary": "Model with 5 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "username",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "first_name",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "last_name",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "email",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "persistent_id",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.user_information_model import UserInformationModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of UserInformationModel from a JSON string\nuser_information_model_instance = UserInformationModel.from_json(json)\n# print the JSON string representation of the object\nprint(UserInformationModel.to_json())\n\n# convert the object into a dict\nuser_information_model_dict = user_information_model_instance.to_dict()\n# create an instance of UserInformationModel from a dict\nuser_information_model_from_dict = UserInformationModel.from_dict(user_information_model_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "UsernameAndPassword",
      "file": "UsernameAndPassword.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "username",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "password",
          "type": "str",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_local_api.models.username_and_password import UsernameAndPassword\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of UsernameAndPassword from a JSON string\nusername_and_password_instance = UsernameAndPassword.from_json(json)\n# print the JSON string representation of the object\nprint(UsernameAndPassword.to_json())\n\n# convert the object into a dict\nusername_and_password_dict = username_and_password_instance.to_dict()\n# create an instance of UsernameAndPassword from a dict\nusername_and_password_from_dict = UsernameAndPassword.from_dict(username_and_password_dict)"
    },
    {
      "source": "Local SDK",
      "package": "formlabs_local_api",
      "kind": "Model",
      "title": "WebAuthTokensModel",
      "file": "WebAuthTokensModel.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "access_token",
          "type": "str",
          "description": "The access token for the user",
          "notes": "[optional]"
        },
        {
          "name": "refresh_token",
          "type": "str",
          "description": "The refresh token for the user",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_local_api.models.web_auth_tokens_model import WebAuthTokensModel\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of WebAuthTokensModel from a JSON string\nweb_auth_tokens_model_instance = WebAuthTokensModel.from_json(json)\n# print the JSON string representation of the object\nprint(WebAuthTokensModel.to_json())\n\n# convert the object into a dict\nweb_auth_tokens_model_dict = web_auth_tokens_model_instance.to_dict()\n# create an instance of WebAuthTokensModel from a dict\nweb_auth_tokens_model_from_dict = WebAuthTokensModel.from_dict(web_auth_tokens_model_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "API class",
      "title": "formlabs_web_api.AuthenticationApi",
      "file": "AuthenticationApi.md",
      "summary": "Methods: request_an_access_token, revoke_an_access_token",
      "methods": [
        {
          "name": "request_an_access_token",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.request_an_access_token200_response import RequestAnAccessToken200Response\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.AuthenticationApi(api_client)\n    grant_type = 'grant_type_example' # str | The type of grant being used. Currently only `client_credentials` is supported\n    client_id = 'client_id_example' # str | Your Client ID.\n    client_secret = 'client_secret_example' # str | Your Client Secret.\n\n    try:\n        api_response = api_instance.request_an_access_token(grant_type, client_id, client_secret)\n        print(\"The response of AuthenticationApi->request_an_access_token:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling AuthenticationApi->request_an_access_token: %s\\n\" % e)"
        },
        {
          "name": "revoke_an_access_token",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.AuthenticationApi(api_client)\n    token = 'token_example' # str | Your access token.\n    client_id = 'client_id_example' # str | Your client ID.\n    client_secret = 'client_secret_example' # str | Your client secret.\n\n    try:\n        api_instance.revoke_an_access_token(token, client_id, client_secret)\n    except Exception as e:\n        print(\"Exception when calling AuthenticationApi->revoke_an_access_token: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_web_api\nfrom formlabs_web_api.models.request_an_access_token200_response import RequestAnAccessToken200Response\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.AuthenticationApi(api_client)\n    grant_type = 'grant_type_example' # str | The type of grant being used. Currently only `client_credentials` is supported\n    client_id = 'client_id_example' # str | Your Client ID.\n    client_secret = 'client_secret_example' # str | Your Client Secret.\n\n    try:\n        api_response = api_instance.request_an_access_token(grant_type, client_id, client_secret)\n        print(\"The response of AuthenticationApi->request_an_access_token:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling AuthenticationApi->request_an_access_token: %s\\n\" % e)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "BasicUser",
      "file": "BasicUser.md",
      "summary": "Model with 5 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "username",
          "type": "str",
          "description": "Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.",
          "notes": ""
        },
        {
          "name": "first_name",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "last_name",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "email",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.basic_user import BasicUser\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of BasicUser from a JSON string\nbasic_user_instance = BasicUser.from_json(json)\n# print the JSON string representation of the object\nprint(BasicUser.to_json())\n\n# convert the object into a dict\nbasic_user_dict = basic_user_instance.to_dict()\n# create an instance of BasicUser from a dict\nbasic_user_from_dict = BasicUser.from_dict(basic_user_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "BuildPlatformContentsEnum",
      "file": "BuildPlatformContentsEnum.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": ""
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "CameraStatusEnum",
      "file": "CameraStatusEnum.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": ""
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "Cartridge",
      "file": "Cartridge.md",
      "summary": "Model with 19 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "serial",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "consumable_type",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "machine_type_id",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "material",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "initial_volume_ml",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "volume_dispensed_ml",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "dispense_count",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "write_count",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "mechanical_version",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "manufacture_date",
          "type": "datetime",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "manufacturer",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "display_name",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "lot_number",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "last_modified",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "is_empty",
          "type": "bool",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "inside_printer",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "connected_group",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "created_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "last_print_date",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        }
      ],
      "example": "from formlabs_web_api.models.cartridge import Cartridge\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of Cartridge from a JSON string\ncartridge_instance = Cartridge.from_json(json)\n# print the JSON string representation of the object\nprint(Cartridge.to_json())\n\n# convert the object into a dict\ncartridge_dict = cartridge_instance.to_dict()\n# create an instance of Cartridge from a dict\ncartridge_from_dict = Cartridge.from_dict(cartridge_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "CartridgeReadOnly",
      "file": "CartridgeReadOnly.md",
      "summary": "Model with 12 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "serial",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "material",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "consumable_type",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "initial_volume_ml",
          "type": "float",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "volume_dispensed_ml",
          "type": "float",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "display_name",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "is_empty",
          "type": "bool",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "inside_printer",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "connected_group",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "created_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "last_print_date",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "machine_type_id",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        }
      ],
      "example": "from formlabs_web_api.models.cartridge_read_only import CartridgeReadOnly\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of CartridgeReadOnly from a JSON string\ncartridge_read_only_instance = CartridgeReadOnly.from_json(json)\n# print the JSON string representation of the object\nprint(CartridgeReadOnly.to_json())\n\n# convert the object into a dict\ncartridge_read_only_dict = cartridge_read_only_instance.to_dict()\n# create an instance of CartridgeReadOnly from a dict\ncartridge_read_only_from_dict = CartridgeReadOnly.from_dict(cartridge_read_only_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "CartridgeSlotEnum",
      "file": "CartridgeSlotEnum.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": ""
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "API class",
      "title": "formlabs_web_api.CartridgesApi",
      "file": "CartridgesApi.md",
      "summary": "Methods: cartridges_list",
      "methods": [
        {
          "name": "cartridges_list",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_cartridge_list import PaginatedCartridgeList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.CartridgesApi(api_client)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n\n    try:\n        api_response = api_instance.cartridges_list(page=page, per_page=per_page)\n        print(\"The response of CartridgesApi->cartridges_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling CartridgesApi->cartridges_list: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_cartridge_list import PaginatedCartridgeList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.CartridgesApi(api_client)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n\n    try:\n        api_response = api_instance.cartridges_list(page=page, per_page=per_page)\n        print(\"The response of CartridgesApi->cartridges_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling CartridgesApi->cartridges_list: %s\\n\" % e)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "DeveloperAPIGroupMembershipCreateRequest",
      "file": "DeveloperAPIGroupMembershipCreateRequest.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "user",
          "type": "str",
          "description": "Email address of the member to invite",
          "notes": ""
        },
        {
          "name": "is_admin",
          "type": "bool",
          "description": "Change if the member is an administrator",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.developer_api_group_membership_create_request import DeveloperAPIGroupMembershipCreateRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DeveloperAPIGroupMembershipCreateRequest from a JSON string\ndeveloper_api_group_membership_create_request_instance = DeveloperAPIGroupMembershipCreateRequest.from_json(json)\n# print the JSON string representation of the object\nprint(DeveloperAPIGroupMembershipCreateRequest.to_json())\n\n# convert the object into a dict\ndeveloper_api_group_membership_create_request_dict = developer_api_group_membership_create_request_instance.to_dict()\n# create an instance of DeveloperAPIGroupMembershipCreateRequest from a dict\ndeveloper_api_group_membership_create_request_from_dict = DeveloperAPIGroupMembershipCreateRequest.from_dict(developer_api_group_membership_create_request_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "DeveloperAPIGroupMembershipUpdateRequest",
      "file": "DeveloperAPIGroupMembershipUpdateRequest.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "user",
          "type": "str",
          "description": "Email address of the member to update",
          "notes": ""
        },
        {
          "name": "is_admin",
          "type": "bool",
          "description": "Change if the member is an administrator",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.developer_api_group_membership_update_request import DeveloperAPIGroupMembershipUpdateRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DeveloperAPIGroupMembershipUpdateRequest from a JSON string\ndeveloper_api_group_membership_update_request_instance = DeveloperAPIGroupMembershipUpdateRequest.from_json(json)\n# print the JSON string representation of the object\nprint(DeveloperAPIGroupMembershipUpdateRequest.to_json())\n\n# convert the object into a dict\ndeveloper_api_group_membership_update_request_dict = developer_api_group_membership_update_request_instance.to_dict()\n# create an instance of DeveloperAPIGroupMembershipUpdateRequest from a dict\ndeveloper_api_group_membership_update_request_from_dict = DeveloperAPIGroupMembershipUpdateRequest.from_dict(developer_api_group_membership_update_request_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "DeveloperAPIGroupsBulkAddPrintersRequest",
      "file": "DeveloperAPIGroupsBulkAddPrintersRequest.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "target_group",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "printers",
          "type": "List[object]",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_web_api.models.developer_api_groups_bulk_add_printers_request import DeveloperAPIGroupsBulkAddPrintersRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DeveloperAPIGroupsBulkAddPrintersRequest from a JSON string\ndeveloper_api_groups_bulk_add_printers_request_instance = DeveloperAPIGroupsBulkAddPrintersRequest.from_json(json)\n# print the JSON string representation of the object\nprint(DeveloperAPIGroupsBulkAddPrintersRequest.to_json())\n\n# convert the object into a dict\ndeveloper_api_groups_bulk_add_printers_request_dict = developer_api_groups_bulk_add_printers_request_instance.to_dict()\n# create an instance of DeveloperAPIGroupsBulkAddPrintersRequest from a dict\ndeveloper_api_groups_bulk_add_printers_request_from_dict = DeveloperAPIGroupsBulkAddPrintersRequest.from_dict(developer_api_groups_bulk_add_printers_request_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "DeveloperAPIMyCloudQueueItems",
      "file": "DeveloperAPIMyCloudQueueItems.md",
      "summary": "Model with 7 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "volume_ml",
          "type": "float",
          "description": "",
          "notes": ""
        },
        {
          "name": "material_name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "created_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "username",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "allowed_machine_type_ids",
          "type": "List[str]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.developer_apimy_cloud_queue_items import DeveloperAPIMyCloudQueueItems\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DeveloperAPIMyCloudQueueItems from a JSON string\ndeveloper_apimy_cloud_queue_items_instance = DeveloperAPIMyCloudQueueItems.from_json(json)\n# print the JSON string representation of the object\nprint(DeveloperAPIMyCloudQueueItems.to_json())\n\n# convert the object into a dict\ndeveloper_apimy_cloud_queue_items_dict = developer_apimy_cloud_queue_items_instance.to_dict()\n# create an instance of DeveloperAPIMyCloudQueueItems from a dict\ndeveloper_apimy_cloud_queue_items_from_dict = DeveloperAPIMyCloudQueueItems.from_dict(developer_apimy_cloud_queue_items_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "DeveloperAPIMyPrinter",
      "file": "DeveloperAPIMyPrinter.md",
      "summary": "Model with 10 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "serial",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "alias",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "machine_type_id",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "printer_status",
          "type": "MyDeepPrinterStatus",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "cartridge_status",
          "type": "PrinterCartridgeStatus",
          "description": "The status of the printer&#39;s cartridges. If the printer has multiple cartridges, this will be a list of statuses.",
          "notes": "[readonly]"
        },
        {
          "name": "tank_status",
          "type": "PrinterTankStatus",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "group",
          "type": "PrinterGroup",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "previous_print_run",
          "type": "Dict[str, object]",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "location",
          "type": "str",
          "description": "This is a user defined physical location of the printer",
          "notes": "[readonly]"
        }
      ],
      "example": "from formlabs_web_api.models.developer_apimy_printer import DeveloperAPIMyPrinter\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of DeveloperAPIMyPrinter from a JSON string\ndeveloper_apimy_printer_instance = DeveloperAPIMyPrinter.from_json(json)\n# print the JSON string representation of the object\nprint(DeveloperAPIMyPrinter.to_json())\n\n# convert the object into a dict\ndeveloper_apimy_printer_dict = developer_apimy_printer_instance.to_dict()\n# create an instance of DeveloperAPIMyPrinter from a dict\ndeveloper_apimy_printer_from_dict = DeveloperAPIMyPrinter.from_dict(developer_apimy_printer_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "API class",
      "title": "formlabs_web_api.EventsApi",
      "file": "EventsApi.md",
      "summary": "Methods: events_list",
      "methods": [
        {
          "name": "events_list",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_user_event_read_only_list import PaginatedUserEventReadOnlyList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.EventsApi(api_client)\n    cartridge = 'cartridge_example' # str | Filter by resin cartridge serial (optional)\n    date__gt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date greater than date specified (ISO 8601 Format) (optional)\n    date__lt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date less than date specified (ISO 8601 Format) (optional)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n    print_run = 'print_run_example' # str | Filter by print id (optional)\n    printer = 'printer_example' # str | Filter by printer serial (optional)\n    tank = 'tank_example' # str | Filter by resin tank serial (optional)\n    type = 'type_example' # str | Filter by Event Type (optional)\n\n    try:\n        api_response = api_instance.events_list(cartridge=cartridge, date__gt=date__gt, date__lt=date__lt, page=page, per_page=per_page, print_run=print_run, printer=printer, tank=tank, type=type)\n        print(\"The response of EventsApi->events_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling EventsApi->events_list: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_user_event_read_only_list import PaginatedUserEventReadOnlyList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.EventsApi(api_client)\n    cartridge = 'cartridge_example' # str | Filter by resin cartridge serial (optional)\n    date__gt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date greater than date specified (ISO 8601 Format) (optional)\n    date__lt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date less than date specified (ISO 8601 Format) (optional)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n    print_run = 'print_run_example' # str | Filter by print id (optional)\n    printer = 'printer_example' # str | Filter by printer serial (optional)\n    tank = 'tank_example' # str | Filter by resin tank serial (optional)\n    type = 'type_example' # str | Filter by Event Type (optional)\n\n    try:\n        api_response = api_instance.events_list(cartridge=cartridge, date__gt=date__gt, date__lt=date__lt, page=page, per_page=per_page, print_run=print_run, printer=printer, tank=tank, type=type)\n        print(\"The response of EventsApi->events_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling EventsApi->events_list: %s\\n\" % e)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "FormCell",
      "file": "FormCell.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "serial",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "status",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "rotation",
          "type": "str",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_web_api.models.form_cell import FormCell\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of FormCell from a JSON string\nform_cell_instance = FormCell.from_json(json)\n# print the JSON string representation of the object\nprint(FormCell.to_json())\n\n# convert the object into a dict\nform_cell_dict = form_cell_instance.to_dict()\n# create an instance of FormCell from a dict\nform_cell_from_dict = FormCell.from_dict(form_cell_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "GroupInvitation",
      "file": "GroupInvitation.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "email",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "is_admin",
          "type": "bool",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.group_invitation import GroupInvitation\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of GroupInvitation from a JSON string\ngroup_invitation_instance = GroupInvitation.from_json(json)\n# print the JSON string representation of the object\nprint(GroupInvitation.to_json())\n\n# convert the object into a dict\ngroup_invitation_dict = group_invitation_instance.to_dict()\n# create an instance of GroupInvitation from a dict\ngroup_invitation_from_dict = GroupInvitation.from_dict(group_invitation_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "GroupsMembersDestroyRequest",
      "file": "GroupsMembersDestroyRequest.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "user",
          "type": "str",
          "description": "Email address of the member to remove",
          "notes": ""
        }
      ],
      "example": "from formlabs_web_api.models.groups_members_destroy_request import GroupsMembersDestroyRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of GroupsMembersDestroyRequest from a JSON string\ngroups_members_destroy_request_instance = GroupsMembersDestroyRequest.from_json(json)\n# print the JSON string representation of the object\nprint(GroupsMembersDestroyRequest.to_json())\n\n# convert the object into a dict\ngroups_members_destroy_request_dict = groups_members_destroy_request_instance.to_dict()\n# create an instance of GroupsMembersDestroyRequest from a dict\ngroups_members_destroy_request_from_dict = GroupsMembersDestroyRequest.from_dict(groups_members_destroy_request_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "HarvestStatusEnum",
      "file": "HarvestStatusEnum.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": ""
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "MyDeepPrinterStatus",
      "file": "MyDeepPrinterStatus.md",
      "summary": "Model with 17 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "status",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "last_pinged_at",
          "type": "datetime",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "hopper_level",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "material_credit",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "hopper_material",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "last_modified",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "current_temperature",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "current_print_run",
          "type": "MyPrintRunReadOnly",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "form_cell",
          "type": "FormCell",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "last_printer_cooldown_started",
          "type": "datetime",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "outer_boundary_offset_corrections",
          "type": "object",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "build_platform_contents",
          "type": "BuildPlatformContentsEnum",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "tank_mixer_state",
          "type": "TankMixerStateEnum",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "ready_to_print",
          "type": "ReadyToPrintEnum",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "printer_capabilities",
          "type": "List[str]",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "printernet_capabilities",
          "type": "List[str]",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "camera_status",
          "type": "CameraStatusEnum",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.my_deep_printer_status import MyDeepPrinterStatus\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of MyDeepPrinterStatus from a JSON string\nmy_deep_printer_status_instance = MyDeepPrinterStatus.from_json(json)\n# print the JSON string representation of the object\nprint(MyDeepPrinterStatus.to_json())\n\n# convert the object into a dict\nmy_deep_printer_status_dict = my_deep_printer_status_instance.to_dict()\n# create an instance of MyDeepPrinterStatus from a dict\nmy_deep_printer_status_from_dict = MyDeepPrinterStatus.from_dict(my_deep_printer_status_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "MyPrintRunReadOnly",
      "file": "MyPrintRunReadOnly.md",
      "summary": "Model with 39 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "guid",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "printer",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "status",
          "type": "StatusEnum",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "using_open_mode",
          "type": "bool",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "z_height_offset_mm",
          "type": "float",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_started_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_finished_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "layer_count",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "volume_ml",
          "type": "float",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "material",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "layer_thickness_mm",
          "type": "float",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "currently_printing_layer",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "estimated_duration_ms",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "elapsed_duration_ms",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "estimated_time_remaining_ms",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "created_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_run_success",
          "type": "PrintRunSuccess",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "cartridge",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "front_cartridge",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "back_cartridge",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "tank",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "cylinder",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "note",
          "type": "PrintRunNote",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_thumbnail",
          "type": "PrintThumbnailSerializerOnlyThumbnail",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "post_print_photo_url",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "user",
          "type": "BasicUser",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "user_custom_label",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "group",
          "type": "PrinterGroup",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "adaptive_thickness",
          "type": "bool",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "message",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_job",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "material_name",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_settings_name",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_settings_code",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "form_auto_serial",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "form_auto_fw_version",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "harvest_status",
          "type": "HarvestStatusEnum",
          "description": "",
          "notes": "[readonly]"
        }
      ],
      "example": "from formlabs_web_api.models.my_print_run_read_only import MyPrintRunReadOnly\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of MyPrintRunReadOnly from a JSON string\nmy_print_run_read_only_instance = MyPrintRunReadOnly.from_json(json)\n# print the JSON string representation of the object\nprint(MyPrintRunReadOnly.to_json())\n\n# convert the object into a dict\nmy_print_run_read_only_dict = my_print_run_read_only_instance.to_dict()\n# create an instance of MyPrintRunReadOnly from a dict\nmy_print_run_read_only_from_dict = MyPrintRunReadOnly.from_dict(my_print_run_read_only_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "NewWorkgroup",
      "file": "NewWorkgroup.md",
      "summary": "Model with 5 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "created_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "has_fleet_control",
          "type": "bool",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "has_fleet_control_updated_by",
          "type": "int",
          "description": "The user who is the Fleet Control administrator of the Printer Group",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.new_workgroup import NewWorkgroup\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of NewWorkgroup from a JSON string\nnew_workgroup_instance = NewWorkgroup.from_json(json)\n# print the JSON string representation of the object\nprint(NewWorkgroup.to_json())\n\n# convert the object into a dict\nnew_workgroup_dict = new_workgroup_instance.to_dict()\n# create an instance of NewWorkgroup from a dict\nnew_workgroup_from_dict = NewWorkgroup.from_dict(new_workgroup_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PaginatedCartridgeList",
      "file": "PaginatedCartridgeList.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "count",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "next",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "previous",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "results",
          "type": "List[Cartridge]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.paginated_cartridge_list import PaginatedCartridgeList\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PaginatedCartridgeList from a JSON string\npaginated_cartridge_list_instance = PaginatedCartridgeList.from_json(json)\n# print the JSON string representation of the object\nprint(PaginatedCartridgeList.to_json())\n\n# convert the object into a dict\npaginated_cartridge_list_dict = paginated_cartridge_list_instance.to_dict()\n# create an instance of PaginatedCartridgeList from a dict\npaginated_cartridge_list_from_dict = PaginatedCartridgeList.from_dict(paginated_cartridge_list_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PaginatedPrintRunWithFleetControlDataList",
      "file": "PaginatedPrintRunWithFleetControlDataList.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "count",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "next",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "previous",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "results",
          "type": "List[PrintRunWithFleetControlData]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.paginated_print_run_with_fleet_control_data_list import PaginatedPrintRunWithFleetControlDataList\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PaginatedPrintRunWithFleetControlDataList from a JSON string\npaginated_print_run_with_fleet_control_data_list_instance = PaginatedPrintRunWithFleetControlDataList.from_json(json)\n# print the JSON string representation of the object\nprint(PaginatedPrintRunWithFleetControlDataList.to_json())\n\n# convert the object into a dict\npaginated_print_run_with_fleet_control_data_list_dict = paginated_print_run_with_fleet_control_data_list_instance.to_dict()\n# create an instance of PaginatedPrintRunWithFleetControlDataList from a dict\npaginated_print_run_with_fleet_control_data_list_from_dict = PaginatedPrintRunWithFleetControlDataList.from_dict(paginated_print_run_with_fleet_control_data_list_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PaginatedTankList",
      "file": "PaginatedTankList.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "count",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "next",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "previous",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "results",
          "type": "List[Tank]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.paginated_tank_list import PaginatedTankList\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PaginatedTankList from a JSON string\npaginated_tank_list_instance = PaginatedTankList.from_json(json)\n# print the JSON string representation of the object\nprint(PaginatedTankList.to_json())\n\n# convert the object into a dict\npaginated_tank_list_dict = paginated_tank_list_instance.to_dict()\n# create an instance of PaginatedTankList from a dict\npaginated_tank_list_from_dict = PaginatedTankList.from_dict(paginated_tank_list_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PaginatedUserEventReadOnlyList",
      "file": "PaginatedUserEventReadOnlyList.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "count",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "next",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "previous",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "results",
          "type": "List[UserEventReadOnly]",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.paginated_user_event_read_only_list import PaginatedUserEventReadOnlyList\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PaginatedUserEventReadOnlyList from a JSON string\npaginated_user_event_read_only_list_instance = PaginatedUserEventReadOnlyList.from_json(json)\n# print the JSON string representation of the object\nprint(PaginatedUserEventReadOnlyList.to_json())\n\n# convert the object into a dict\npaginated_user_event_read_only_list_dict = paginated_user_event_read_only_list_instance.to_dict()\n# create an instance of PaginatedUserEventReadOnlyList from a dict\npaginated_user_event_read_only_list_from_dict = PaginatedUserEventReadOnlyList.from_dict(paginated_user_event_read_only_list_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PartialWorkGroupRequest",
      "file": "PartialWorkGroupRequest.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "name",
          "type": "str",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_web_api.models.partial_work_group_request import PartialWorkGroupRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PartialWorkGroupRequest from a JSON string\npartial_work_group_request_instance = PartialWorkGroupRequest.from_json(json)\n# print the JSON string representation of the object\nprint(PartialWorkGroupRequest.to_json())\n\n# convert the object into a dict\npartial_work_group_request_dict = partial_work_group_request_instance.to_dict()\n# create an instance of PartialWorkGroupRequest from a dict\npartial_work_group_request_from_dict = PartialWorkGroupRequest.from_dict(partial_work_group_request_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PatchedPartialWorkGroupRequest",
      "file": "PatchedPartialWorkGroupRequest.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "name",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "remote_print_enabled_override",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.patched_partial_work_group_request import PatchedPartialWorkGroupRequest\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PatchedPartialWorkGroupRequest from a JSON string\npatched_partial_work_group_request_instance = PatchedPartialWorkGroupRequest.from_json(json)\n# print the JSON string representation of the object\nprint(PatchedPartialWorkGroupRequest.to_json())\n\n# convert the object into a dict\npatched_partial_work_group_request_dict = patched_partial_work_group_request_instance.to_dict()\n# create an instance of PatchedPartialWorkGroupRequest from a dict\npatched_partial_work_group_request_from_dict = PatchedPartialWorkGroupRequest.from_dict(patched_partial_work_group_request_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PrintPart",
      "file": "PrintPart.md",
      "summary": "Model with 9 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "guid",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "display_name",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "end_layer",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "name",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "raw_mesh_hash",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "start_layer",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "volume_ml",
          "type": "float",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "prepared_scene",
          "type": "str",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_web_api.models.print_part import PrintPart\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PrintPart from a JSON string\nprint_part_instance = PrintPart.from_json(json)\n# print the JSON string representation of the object\nprint(PrintPart.to_json())\n\n# convert the object into a dict\nprint_part_dict = print_part_instance.to_dict()\n# create an instance of PrintPart from a dict\nprint_part_from_dict = PrintPart.from_dict(print_part_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PrintRunNote",
      "file": "PrintRunNote.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "print_run",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "note",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "author",
          "type": "BasicUser",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        }
      ],
      "example": "from formlabs_web_api.models.print_run_note import PrintRunNote\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PrintRunNote from a JSON string\nprint_run_note_instance = PrintRunNote.from_json(json)\n# print the JSON string representation of the object\nprint(PrintRunNote.to_json())\n\n# convert the object into a dict\nprint_run_note_dict = print_run_note_instance.to_dict()\n# create an instance of PrintRunNote from a dict\nprint_run_note_from_dict = PrintRunNote.from_dict(print_run_note_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PrintRunSuccess",
      "file": "PrintRunSuccess.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "print_run",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "print_run_success",
          "type": "PrintRunSuccessEnum",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "created_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        }
      ],
      "example": "from formlabs_web_api.models.print_run_success import PrintRunSuccess\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PrintRunSuccess from a JSON string\nprint_run_success_instance = PrintRunSuccess.from_json(json)\n# print the JSON string representation of the object\nprint(PrintRunSuccess.to_json())\n\n# convert the object into a dict\nprint_run_success_dict = print_run_success_instance.to_dict()\n# create an instance of PrintRunSuccess from a dict\nprint_run_success_from_dict = PrintRunSuccess.from_dict(print_run_success_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PrintRunSuccessEnum",
      "file": "PrintRunSuccessEnum.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": ""
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PrintRunWithFleetControlData",
      "file": "PrintRunWithFleetControlData.md",
      "summary": "Model with 41 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "guid",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "printer",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "status",
          "type": "StatusEnum",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "using_open_mode",
          "type": "bool",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "z_height_offset_mm",
          "type": "float",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_started_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_finished_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "layer_count",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "volume_ml",
          "type": "float",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "material",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "layer_thickness_mm",
          "type": "float",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "currently_printing_layer",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "estimated_duration_ms",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "elapsed_duration_ms",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "estimated_time_remaining_ms",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "created_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_run_success",
          "type": "PrintRunSuccess",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "firmware_version",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "cartridge",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "front_cartridge",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "back_cartridge",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "tank",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "cylinder",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "note",
          "type": "PrintRunNote",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_thumbnail",
          "type": "PrintThumbnailSerializerOnlyThumbnail",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "post_print_photo_url",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "user",
          "type": "BasicUser",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "user_custom_label",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "group",
          "type": "PrinterGroup",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "adaptive_thickness",
          "type": "bool",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "message",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_job",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "material_name",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_settings_name",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_settings_code",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "cloud_queue_item",
          "type": "Dict[str, object]",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "form_auto_serial",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "form_auto_fw_version",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "harvest_status",
          "type": "HarvestStatusEnum",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "parts",
          "type": "List[PrintPart]",
          "description": "",
          "notes": "[readonly]"
        }
      ],
      "example": "from formlabs_web_api.models.print_run_with_fleet_control_data import PrintRunWithFleetControlData\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PrintRunWithFleetControlData from a JSON string\nprint_run_with_fleet_control_data_instance = PrintRunWithFleetControlData.from_json(json)\n# print the JSON string representation of the object\nprint(PrintRunWithFleetControlData.to_json())\n\n# convert the object into a dict\nprint_run_with_fleet_control_data_dict = print_run_with_fleet_control_data_instance.to_dict()\n# create an instance of PrintRunWithFleetControlData from a dict\nprint_run_with_fleet_control_data_from_dict = PrintRunWithFleetControlData.from_dict(print_run_with_fleet_control_data_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PrintThumbnailSerializerOnlyThumbnail",
      "file": "PrintThumbnailSerializerOnlyThumbnail.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "thumbnail",
          "type": "str",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_web_api.models.print_thumbnail_serializer_only_thumbnail import PrintThumbnailSerializerOnlyThumbnail\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PrintThumbnailSerializerOnlyThumbnail from a JSON string\nprint_thumbnail_serializer_only_thumbnail_instance = PrintThumbnailSerializerOnlyThumbnail.from_json(json)\n# print the JSON string representation of the object\nprint(PrintThumbnailSerializerOnlyThumbnail.to_json())\n\n# convert the object into a dict\nprint_thumbnail_serializer_only_thumbnail_dict = print_thumbnail_serializer_only_thumbnail_instance.to_dict()\n# create an instance of PrintThumbnailSerializerOnlyThumbnail from a dict\nprint_thumbnail_serializer_only_thumbnail_from_dict = PrintThumbnailSerializerOnlyThumbnail.from_dict(print_thumbnail_serializer_only_thumbnail_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PrinterCartridgeStatus",
      "file": "PrinterCartridgeStatus.md",
      "summary": "Model with 3 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "cartridge",
          "type": "CartridgeReadOnly",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "last_modified",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "cartridge_slot",
          "type": "CartridgeSlotEnum",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.printer_cartridge_status import PrinterCartridgeStatus\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PrinterCartridgeStatus from a JSON string\nprinter_cartridge_status_instance = PrinterCartridgeStatus.from_json(json)\n# print the JSON string representation of the object\nprint(PrinterCartridgeStatus.to_json())\n\n# convert the object into a dict\nprinter_cartridge_status_dict = printer_cartridge_status_instance.to_dict()\n# create an instance of PrinterCartridgeStatus from a dict\nprinter_cartridge_status_from_dict = PrinterCartridgeStatus.from_dict(printer_cartridge_status_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PrinterGroup",
      "file": "PrinterGroup.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "name",
          "type": "str",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_web_api.models.printer_group import PrinterGroup\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PrinterGroup from a JSON string\nprinter_group_instance = PrinterGroup.from_json(json)\n# print the JSON string representation of the object\nprint(PrinterGroup.to_json())\n\n# convert the object into a dict\nprinter_group_dict = printer_group_instance.to_dict()\n# create an instance of PrinterGroup from a dict\nprinter_group_from_dict = PrinterGroup.from_dict(printer_group_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "API class",
      "title": "formlabs_web_api.PrinterGroupsApi",
      "file": "PrinterGroupsApi.md",
      "summary": "Methods: groups_bulk_add_printers_create, groups_create, groups_destroy, groups_list, ...",
      "methods": [
        {
          "name": "groups_bulk_add_printers_create",
          "signature": "groups_bulk_add_printers_create(developer_api_groups_bulk_add_printers_request)",
          "description": "Move Printer(s) to a Printer Group.  \n**Notes:** Request sender needs to be admin of target group and all of the Printers’ groups.",
          "params": [
            {
              "name": "developer_api_groups_bulk_add_printers_request",
              "type": "DeveloperAPIGroupsBulkAddPrintersRequest",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_api_groups_bulk_add_printers_request import DeveloperAPIGroupsBulkAddPrintersRequest\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    developer_api_groups_bulk_add_printers_request = {\"target_group\":\"61e94a6e-8012-42fa-8fa7-642d2587bef0\",\"printers\":[\"SweetMatcha\",\"CornyCaffeine\"]} # DeveloperAPIGroupsBulkAddPrintersRequest | \n\n    try:\n        api_instance.groups_bulk_add_printers_create(developer_api_groups_bulk_add_printers_request)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_bulk_add_printers_create: %s\\n\" % e)"
        },
        {
          "name": "groups_create",
          "signature": "NewWorkgroup groups_create(partial_work_group_request)",
          "description": "Create a group for my account, and make me an administrator.",
          "params": [
            {
              "name": "partial_work_group_request",
              "type": "PartialWorkGroupRequest",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.new_workgroup import NewWorkgroup\nfrom formlabs_web_api.models.partial_work_group_request import PartialWorkGroupRequest\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    partial_work_group_request = formlabs_web_api.PartialWorkGroupRequest() # PartialWorkGroupRequest | \n\n    try:\n        api_response = api_instance.groups_create(partial_work_group_request)\n        print(\"The response of PrinterGroupsApi->groups_create:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_create: %s\\n\" % e)"
        },
        {
          "name": "groups_destroy",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    group_id = 'group_id_example' # str | A UUID string identifying this workgroup.\n\n    try:\n        api_instance.groups_destroy(group_id)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_destroy: %s\\n\" % e)"
        },
        {
          "name": "groups_list",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.workgroup import Workgroup\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n\n    try:\n        api_response = api_instance.groups_list()\n        print(\"The response of PrinterGroupsApi->groups_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_list: %s\\n\" % e)"
        },
        {
          "name": "groups_members_create",
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
              "type": "DeveloperAPIGroupMembershipCreateRequest",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_api_group_membership_create_request import DeveloperAPIGroupMembershipCreateRequest\nfrom formlabs_web_api.models.workgroup_membership import WorkgroupMembership\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    group_id = 'group_id_example' # str | A UUID string identifying this Printer Group\n    developer_api_group_membership_create_request = formlabs_web_api.DeveloperAPIGroupMembershipCreateRequest() # DeveloperAPIGroupMembershipCreateRequest | \n\n    try:\n        api_response = api_instance.groups_members_create(group_id, developer_api_group_membership_create_request)\n        print(\"The response of PrinterGroupsApi->groups_members_create:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_members_create: %s\\n\" % e)"
        },
        {
          "name": "groups_members_destroy",
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
              "type": "GroupsMembersDestroyRequest",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.groups_members_destroy_request import GroupsMembersDestroyRequest\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    group_id = 'group_id_example' # str | A UUID string identifying this Printer Group\n    groups_members_destroy_request = formlabs_web_api.GroupsMembersDestroyRequest() # GroupsMembersDestroyRequest |  (optional)\n\n    try:\n        api_instance.groups_members_destroy(group_id, groups_members_destroy_request=groups_members_destroy_request)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_members_destroy: %s\\n\" % e)"
        },
        {
          "name": "groups_members_update",
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
              "type": "DeveloperAPIGroupMembershipUpdateRequest",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_api_group_membership_update_request import DeveloperAPIGroupMembershipUpdateRequest\nfrom formlabs_web_api.models.workgroup_membership import WorkgroupMembership\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    group_id = 'group_id_example' # str | A UUID string identifying this Printer Group\n    developer_api_group_membership_update_request = formlabs_web_api.DeveloperAPIGroupMembershipUpdateRequest() # DeveloperAPIGroupMembershipUpdateRequest | \n\n    try:\n        api_response = api_instance.groups_members_update(group_id, developer_api_group_membership_update_request)\n        print(\"The response of PrinterGroupsApi->groups_members_update:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_members_update: %s\\n\" % e)"
        },
        {
          "name": "groups_partial_update",
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
              "type": "PatchedPartialWorkGroupRequest",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.patched_partial_work_group_request import PatchedPartialWorkGroupRequest\nfrom formlabs_web_api.models.workgroup import Workgroup\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    group_id = 'group_id_example' # str | A UUID string identifying this workgroup.\n    patched_partial_work_group_request = formlabs_web_api.PatchedPartialWorkGroupRequest() # PatchedPartialWorkGroupRequest |  (optional)\n\n    try:\n        api_response = api_instance.groups_partial_update(group_id, patched_partial_work_group_request=patched_partial_work_group_request)\n        print(\"The response of PrinterGroupsApi->groups_partial_update:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_partial_update: %s\\n\" % e)"
        },
        {
          "name": "groups_queue_list",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_apimy_cloud_queue_items import DeveloperAPIMyCloudQueueItems\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    group_id = 'group_id_example' # str | A UUID string identifying this Printer Group\n\n    try:\n        api_response = api_instance.groups_queue_list(group_id)\n        print(\"The response of PrinterGroupsApi->groups_queue_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_queue_list: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_api_groups_bulk_add_printers_request import DeveloperAPIGroupsBulkAddPrintersRequest\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrinterGroupsApi(api_client)\n    developer_api_groups_bulk_add_printers_request = {\"target_group\":\"61e94a6e-8012-42fa-8fa7-642d2587bef0\",\"printers\":[\"SweetMatcha\",\"CornyCaffeine\"]} # DeveloperAPIGroupsBulkAddPrintersRequest | \n\n    try:\n        api_instance.groups_bulk_add_printers_create(developer_api_groups_bulk_add_printers_request)\n    except Exception as e:\n        print(\"Exception when calling PrinterGroupsApi->groups_bulk_add_printers_create: %s\\n\" % e)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "PrinterTankStatus",
      "file": "PrinterTankStatus.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "tank",
          "type": "TankReadOnly",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "last_modified",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        }
      ],
      "example": "from formlabs_web_api.models.printer_tank_status import PrinterTankStatus\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of PrinterTankStatus from a JSON string\nprinter_tank_status_instance = PrinterTankStatus.from_json(json)\n# print the JSON string representation of the object\nprint(PrinterTankStatus.to_json())\n\n# convert the object into a dict\nprinter_tank_status_dict = printer_tank_status_instance.to_dict()\n# create an instance of PrinterTankStatus from a dict\nprinter_tank_status_from_dict = PrinterTankStatus.from_dict(printer_tank_status_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "API class",
      "title": "formlabs_web_api.PrintersApi",
      "file": "PrintersApi.md",
      "summary": "Methods: printers_list, printers_retrieve",
      "methods": [
        {
          "name": "printers_list",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_apimy_printer import DeveloperAPIMyPrinter\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrintersApi(api_client)\n\n    try:\n        api_response = api_instance.printers_list()\n        print(\"The response of PrintersApi->printers_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintersApi->printers_list: %s\\n\" % e)"
        },
        {
          "name": "printers_retrieve",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_apimy_printer import DeveloperAPIMyPrinter\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrintersApi(api_client)\n    printer_serial = 'printer_serial_example' # str | A unique value identifying this printer.\n\n    try:\n        api_response = api_instance.printers_retrieve(printer_serial)\n        print(\"The response of PrintersApi->printers_retrieve:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintersApi->printers_retrieve: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_web_api\nfrom formlabs_web_api.models.developer_apimy_printer import DeveloperAPIMyPrinter\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrintersApi(api_client)\n\n    try:\n        api_response = api_instance.printers_list()\n        print(\"The response of PrintersApi->printers_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintersApi->printers_list: %s\\n\" % e)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "API class",
      "title": "formlabs_web_api.PrintsApi",
      "file": "PrintsApi.md",
      "summary": "Methods: printers_prints_list, prints_list",
      "methods": [
        {
          "name": "printers_prints_list",
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
              "type": "List[str]",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_print_run_with_fleet_control_data_list import PaginatedPrintRunWithFleetControlDataList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrintsApi(api_client)\n    printer_serial = 'printer_serial_example' # str | \n    var_date = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time (ISO 8601 Format)  (optional)\n    date__gt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time greater than date time specified (ISO 8601 Format) (optional)\n    date__lt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time less than date time specified (ISO 8601 Format) (optional)\n    machine_type_id = ['machine_type_id_example'] # List[str] | Filter by machine type id. (optional)\n    material = 'material_example' # str |  (optional)\n    name = 'name_example' # str | Filter by name of the print (Substring Match) (optional)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n    printer = 'printer_example' # str | Filter by printer serial (optional)\n    status = 'status_example' # str | Filter by status of the print. Possible values are:           * `QUEUED` - Queued           * `PREPRINT` - Preprint           * `PRINTING` - Printing           * `PAUSING` - Pausing           * `PAUSED` - Paused           * `FINISHED` - Finished           * `ABORTING` - Aborting           * `ABORTED` - Aborted           * `ERROR` - Error           * `WAITING_FOR_RESOLUTION` - Waiting for Resolution           * `PREHEAT` - Preheat           * `PRECOAT` - Precoat           * `POSTCOAT` - Postcoat (optional)\n\n    try:\n        api_response = api_instance.printers_prints_list(printer_serial, var_date=var_date, date__gt=date__gt, date__lt=date__lt, machine_type_id=machine_type_id, material=material, name=name, page=page, per_page=per_page, printer=printer, status=status)\n        print(\"The response of PrintsApi->printers_prints_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintsApi->printers_prints_list: %s\\n\" % e)"
        },
        {
          "name": "prints_list",
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
              "type": "List[str]",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_print_run_with_fleet_control_data_list import PaginatedPrintRunWithFleetControlDataList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrintsApi(api_client)\n    var_date = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time (ISO 8601 Format)  (optional)\n    date__gt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time greater than date time specified (ISO 8601 Format) (optional)\n    date__lt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time less than date time specified (ISO 8601 Format) (optional)\n    machine_type_id = ['machine_type_id_example'] # List[str] | Filter by machine type id. (optional)\n    material = 'material_example' # str |  (optional)\n    name = 'name_example' # str | Filter by name of the print (Substring Match) (optional)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n    printer = 'printer_example' # str | Filter by printer serial (optional)\n    status = 'status_example' # str | Filter by status of the print. Possible values are:           * `QUEUED` - Queued           * `PREPRINT` - Preprint           * `PRINTING` - Printing           * `PAUSING` - Pausing           * `PAUSED` - Paused           * `FINISHED` - Finished           * `ABORTING` - Aborting           * `ABORTED` - Aborted           * `ERROR` - Error           * `WAITING_FOR_RESOLUTION` - Waiting for Resolution           * `PREHEAT` - Preheat           * `PRECOAT` - Precoat           * `POSTCOAT` - Postcoat (optional)\n\n    try:\n        api_response = api_instance.prints_list(var_date=var_date, date__gt=date__gt, date__lt=date__lt, machine_type_id=machine_type_id, material=material, name=name, page=page, per_page=per_page, printer=printer, status=status)\n        print(\"The response of PrintsApi->prints_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintsApi->prints_list: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_print_run_with_fleet_control_data_list import PaginatedPrintRunWithFleetControlDataList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.PrintsApi(api_client)\n    printer_serial = 'printer_serial_example' # str | \n    var_date = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time (ISO 8601 Format)  (optional)\n    date__gt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time greater than date time specified (ISO 8601 Format) (optional)\n    date__lt = '2013-10-20T19:20:30+01:00' # datetime | Filter by date time less than date time specified (ISO 8601 Format) (optional)\n    machine_type_id = ['machine_type_id_example'] # List[str] | Filter by machine type id. (optional)\n    material = 'material_example' # str |  (optional)\n    name = 'name_example' # str | Filter by name of the print (Substring Match) (optional)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n    printer = 'printer_example' # str | Filter by printer serial (optional)\n    status = 'status_example' # str | Filter by status of the print. Possible values are:           * `QUEUED` - Queued           * `PREPRINT` - Preprint           * `PRINTING` - Printing           * `PAUSING` - Pausing           * `PAUSED` - Paused           * `FINISHED` - Finished           * `ABORTING` - Aborting           * `ABORTED` - Aborted           * `ERROR` - Error           * `WAITING_FOR_RESOLUTION` - Waiting for Resolution           * `PREHEAT` - Preheat           * `PRECOAT` - Precoat           * `POSTCOAT` - Postcoat (optional)\n\n    try:\n        api_response = api_instance.printers_prints_list(printer_serial, var_date=var_date, date__gt=date__gt, date__lt=date__lt, machine_type_id=machine_type_id, material=material, name=name, page=page, per_page=per_page, printer=printer, status=status)\n        print(\"The response of PrintsApi->printers_prints_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling PrintsApi->printers_prints_list: %s\\n\" % e)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "ReadyToPrintEnum",
      "file": "ReadyToPrintEnum.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": ""
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "RequestAnAccessToken200Response",
      "file": "RequestAnAccessToken200Response.md",
      "summary": "Model with 4 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "access_token",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "token_type",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "expires_in",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "scope",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.request_an_access_token200_response import RequestAnAccessToken200Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of RequestAnAccessToken200Response from a JSON string\nrequest_an_access_token200_response_instance = RequestAnAccessToken200Response.from_json(json)\n# print the JSON string representation of the object\nprint(RequestAnAccessToken200Response.to_json())\n\n# convert the object into a dict\nrequest_an_access_token200_response_dict = request_an_access_token200_response_instance.to_dict()\n# create an instance of RequestAnAccessToken200Response from a dict\nrequest_an_access_token200_response_from_dict = RequestAnAccessToken200Response.from_dict(request_an_access_token200_response_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "RequestAnAccessToken400Response",
      "file": "RequestAnAccessToken400Response.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "error",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "error_description",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.request_an_access_token400_response import RequestAnAccessToken400Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of RequestAnAccessToken400Response from a JSON string\nrequest_an_access_token400_response_instance = RequestAnAccessToken400Response.from_json(json)\n# print the JSON string representation of the object\nprint(RequestAnAccessToken400Response.to_json())\n\n# convert the object into a dict\nrequest_an_access_token400_response_dict = request_an_access_token400_response_instance.to_dict()\n# create an instance of RequestAnAccessToken400Response from a dict\nrequest_an_access_token400_response_from_dict = RequestAnAccessToken400Response.from_dict(request_an_access_token400_response_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "RequestAnAccessToken401Response",
      "file": "RequestAnAccessToken401Response.md",
      "summary": "Model with 1 property.",
      "methods": [

      ],
      "properties": [
        {
          "name": "error",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.request_an_access_token401_response import RequestAnAccessToken401Response\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of RequestAnAccessToken401Response from a JSON string\nrequest_an_access_token401_response_instance = RequestAnAccessToken401Response.from_json(json)\n# print the JSON string representation of the object\nprint(RequestAnAccessToken401Response.to_json())\n\n# convert the object into a dict\nrequest_an_access_token401_response_dict = request_an_access_token401_response_instance.to_dict()\n# create an instance of RequestAnAccessToken401Response from a dict\nrequest_an_access_token401_response_from_dict = RequestAnAccessToken401Response.from_dict(request_an_access_token401_response_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "StatusEnum",
      "file": "StatusEnum.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": ""
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "Tank",
      "file": "Tank.md",
      "summary": "Model with 20 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "serial",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "material",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "layers_printed",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "print_time_ms",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "heatmap",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "heatmap_gif",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "mechanical_version",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "manufacture_date",
          "type": "datetime",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "manufacturer",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "display_name",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "lot_number",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "layer_count",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "last_modified",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "inside_printer",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "write_count",
          "type": "int",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "tank_type",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "connected_group",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "first_fill_date",
          "type": "datetime",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "created_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "last_print_date",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        }
      ],
      "example": "from formlabs_web_api.models.tank import Tank\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of Tank from a JSON string\ntank_instance = Tank.from_json(json)\n# print the JSON string representation of the object\nprint(Tank.to_json())\n\n# convert the object into a dict\ntank_dict = tank_instance.to_dict()\n# create an instance of Tank from a dict\ntank_from_dict = Tank.from_dict(tank_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "TankMixerStateEnum",
      "file": "TankMixerStateEnum.md",
      "summary": "Generated Python SDK documentation.",
      "methods": [

      ],
      "properties": [

      ],
      "example": ""
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "TankReadOnly",
      "file": "TankReadOnly.md",
      "summary": "Model with 14 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "serial",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "material",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_time_ms",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "layers_printed",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "first_fill_date",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "heatmap",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "heatmap_gif",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "display_name",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "layer_count",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "inside_printer",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "tank_type",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "connected_group",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "created_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "last_print_date",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        }
      ],
      "example": "from formlabs_web_api.models.tank_read_only import TankReadOnly\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of TankReadOnly from a JSON string\ntank_read_only_instance = TankReadOnly.from_json(json)\n# print the JSON string representation of the object\nprint(TankReadOnly.to_json())\n\n# convert the object into a dict\ntank_read_only_dict = tank_read_only_instance.to_dict()\n# create an instance of TankReadOnly from a dict\ntank_read_only_from_dict = TankReadOnly.from_dict(tank_read_only_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "API class",
      "title": "formlabs_web_api.TanksApi",
      "file": "TanksApi.md",
      "summary": "Methods: tanks_list",
      "methods": [
        {
          "name": "tanks_list",
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
          ],
          "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_tank_list import PaginatedTankList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.TanksApi(api_client)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n\n    try:\n        api_response = api_instance.tanks_list(page=page, per_page=per_page)\n        print(\"The response of TanksApi->tanks_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling TanksApi->tanks_list: %s\\n\" % e)"
        }
      ],
      "properties": [

      ],
      "example": "import formlabs_web_api\nfrom formlabs_web_api.models.paginated_tank_list import PaginatedTankList\nfrom formlabs_web_api.rest import ApiException\nfrom pprint import pprint\n\n# Defining the host is optional and defaults to https://api.formlabs.com\n# See configuration.py for a list of all supported configuration parameters.\nconfiguration = formlabs_web_api.Configuration(\n    host = \"https://api.formlabs.com\"\n)\n\n# The client must configure the authentication and authorization parameters\n# in accordance with the API server security policy.\n# Examples for each auth method are provided below, use the example that\n# satisfies your auth use case.\n\n# Configure Bearer authorization: bearerAuth\nconfiguration = formlabs_web_api.Configuration(\n    access_token = os.environ[\"BEARER_TOKEN\"]\n)\n\n# Enter a context with an instance of the API client\nwith formlabs_web_api.ApiClient(configuration) as api_client:\n    # Create an instance of the API class\n    api_instance = formlabs_web_api.TanksApi(api_client)\n    page = 56 # int | A page number within the paginated result set. (optional)\n    per_page = 56 # int | Number of results to return per page. (optional)\n\n    try:\n        api_response = api_instance.tanks_list(page=page, per_page=per_page)\n        print(\"The response of TanksApi->tanks_list:\\n\")\n        pprint(api_response)\n    except Exception as e:\n        print(\"Exception when calling TanksApi->tanks_list: %s\\n\" % e)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "UserEventReadOnly",
      "file": "UserEventReadOnly.md",
      "summary": "Model with 12 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "int",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "printer",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "created_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "print_run",
          "type": "MyPrintRunReadOnly",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "tank",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "cartridge",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "type",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "type_label",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "action",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "message",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "was_read",
          "type": "bool",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "group",
          "type": "PrinterGroup",
          "description": "",
          "notes": ""
        }
      ],
      "example": "from formlabs_web_api.models.user_event_read_only import UserEventReadOnly\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of UserEventReadOnly from a JSON string\nuser_event_read_only_instance = UserEventReadOnly.from_json(json)\n# print the JSON string representation of the object\nprint(UserEventReadOnly.to_json())\n\n# convert the object into a dict\nuser_event_read_only_dict = user_event_read_only_instance.to_dict()\n# create an instance of UserEventReadOnly from a dict\nuser_event_read_only_from_dict = UserEventReadOnly.from_dict(user_event_read_only_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "Workgroup",
      "file": "Workgroup.md",
      "summary": "Model with 10 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "id",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "name",
          "type": "str",
          "description": "",
          "notes": ""
        },
        {
          "name": "remote_print_enabled_override",
          "type": "bool",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "created_at",
          "type": "datetime",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "memberships",
          "type": "List[WorkgroupMembership]",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "printers",
          "type": "List[str]",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "invitations",
          "type": "List[GroupInvitation]",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "has_fleet_control",
          "type": "bool",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "has_fleet_control_updated_by",
          "type": "int",
          "description": "The user who is the Fleet Control administrator of the Printer Group",
          "notes": "[optional]"
        },
        {
          "name": "settings",
          "type": "WorkgroupSettings",
          "description": "",
          "notes": "[readonly]"
        }
      ],
      "example": "from formlabs_web_api.models.workgroup import Workgroup\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of Workgroup from a JSON string\nworkgroup_instance = Workgroup.from_json(json)\n# print the JSON string representation of the object\nprint(Workgroup.to_json())\n\n# convert the object into a dict\nworkgroup_dict = workgroup_instance.to_dict()\n# create an instance of Workgroup from a dict\nworkgroup_from_dict = Workgroup.from_dict(workgroup_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "WorkgroupMembership",
      "file": "WorkgroupMembership.md",
      "summary": "Model with 5 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "is_admin",
          "type": "bool",
          "description": "",
          "notes": "[optional]"
        },
        {
          "name": "user",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "email",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "first_name",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "last_name",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        }
      ],
      "example": "from formlabs_web_api.models.workgroup_membership import WorkgroupMembership\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of WorkgroupMembership from a JSON string\nworkgroup_membership_instance = WorkgroupMembership.from_json(json)\n# print the JSON string representation of the object\nprint(WorkgroupMembership.to_json())\n\n# convert the object into a dict\nworkgroup_membership_dict = workgroup_membership_instance.to_dict()\n# create an instance of WorkgroupMembership from a dict\nworkgroup_membership_from_dict = WorkgroupMembership.from_dict(workgroup_membership_dict)"
    },
    {
      "source": "Web SDK",
      "package": "formlabs_web_api",
      "kind": "Model",
      "title": "WorkgroupSettings",
      "file": "WorkgroupSettings.md",
      "summary": "Model with 2 properties.",
      "methods": [

      ],
      "properties": [
        {
          "name": "group",
          "type": "str",
          "description": "",
          "notes": "[readonly]"
        },
        {
          "name": "update_mode",
          "type": "str",
          "description": "",
          "notes": "[optional]"
        }
      ],
      "example": "from formlabs_web_api.models.workgroup_settings import WorkgroupSettings\n\n# TODO update the JSON string below\njson = \"{}\"\n# create an instance of WorkgroupSettings from a JSON string\nworkgroup_settings_instance = WorkgroupSettings.from_json(json)\n# print the JSON string representation of the object\nprint(WorkgroupSettings.to_json())\n\n# convert the object into a dict\nworkgroup_settings_dict = workgroup_settings_instance.to_dict()\n# create an instance of WorkgroupSettings from a dict\nworkgroup_settings_from_dict = WorkgroupSettings.from_dict(workgroup_settings_dict)"
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
