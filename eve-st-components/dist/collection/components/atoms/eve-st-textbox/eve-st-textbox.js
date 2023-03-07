export class eveStTextBox {
    constructor() {
        this.elFocus = false;
        this.type = 'text';
        this.color = '';
        this.textcolor = '';
        this.customcolor = '';
        this.customcolorerror = '';
        this.disabled = false;
        this.errors = '';
        this.usepattern = '';
        this.getPlaceHolder();
    }
    getInputClasses() {
        return {
            'disable_input': this.disabled,
        };
    }
    getInputStyles() {
        return {
            'color': this.textcolor,
        };
    }
    getLabelClasses() {
        return {
            'eve-texbox ': true,
            'success': this.color === 'success',
            'info': this.color === 'info',
            'warning': this.color === 'warning',
            'danger': this.color === 'danger',
            'label_fade': !this.elFocus,
            'disable_input': this.disabled,
        };
    }
    getStyles() {
        return {
            'border-color': this.customcolor,
            'color': this.customcolor,
        };
    }
    getBarClasses() {
        return {
            'bar ': true,
            'success': this.color === 'success',
            'info': this.color === 'info',
            'warning': this.color === 'warning',
            'danger': this.color === 'danger',
            'disable_input': this.disabled,
            'input_focus': this.elFocus,
        };
    }
    getBarStyles() {
        return {
            'background-color': this.customcolor,
        };
    }
    getClassesError() {
        return {
            'error-message': this.errors.length > 0,
        };
    }
    getStylesError() {
        return {
            'color': this.customcolorerror
        };
    }
    onInputChanged(e) {
        e.stopPropagation();
        this.value = e.target && e.target.value;
        this.onChange.emit(e.target.value);
    }
    onInputBlur(e) {
        e.stopPropagation();
        this.elFocus = false;
        this.value = e.target && e.target.value;
        this.onBlur.emit(this.value);
    }
    onInputFocus(e) {
        e.stopPropagation();
        this.elFocus = true;
        this.value = e.target && e.target.value;
        this.onFocus.emit(this.value);
    }
    getPlaceHolder() {
        return !this.elFocus ? this.placeholder : '';
    }
    handleKeyPress(e) {
        const current = this.value;
        const keyPressed = String(e.key);
        const textToEvaluate = current.concat(keyPressed);
        const regex = new RegExp(/^\d*\.?\d{0,2}$/g);
        const isValid = regex.test(textToEvaluate);
        if (!isValid) {
            e.preventDefault();
        }
    }
    render() {
        return h("div", { class: "eve-texbox" },
            h("label", { class: this.getLabelClasses(), style: this.getStyles() }, this.label),
            h("div", { class: "input-grapper" },
                h("slot", { name: "item-left" }),
                h("input", { disabled: this.disabled, type: this.type, autocomplete: "off", id: this.name, name: this.name, placeholder: this.getPlaceHolder(), value: this.value, onInput: e => this.onInputChanged(e), onBlur: e => this.onInputBlur(e), onFocus: e => this.onInputFocus(e), class: this.getInputClasses(), style: this.getInputStyles() }),
                h("slot", { name: "item-right" })),
            h("div", { class: this.getBarClasses(), style: this.getBarStyles() }),
            h("div", { class: "error-message", style: this.getStylesError() }, this.errors));
    }
    static get is() { return "eve-st-textbox"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
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
            "attr": "disabled",
            "mutable": true
        },
        "elFocus": {
            "state": true
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
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "textcolor": {
            "type": String,
            "attr": "textcolor"
        },
        "type": {
            "type": String,
            "attr": "type",
            "mutable": true
        },
        "usepattern": {
            "type": String,
            "attr": "usepattern"
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "onChange",
            "method": "onChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "onBlur",
            "method": "onBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "onFocus",
            "method": "onFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "keypress",
            "method": "handleKeyPress"
        }]; }
    static get style() { return "/**style-placeholder:eve-st-textbox:**/"; }
}
