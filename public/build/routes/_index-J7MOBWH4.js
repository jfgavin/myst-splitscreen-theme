import {
  KatexCSS,
  Page
} from "/myst_assets_folder/_shared/chunk-OUG5GTB7.js";
import "/myst_assets_folder/_shared/chunk-CNS63BWT.js";
import {
  getMetaTagsForArticle,
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
import "/myst_assets_folder/_shared/chunk-JGXWLEDJ.js";
import "/myst_assets_folder/_shared/chunk-SMG2HPMX.js";
import {
  __toESM
} from "/myst_assets_folder/_shared/chunk-D5NAPBYJ.js";

// app/routes/_index.tsx
var import_loaders = __toESM(require_loaders());
var meta = ({ data, location }) => {
  var _a, _b, _c, _d, _e, _f, _g;
  if (!data)
    return [];
  const config = data.config;
  const project = data.project;
  return getMetaTagsForArticle({
    origin: "",
    url: location.pathname,
    title: (_a = config == null ? void 0 : config.title) != null ? _a : project.title,
    description: (_c = (_b = config.description) != null ? _b : project.description) != null ? _c : void 0,
    image: (_d = project.thumbnailOptimized || project.thumbnail) != null ? _d : void 0,
    keywords: (_f = (_e = config.keywords) != null ? _e : project.keywords) != null ? _f : [],
    twitter: (_g = config == null ? void 0 : config.options) == null ? void 0 : _g.twitter
  });
};
var links = () => [KatexCSS];
var index_default = Page;
export {
  index_default as default,
  links,
  meta
};
//# sourceMappingURL=/myst_assets_folder/routes/_index-J7MOBWH4.js.map
