import {
  normalizeLabel
} from "/myst_assets_folder/_shared/chunk-MQHORMXT.js";
import "/myst_assets_folder/_shared/chunk-LPSXN4QV.js";
import "/myst_assets_folder/_shared/chunk-D5NAPBYJ.js";

// ../../node_modules/myst-ext-proof/dist/proof.js
var proofDirective = {
  name: "proof",
  alias: [
    "prf:proof",
    "prf:theorem",
    "prf:axiom",
    "prf:lemma",
    "prf:definition",
    "prf:criterion",
    "prf:remark",
    "prf:conjecture",
    "prf:corollary",
    "prf:algorithm",
    "prf:example",
    "prf:property",
    "prf:observation",
    "prf:proposition",
    "prf:assumption"
  ],
  arg: {
    type: "myst"
  },
  options: {
    label: {
      type: String,
      alias: ["name"]
    },
    class: {
      type: String
    },
    nonumber: {
      type: Boolean
    }
  },
  body: {
    type: "myst",
    required: true
  },
  run(data) {
    var _a, _b, _c, _d;
    const children = [];
    if (data.arg) {
      children.push({
        type: "admonitionTitle",
        children: data.arg
      });
    }
    if (data.body) {
      children.push(...data.body);
    }
    const nonumber = (_b = (_a = data.options) === null || _a === void 0 ? void 0 : _a.nonumber) !== null && _b !== void 0 ? _b : false;
    const rawLabel = (_c = data.options) === null || _c === void 0 ? void 0 : _c.label;
    const { label, identifier } = normalizeLabel(rawLabel) || {};
    const proof = {
      type: "proof",
      kind: data.name !== "proof" ? data.name.replace("prf:", "") : void 0,
      label,
      identifier,
      class: (_d = data.options) === null || _d === void 0 ? void 0 : _d.class,
      enumerated: !nonumber,
      children
    };
    return [proof];
  }
};
export {
  proofDirective
};
//# sourceMappingURL=/myst_assets_folder/_shared/dist-T5SKRHXN.js.map
