import {
  RemixBrowser,
  require_jsx_dev_runtime
} from "/myst_assets_folder/_shared/chunk-JGXWLEDJ.js";
import {
  require_client,
  require_react
} from "/myst_assets_folder/_shared/chunk-SMG2HPMX.js";
import {
  __toESM
} from "/myst_assets_folder/_shared/chunk-D5NAPBYJ.js";

// app/entry.client.tsx
var import_react2 = __toESM(require_react());
var import_client = __toESM(require_client());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function hydrate() {
  (0, import_react2.startTransition)(() => {
    (0, import_client.hydrateRoot)(
      document,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/entry.client.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this)
    );
  });
}
if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  window.setTimeout(hydrate, 1);
}
//# sourceMappingURL=/myst_assets_folder/entry.client-B6QAAZPT.js.map
