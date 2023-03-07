import { h } from '../evestcomponents.core.js';

class EveStCheckbox {
    constructor() {
        this.checked = false;
        this.errors = '';
    }
    getClasses() {
        return {
            'eve-input-checkbox': true,
            'checkmark': true,
            'success-checkbox': this.color === 'success',
            'info-checkbox': this.color === 'info',
            'warning-checkbox': this.color === 'warning',
            'danger-checkbox': this.color === 'danger',
        };
    }
    getStyles() {
        return {
            'background-color': this.customcolor,
            'border-color': this.customcolor,
            'color': this.customcolor
        };
    }
    getClassesError() {
        return {
            'error-message': this.errors.length ? true : false,
        };
    }
    getStylesError() {
        return {
            'color': this.customcolorerror
        };
    }
    elementClickHandler() {
        if (this.disabled === false) {
            this.onChange.emit(!this.checked);
        }
    }
    render() {
        return h("label", { class: "eve-ng-checkbox" },
            this.label,
            h("input", { id: this.name, name: this.name, type: "checkbox" }),
            h("span", { class: this.getClasses(), style: this.getStyles() }),
            h("div", { class: this.getClassesError(), style: this.getStylesError() }, this.errors));
    }
    static get is() { return "eve-st-checkbox"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "checked": {
            "type": Boolean,
            "attr": "checked",
            "mutable": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "customcolor": {
            "type": String,
            "attr": "customcolor"
        },
        "customcolorerror": {
            "type": String,
            "attr": "customcolorerror"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "errors": {
            "type": String,
            "attr": "errors"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "name": {
            "type": String,
            "attr": "name"
        }
    }; }
    static get events() { return [{
            "name": "onChange",
            "method": "onChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "click",
            "method": "elementClickHandler"
        }]; }
    static get style() { return ".sc-eve-st-checkbox::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}.sc-eve-st-checkbox::-webkit-scrollbar{width:3px;background-color:#f5f5f5}.sc-eve-st-checkbox::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}.sc-eve-st-checkbox-h{height:22px}.eve-ng-checkbox.sc-eve-st-checkbox{position:relative;height:20px;padding-left:28px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.eve-ng-checkbox.sc-eve-st-checkbox   .error-message.sc-eve-st-checkbox{color:#e24d4d;font-size:12px}.eve-ng-checkbox.sc-eve-st-checkbox   input.sc-eve-st-checkbox{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkmark.sc-eve-st-checkbox{position:absolute;top:0;left:0;height:22px;width:22px;background-color:#eee;border-radius:4px}.eve-ng-checkbox.sc-eve-st-checkbox:hover   input.sc-eve-st-checkbox ~ .checkmark.sc-eve-st-checkbox{background-color:#ccc}.eve-ng-checkbox.sc-eve-st-checkbox   input.sc-eve-st-checkbox:checked ~ .checkmark.sc-eve-st-checkbox{background-color:main-color(500)}.eve-ng-checkbox.sc-eve-st-checkbox   input.sc-eve-st-checkbox:checked ~ .checkmark.success-checkbox.sc-eve-st-checkbox{background:#5bc500}.eve-ng-checkbox.sc-eve-st-checkbox   input.sc-eve-st-checkbox:checked ~ .checkmark.info-checkbox.sc-eve-st-checkbox{background:#00a9e0}.eve-ng-checkbox.sc-eve-st-checkbox   input.sc-eve-st-checkbox:checked ~ .checkmark.warning-checkbox.sc-eve-st-checkbox{background:#ffb74d}.eve-ng-checkbox.sc-eve-st-checkbox   input.sc-eve-st-checkbox:checked ~ .checkmark.danger-checkbox.sc-eve-st-checkbox{background:#e24d4d}.checkmark.sc-eve-st-checkbox:after{content:\"\";position:absolute;display:none}.eve-ng-checkbox.sc-eve-st-checkbox   input.sc-eve-st-checkbox:checked ~ .checkmark.sc-eve-st-checkbox:after{display:block}.eve-ng-checkbox.sc-eve-st-checkbox   .checkmark.sc-eve-st-checkbox:after{left:7px;top:1px;width:6px;height:14px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}"; }
}

export { EveStCheckbox };
