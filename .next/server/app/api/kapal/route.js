/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/kapal/route";
exports.ids = ["app/api/kapal/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fkapal%2Froute&page=%2Fapi%2Fkapal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fkapal%2Froute.js&appDir=C%3A%5CUsers%5CACER-%5COneDrive%5CDesktop%5Casik%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CACER-%5COneDrive%5CDesktop%5Casik&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fkapal%2Froute&page=%2Fapi%2Fkapal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fkapal%2Froute.js&appDir=C%3A%5CUsers%5CACER-%5COneDrive%5CDesktop%5Casik%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CACER-%5COneDrive%5CDesktop%5Casik&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_ACER_OneDrive_Desktop_asik_app_api_kapal_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/kapal/route.js */ \"(rsc)/./app/api/kapal/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/kapal/route\",\n        pathname: \"/api/kapal\",\n        filename: \"route\",\n        bundlePath: \"app/api/kapal/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\ACER-\\\\OneDrive\\\\Desktop\\\\asik\\\\app\\\\api\\\\kapal\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_ACER_OneDrive_Desktop_asik_app_api_kapal_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZrYXBhbCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGa2FwYWwlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZrYXBhbCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBQ0VSLSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q2FzaWslNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q0FDRVItJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDYXNpayZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDb0I7QUFDakc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEFDRVItXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcYXNpa1xcXFxhcHBcXFxcYXBpXFxcXGthcGFsXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9rYXBhbC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2thcGFsXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9rYXBhbC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEFDRVItXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcYXNpa1xcXFxhcHBcXFxcYXBpXFxcXGthcGFsXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fkapal%2Froute&page=%2Fapi%2Fkapal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fkapal%2Froute.js&appDir=C%3A%5CUsers%5CACER-%5COneDrive%5CDesktop%5Casik%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CACER-%5COneDrive%5CDesktop%5Casik&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/kapal/route.js":
/*!********************************!*\
  !*** ./app/api/kapal/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_config_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/config/db */ \"(rsc)/./lib/config/db.js\");\n/* harmony import */ var _lib_models_Kapal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/models/Kapal */ \"(rsc)/./lib/models/Kapal.js\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n\n\nconst { NextResponse } = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nconst LoadDB = async ()=>{\n    await (0,_lib_config_db__WEBPACK_IMPORTED_MODULE_0__.ConnectDB)();\n};\nLoadDB();\nasync function GET(request) {\n    try {\n        const kapalId = request.nextUrl.searchParams.get(\"id\");\n        if (kapalId) {\n            const kapal = await _lib_models_Kapal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(kapalId);\n            if (!kapal) {\n                return NextResponse.json({\n                    msg: \"Kapal tidak ditemukan\"\n                }, {\n                    status: 404\n                });\n            }\n            return NextResponse.json(kapal);\n        } else {\n            const kapals = await _lib_models_Kapal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n            return NextResponse.json({\n                kapals\n            });\n        }\n    } catch (error) {\n        console.error(\"Error fetching kapal:\", error);\n        return NextResponse.json({\n            msg: \"Error fetching kapal data\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const formData = await request.formData();\n        const timestamp = Date.now();\n        const image = formData.get('image');\n        const imageByteData = await image.arrayBuffer();\n        const buffer = Buffer.from(imageByteData);\n        const imagePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\", `${timestamp}_${image.name}`);\n        // Simpan file gambar\n        await (0,fs_promises__WEBPACK_IMPORTED_MODULE_2__.writeFile)(imagePath, buffer);\n        const imgUrl = `${process.env.BASE_URL || 'http://localhost:3000'}/${timestamp}_${image.name}`;\n        // Siapkan data untuk MongoDB\n        const kapalData = {\n            nama_kapal: formData.get(\"nama_kapal\"),\n            kapasitas_muatan: parseInt(formData.get(\"kapasitas_muatan\"), 10),\n            jenis_kapal: formData.get(\"jenis_kapal\"),\n            waktu_terdaftar: new Date(formData.get(\"waktu_terdaftar\")),\n            image: imgUrl\n        };\n        // Simpan ke MongoDB\n        const kapal = await _lib_models_Kapal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(kapalData);\n        console.log(\"Data kapal berhasil disimpan:\", kapal);\n        return NextResponse.json({\n            success: true,\n            msg: \"Kapal Ditambahkan\"\n        });\n    } catch (err) {\n        console.error(\"Error di POST handler:\", err);\n        return NextResponse.json({\n            success: false,\n            msg: \"Gagal menambahkan kapal\"\n        });\n    }\n}\nasync function DELETE(request) {\n    try {\n        const id = request.nextUrl.searchParams.get(\"id\");\n        const kapal = await _lib_models_Kapal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n        if (!kapal) {\n            return NextResponse.json({\n                msg: \"Kapal tidak ditemukan\"\n            }, {\n                status: 404\n            });\n        }\n        if (kapal.image) {\n            const imagePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\", kapal.image);\n            if (fs.existsSync(imagePath)) {\n                fs.unlinkSync(imagePath);\n            }\n        }\n        await _lib_models_Kapal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\n        return NextResponse.json({\n            msg: \"Kapal berhasil dihapus\"\n        });\n    } catch (error) {\n        console.error(\"Error while deleting kapal:\", error);\n        return NextResponse.json({\n            msg: \"Terjadi kesalahan saat menghapus kapal.\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNzQztRQUVuQyxJQUFJLENBQUN2QyxPQUFPO1lBQ1IsT0FBT1osYUFBYWMsSUFBSSxDQUFDO2dCQUFFQyxLQUFLO1lBQXdCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM3RTtRQUVBLElBQUlKLE1BQU1jLEtBQUssRUFBRTtZQUNiLE1BQU1NLFlBQVk1QixnREFBUyxDQUFDOEIsUUFBUUMsR0FBRyxJQUFJLFVBQVV2QixNQUFNYyxLQUFLO1lBQ2hFLElBQUl2QixHQUFHaUQsVUFBVSxDQUFDcEIsWUFBWTtnQkFDMUI3QixHQUFHa0QsVUFBVSxDQUFDckI7WUFDbEI7UUFDSjtRQUVBLE1BQU1qQyx5REFBS0EsQ0FBQ3VELGlCQUFpQixDQUFDSDtRQUM5QixPQUFPbkQsYUFBYWMsSUFBSSxDQUFDO1lBQUVDLEtBQUs7UUFBeUI7SUFDN0QsRUFBRSxPQUFPSSxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQywrQkFBK0JBO1FBQzdDLE9BQU9uQixhQUFhYyxJQUFJLENBQ3BCO1lBQUVDLEtBQUs7UUFBMEMsR0FDakQ7WUFBRUMsUUFBUTtRQUFJO0lBRXRCO0FBQ0oiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQUNFUi1cXE9uZURyaXZlXFxEZXNrdG9wXFxhc2lrXFxhcHBcXGFwaVxca2FwYWxcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3REQiB9IGZyb20gXCJAL2xpYi9jb25maWcvZGJcIjtcclxuaW1wb3J0IEthcGFsIGZyb20gXCJAL2xpYi9tb2RlbHMvS2FwYWxcIjtcclxuY29uc3QgeyBOZXh0UmVzcG9uc2UgfSA9IHJlcXVpcmUoXCJuZXh0L3NlcnZlclwiKTtcclxuaW1wb3J0IHsgd3JpdGVGaWxlIH0gZnJvbSBcImZzL3Byb21pc2VzXCI7XHJcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuY29uc3QgTG9hZERCID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgQ29ubmVjdERCKCk7XHJcbn07XHJcblxyXG5Mb2FkREIoKTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBrYXBhbElkID0gcmVxdWVzdC5uZXh0VXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcclxuICAgICAgICBpZiAoa2FwYWxJZCkge1xyXG4gICAgICAgICAgICBjb25zdCBrYXBhbCA9IGF3YWl0IEthcGFsLmZpbmRCeUlkKGthcGFsSWQpO1xyXG4gICAgICAgICAgICBpZiAoIWthcGFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtc2c6IFwiS2FwYWwgdGlkYWsgZGl0ZW11a2FuXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oa2FwYWwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGthcGFscyA9IGF3YWl0IEthcGFsLmZpbmQoe30pO1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBrYXBhbHMgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcga2FwYWw6XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgIHsgbXNnOiBcIkVycm9yIGZldGNoaW5nIGthcGFsIGRhdGFcIiB9LFxyXG4gICAgICAgICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldCgnaW1hZ2UnKTtcclxuICAgICAgICBjb25zdCBpbWFnZUJ5dGVEYXRhID0gYXdhaXQgaW1hZ2UuYXJyYXlCdWZmZXIoKTtcclxuICAgICAgICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShpbWFnZUJ5dGVEYXRhKTtcclxuICAgICAgICBjb25zdCBpbWFnZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwdWJsaWNcIiwgYCR7dGltZXN0YW1wfV8ke2ltYWdlLm5hbWV9YCk7XHJcblxyXG4gICAgICAgIC8vIFNpbXBhbiBmaWxlIGdhbWJhclxyXG4gICAgICAgIGF3YWl0IHdyaXRlRmlsZShpbWFnZVBhdGgsIGJ1ZmZlcik7XHJcbiAgICAgICAgY29uc3QgaW1nVXJsID0gYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCd9LyR7dGltZXN0YW1wfV8ke2ltYWdlLm5hbWV9YDtcclxuXHJcblxyXG4gICAgICAgIC8vIFNpYXBrYW4gZGF0YSB1bnR1ayBNb25nb0RCXHJcbiAgICAgICAgY29uc3Qga2FwYWxEYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1hX2thcGFsOiBmb3JtRGF0YS5nZXQoXCJuYW1hX2thcGFsXCIpLFxyXG4gICAgICAgICAgICBrYXBhc2l0YXNfbXVhdGFuOiBwYXJzZUludChmb3JtRGF0YS5nZXQoXCJrYXBhc2l0YXNfbXVhdGFuXCIpLCAxMCksXHJcbiAgICAgICAgICAgIGplbmlzX2thcGFsOiBmb3JtRGF0YS5nZXQoXCJqZW5pc19rYXBhbFwiKSxcclxuICAgICAgICAgICAgd2FrdHVfdGVyZGFmdGFyOiBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJ3YWt0dV90ZXJkYWZ0YXJcIikpLFxyXG4gICAgICAgICAgICBpbWFnZTogaW1nVXJsLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIFNpbXBhbiBrZSBNb25nb0RCXHJcbiAgICAgICAgY29uc3Qga2FwYWwgPSBhd2FpdCBLYXBhbC5jcmVhdGUoa2FwYWxEYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGEga2FwYWwgYmVyaGFzaWwgZGlzaW1wYW46XCIsIGthcGFsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbXNnOiBcIkthcGFsIERpdGFtYmFoa2FuXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGkgUE9TVCBoYW5kbGVyOlwiLCBlcnIpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBtc2c6IFwiR2FnYWwgbWVuYW1iYWhrYW4ga2FwYWxcIiB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXF1ZXN0KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gcmVxdWVzdC5uZXh0VXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJpZFwiKTtcclxuICAgICAgICBjb25zdCBrYXBhbCA9IGF3YWl0IEthcGFsLmZpbmRCeUlkKGlkKTtcclxuXHJcbiAgICAgICAgaWYgKCFrYXBhbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtc2c6IFwiS2FwYWwgdGlkYWsgZGl0ZW11a2FuXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChrYXBhbC5pbWFnZSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbWFnZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJwdWJsaWNcIiwga2FwYWwuaW1hZ2UpO1xyXG4gICAgICAgICAgICBpZiAoZnMuZXhpc3RzU3luYyhpbWFnZVBhdGgpKSB7XHJcbiAgICAgICAgICAgICAgICBmcy51bmxpbmtTeW5jKGltYWdlUGF0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF3YWl0IEthcGFsLmZpbmRCeUlkQW5kRGVsZXRlKGlkKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtc2c6IFwiS2FwYWwgYmVyaGFzaWwgZGloYXB1c1wiIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igd2hpbGUgZGVsZXRpbmcga2FwYWw6XCIsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgICAgIHsgbXNnOiBcIlRlcmphZGkga2VzYWxhaGFuIHNhYXQgbWVuZ2hhcHVzIGthcGFsLlwiIH0sXHJcbiAgICAgICAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiQ29ubmVjdERCIiwiS2FwYWwiLCJOZXh0UmVzcG9uc2UiLCJyZXF1aXJlIiwid3JpdGVGaWxlIiwiZnMiLCJwYXRoIiwiTG9hZERCIiwiR0VUIiwicmVxdWVzdCIsImthcGFsSWQiLCJuZXh0VXJsIiwic2VhcmNoUGFyYW1zIiwiZ2V0Iiwia2FwYWwiLCJmaW5kQnlJZCIsImpzb24iLCJtc2ciLCJzdGF0dXMiLCJrYXBhbHMiLCJmaW5kIiwiZXJyb3IiLCJjb25zb2xlIiwiUE9TVCIsImZvcm1EYXRhIiwidGltZXN0YW1wIiwiRGF0ZSIsIm5vdyIsImltYWdlIiwiaW1hZ2VCeXRlRGF0YSIsImFycmF5QnVmZmVyIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImltYWdlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwibmFtZSIsImltZ1VybCIsImVudiIsIkJBU0VfVVJMIiwia2FwYWxEYXRhIiwibmFtYV9rYXBhbCIsImthcGFzaXRhc19tdWF0YW4iLCJwYXJzZUludCIsImplbmlzX2thcGFsIiwid2FrdHVfdGVyZGFmdGFyIiwiY3JlYXRlIiwibG9nIiwic3VjY2VzcyIsImVyciIsIkRFTEVURSIsImlkIiwiZXhpc3RzU3luYyIsInVubGlua1N5bmMiLCJmaW5kQnlJZEFuZERlbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/kapal/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/config/db.js":
/*!**************************!*\
  !*** ./lib/config/db.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConnectDB: () => (/* binding */ ConnectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ConnectDB = async ()=>{\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URL);\n    console.log(\"DB Connected\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvY29uZmlnL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUV6QixNQUFNQyxZQUFZO0lBQ3JCLE1BQU1ELHVEQUFnQixDQUFDRyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7SUFDOUNDLFFBQVFDLEdBQUcsQ0FBQztBQUNoQixFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEFDRVItXFxPbmVEcml2ZVxcRGVza3RvcFxcYXNpa1xcbGliXFxjb25maWdcXGRiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb25uZWN0REIgPSBhc3luYygpID0+e1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSTCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkRCIENvbm5lY3RlZFwiKTtcclxufSJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkNvbm5lY3REQiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkwiLCJjb25zb2xlIiwibG9nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/config/db.js\n");

/***/ }),

/***/ "(rsc)/./lib/models/Kapal.js":
/*!*****************************!*\
  !*** ./lib/models/Kapal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst KapalSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    nama_kapal: {\n        type: String,\n        required: true\n    },\n    kapasitas_muatan: {\n        type: Number,\n        required: true\n    },\n    jenis_kapal: {\n        type: String,\n        required: true\n    },\n    waktu_terdaftar: {\n        type: Date,\n        required: true\n    },\n    image: {\n        type: String,\n        required: true,\n        validate: {\n            validator: function(v) {\n                // Validasi untuk path, tidak harus URL lengkap\n                return /^\\/[a-zA-Z0-9_-]+(\\.jpg|\\.jpeg|\\.png|\\.gif)$/.test(v);\n            },\n            message: (props)=>`${props.value} bukan path gambar yang valid!`\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Kapal || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Kapal', KapalSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9kZWxzL0thcGFsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjLElBQUlELHdEQUFlLENBQUM7SUFDcENHLFlBQVk7UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzNDQyxrQkFBa0I7UUFBRUgsTUFBTUk7UUFBUUYsVUFBVTtJQUFLO0lBQ2pERyxhQUFhO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUM1Q0ksaUJBQWlCO1FBQUVOLE1BQU1PO1FBQU1MLFVBQVU7SUFBSztJQUM5Q00sT0FBTztRQUNMUixNQUFNQztRQUNOQyxVQUFVO1FBQ1ZPLFVBQVU7WUFDUkMsV0FBVyxTQUFVQyxDQUFDO2dCQUNwQiwrQ0FBK0M7Z0JBQy9DLE9BQU8sK0NBQStDQyxJQUFJLENBQUNEO1lBQzdEO1lBQ0FFLFNBQVNDLENBQUFBLFFBQVMsR0FBR0EsTUFBTUMsS0FBSyxDQUFDLDhCQUE4QixDQUFDO1FBQ2xFO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlbkIsd0RBQWUsQ0FBQ3FCLEtBQUssSUFBSXJCLHFEQUFjLENBQUMsU0FBU0MsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxBQ0VSLVxcT25lRHJpdmVcXERlc2t0b3BcXGFzaWtcXGxpYlxcbW9kZWxzXFxLYXBhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgS2FwYWxTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICAgIG5hbWFfa2FwYWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAga2FwYXNpdGFzX211YXRhbjogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBqZW5pc19rYXBhbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICB3YWt0dV90ZXJkYWZ0YXI6IHsgdHlwZTogRGF0ZSwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGltYWdlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHZhbGlkYXRlOiB7XHJcbiAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbiAodikge1xyXG4gICAgICAgICAgLy8gVmFsaWRhc2kgdW50dWsgcGF0aCwgdGlkYWsgaGFydXMgVVJMIGxlbmdrYXBcclxuICAgICAgICAgIHJldHVybiAvXlxcL1thLXpBLVowLTlfLV0rKFxcLmpwZ3xcXC5qcGVnfFxcLnBuZ3xcXC5naWYpJC8udGVzdCh2KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lc3NhZ2U6IHByb3BzID0+IGAke3Byb3BzLnZhbHVlfSBidWthbiBwYXRoIGdhbWJhciB5YW5nIHZhbGlkIWBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5LYXBhbCB8fCBtb25nb29zZS5tb2RlbCgnS2FwYWwnLCBLYXBhbFNjaGVtYSk7XHJcbiAgXHJcbiAgXHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIkthcGFsU2NoZW1hIiwiU2NoZW1hIiwibmFtYV9rYXBhbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImthcGFzaXRhc19tdWF0YW4iLCJOdW1iZXIiLCJqZW5pc19rYXBhbCIsIndha3R1X3RlcmRhZnRhciIsIkRhdGUiLCJpbWFnZSIsInZhbGlkYXRlIiwidmFsaWRhdG9yIiwidiIsInRlc3QiLCJtZXNzYWdlIiwicHJvcHMiLCJ2YWx1ZSIsIm1vZGVscyIsIkthcGFsIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/models/Kapal.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fkapal%2Froute&page=%2Fapi%2Fkapal%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fkapal%2Froute.js&appDir=C%3A%5CUsers%5CACER-%5COneDrive%5CDesktop%5Casik%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CACER-%5COneDrive%5CDesktop%5Casik&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();