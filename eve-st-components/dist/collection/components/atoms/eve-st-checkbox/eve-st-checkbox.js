export class EveStCheckbox {
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
    static get style() { return "/**style-placeholder:eve-st-checkbox:**/"; }
}
