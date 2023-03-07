"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var evestcomponents_core_js_1 = require("../evestcomponents.core.js");
var EveStModal = function () { function o() { this.show = !0; } return o.prototype.hostData = function () { return { class: "flex_100" }; }, o.prototype.getClasses = function () { return { "eve-modal": !0, success: "success" === this.color, info: "info" === this.color, warning: "warning" === this.color, danger: "danger" === this.color, purple: "purple" === this.color, custom: !!this.customcolor }; }, o.prototype.getStyles = function () { return { "background-color": this.customcolor, "border-color": this.customcolor, color: this.customcolor, display: this.show ? "block" : "none" }; }, o.prototype.onCloseEvent = function () { this.onClose.emit(); }, o.prototype.render = function () { var o = this; return evestcomponents_core_js_1.h("div", { class: this.getClasses(), style: this.getStyles() }, evestcomponents_core_js_1.h("div", { class: "modal-content" }, evestcomponents_core_js_1.h("div", { class: "header info" }, evestcomponents_core_js_1.h("slot", { name: "modal-header" }), evestcomponents_core_js_1.h("slot", null), evestcomponents_core_js_1.h("ion-icon", { class: "close_icon", name: "close", onClick: function (e) { return o.onCloseEvent(); } })), evestcomponents_core_js_1.h("div", { class: "content" }, evestcomponents_core_js_1.h("slot", { name: "modal-body" }), evestcomponents_core_js_1.h("slot", null)), evestcomponents_core_js_1.h("div", { class: "footer" }, evestcomponents_core_js_1.h("slot", { name: "modal-footer" }), evestcomponents_core_js_1.h("slot", null)))); }, Object.defineProperty(o, "is", { get: function () { return "eve-st-modal"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(o, "encapsulation", { get: function () { return "shadow"; }, enumerable: !0, configurable: !0 }), Object.defineProperty(o, "properties", { get: function () { return { color: { type: String, attr: "color" }, customcolor: { type: String, attr: "customcolor" }, show: { type: Boolean, attr: "show" } }; }, enumerable: !0, configurable: !0 }), Object.defineProperty(o, "events", { get: function () { return [{ name: "onClose", method: "onClose", bubbles: !0, cancelable: !0, composed: !0 }]; }, enumerable: !0, configurable: !0 }), Object.defineProperty(o, "style", { get: function () { return "::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}::-webkit-scrollbar{width:3px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}.flex_100{-ms-flex:100%;flex:100%}.eve-modal{position:fixed;left:50%;top:50%;z-index:120;width:100%;overflow:auto;min-height:124px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.eve-modal .modal-content{background-color:#fefefe;margin:auto;width:80%;border-radius:25px;border-top-right-radius:0;border-top-left-radius:0}.eve-modal .modal-content .content,.eve-modal .modal-content .footer{padding:16px}.eve-modal .modal-content .header{position:relative;padding:16px}.eve-modal .modal-content .header .close_icon{position:absolute;right:16px;top:18px}.eve-modal .modal-content .header.success{color:#fff;background-color:#5bc500}.eve-modal .modal-content .header.info{color:#fff;background-color:#00a9e0}.eve-modal .modal-content .header.warning{color:#fff;background-color:#ffb74d}.eve-modal .modal-content .header.danger{color:#fff;background-color:#e24d4d}.eve-modal .modal-content .header.purple{color:#fff;background:#954897}"; }, enumerable: !0, configurable: !0 }), o; }();
exports.EveStModal = EveStModal;