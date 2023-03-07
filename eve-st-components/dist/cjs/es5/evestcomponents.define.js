"use strict";
// evestcomponents: Custom Elements Define Library, ES Module/es5 Target
Object.defineProperty(exports, "__esModule", { value: true });
var evestcomponents_core_js_1 = require("./evestcomponents.core.js");
var evestcomponents_components_js_1 = require("./evestcomponents.components.js");
function defineCustomElements(win, opts) {
    return evestcomponents_core_js_1.defineCustomElement(win, evestcomponents_components_js_1.COMPONENTS, opts);
}
exports.defineCustomElements = defineCustomElements;
