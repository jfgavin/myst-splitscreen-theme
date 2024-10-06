import {
  AppCatchBoundary,
  ContentReload,
  Document,
  SkipTo,
  getMetaTagsForSite,
  require_loaders
} from "/myst_assets_folder/_shared/chunk-A7NUFDB7.js";
import "/myst_assets_folder/_shared/chunk-WYS2FUD5.js";
import "/myst_assets_folder/_shared/chunk-GMJYAADD.js";
import "/myst_assets_folder/_shared/chunk-D7IISHX5.js";
import "/myst_assets_folder/_shared/chunk-KAB4N37T.js";
import "/myst_assets_folder/_shared/chunk-6S3SPRRW.js";
import "/myst_assets_folder/_shared/chunk-XJ2I6HXP.js";
import "/myst_assets_folder/_shared/chunk-44FAGZWP.js";
import "/myst_assets_folder/_shared/chunk-MQHORMXT.js";
import "/myst_assets_folder/_shared/chunk-54HHBP5N.js";
import "/myst_assets_folder/_shared/chunk-LPSXN4QV.js";
import {
  Outlet,
  require_jsx_dev_runtime,
  useLoaderData
} from "/myst_assets_folder/_shared/chunk-JGXWLEDJ.js";
import "/myst_assets_folder/_shared/chunk-SMG2HPMX.js";
import {
  __toESM
} from "/myst_assets_folder/_shared/chunk-D5NAPBYJ.js";

// app/styles/app.css
var app_default = "/myst_assets_folder/_assets/app-YVLPXDO2.css";

// ../../node_modules/thebe-core/dist/lib/thebe-core.css
var thebe_core_default = "/myst_assets_folder/_assets/thebe-core-F4H442J4.css";

// app/root.tsx
var import_loaders = __toESM(require_loaders());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = ({ data }) => {
  var _a, _b, _c, _d;
  return getMetaTagsForSite({
    title: (_a = data == null ? void 0 : data.config) == null ? void 0 : _a.title,
    description: (_b = data == null ? void 0 : data.config) == null ? void 0 : _b.description,
    twitter: (_d = (_c = data == null ? void 0 : data.config) == null ? void 0 : _c.options) == null ? void 0 : _d.twitter
  });
};
var links = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.ico"
    },
    { rel: "stylesheet", href: app_default },
    { rel: "stylesheet", href: thebe_core_default },
    { rel: "stylesheet", href: "/myst-theme.css" },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/jupyter-matplotlib@0.11.3/css/mpl_widget.css"
    },
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
    }
  ];
};
function AppWithReload() {
  const { theme, config, CONTENT_CDN_PORT, MODE, BASE_URL } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Document,
    {
      theme,
      config,
      scripts: MODE === "static" ? void 0 : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContentReload, { port: CONTENT_CDN_PORT }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 48
      }, this),
      staticBuild: MODE === "static",
      baseurl: BASE_URL,
      top: 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          SkipTo,
          {
            targets: [
              { id: "skip-to-frontmatter", title: "Skip to article frontmatter" },
              { id: "skip-to-article", title: "Skip to article content" }
            ]
          },
          void 0,
          false,
          {
            fileName: "app/root.tsx",
            lineNumber: 72,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/root.tsx",
      lineNumber: 64,
      columnNumber: 5
    },
    this
  );
}
export {
  AppCatchBoundary as CatchBoundary,
  AppWithReload as default,
  links,
  meta
};
//# sourceMappingURL=/myst_assets_folder/root-BCBSNTY3.js.map
