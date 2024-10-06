import {
  require_t4_templating
} from "/myst_assets_folder/_shared/chunk-BXI5BGHH.js";
import {
  require_vbnet
} from "/myst_assets_folder/_shared/chunk-LJP5HWRN.js";
import {
  __commonJS
} from "/myst_assets_folder/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/refractor/lang/t4-vb.js
var require_t4_vb = __commonJS({
  "../../node_modules/refractor/lang/t4-vb.js"(exports, module) {
    var refractorT4Templating = require_t4_templating();
    var refractorVbnet = require_vbnet();
    module.exports = t4Vb;
    t4Vb.displayName = "t4Vb";
    t4Vb.aliases = [];
    function t4Vb(Prism) {
      Prism.register(refractorT4Templating);
      Prism.register(refractorVbnet);
      Prism.languages["t4-vb"] = Prism.languages["t4-templating"].createT4("vbnet");
    }
  }
});

export {
  require_t4_vb
};
//# sourceMappingURL=/myst_assets_folder/_shared/chunk-7MEDNH3R.js.map
