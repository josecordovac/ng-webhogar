import { h } from '../evestcomponents.core.js';

class eveTsButton {
    constructor() {
        this.id = '';
        this.label = '';
        this.color = 'success';
        this.disabled = false;
        this.onClickEvent = () => {
            this.onClick.emit({ id: this.id });
        };
        this.onFocusEvent = () => {
            this.onFocus.emit({ id: this.id });
        };
        this.onBlurEvent = () => {
            this.onBlur.emit({ id: this.id });
        };
    }
    getClasses() {
        return {
            'eve-button': true,
            'success': this.color === 'success',
            'info': this.color === 'info',
            'warning': this.color === 'warning',
            'danger': this.color === 'danger',
            'custom-color': !!this.customcolor,
            'outline': this.type === 'outline',
        };
    }
    getStyles() {
        return {
            'color': this.customcolor,
            'background-color': this.customcolor,
            'border-color': this.customcolor,
            'border-radius': this.borderradius,
            'height': this.height,
        };
    }
    isDisabled(value) {
        if (typeof value == 'boolean') {
            console.log('true');
            return value;
        }
        console.log('false');
        return false;
    }
    render() {
        const { isDisabled } = this;
        return (h("button", { type: "button", class: this.getClasses(), style: this.getStyles(), onClick: _ => this.onClickEvent(), onFocus: _ => this.onFocusEvent(), onBlur: _ => this.onBlurEvent(), disabled: isDisabled(this.disabled) },
            h("slot", { name: "image-left" }),
            this.label,
            h("slot", { name: "image-right" }),
            h("slot", null)));
    }
    static get is() { return "eve-st-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "borderradius": {
            "type": String,
            "attr": "borderradius"
        },
        "color": {
            "type": String,
            "attr": "color",
            "mutable": true
        },
        "customcolor": {
            "type": String,
            "attr": "customcolor"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "mutable": true
        },
        "height": {
            "type": String,
            "attr": "height"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get events() { return [{
            "name": "onClick",
            "method": "onClick",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "onFocus",
            "method": "onFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "onBlur",
            "method": "onBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-eve-st-button::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}.sc-eve-st-button::-webkit-scrollbar{width:3px;background-color:#f5f5f5}.sc-eve-st-button::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}.eve-button.sc-eve-st-button{background:#5bc500;border:.0625rem solid transparent;cursor:pointer;color:#fff;height:45px;width:200px;font-size:16px;font-weight:bolder;border-radius:4px;width:100%}.eve-button.sc-eve-st-button   button.sc-eve-st-button:disabled{cursor:auto;pointer-events:none}.eve-button.sc-eve-st-button   button.sc-eve-st-button:focus{outline:none}.eve-button.border-radius.sc-eve-st-button{border-radius:3px}.eve-button.success.sc-eve-st-button{background:#5bc500;border-color:#5bc500}.eve-button.success.sc-eve-st-button:disabled{-webkit-filter:brightness(90%);filter:brightness(90%)}.eve-button.success.sc-eve-st-button:hover:not(:disabled){-webkit-filter:brightness(110%);filter:brightness(110%)}.eve-button.info.sc-eve-st-button{background:#00a9e0;border-color:#00a9e0}.eve-button.info.sc-eve-st-button:disabled{-webkit-filter:brightness(90%);filter:brightness(90%)}.eve-button.info.sc-eve-st-button:hover:not(:disabled){-webkit-filter:brightness(110%);filter:brightness(110%)}.eve-button.warning.sc-eve-st-button{background:#ffb74d;border-color:#ffb74d}.eve-button.warning.sc-eve-st-button:disabled{-webkit-filter:brightness(90%);filter:brightness(90%)}.eve-button.warning.sc-eve-st-button:hover:not(:disabled){-webkit-filter:brightness(110%);filter:brightness(110%)}.eve-button.danger.sc-eve-st-button{background:#e24d4d;border-color:#e24d4d}.eve-button.danger.sc-eve-st-button:disabled{-webkit-filter:brightness(90%);filter:brightness(90%)}.eve-button.danger.sc-eve-st-button:hover:not(:disabled){-webkit-filter:brightness(110%);filter:brightness(110%)}.eve-button.custom-color.sc-eve-st-button:disabled{-webkit-filter:brightness(90%);filter:brightness(90%)}.eve-button.custom-color.sc-eve-st-button:hover:not(:disabled){-webkit-filter:brightness(110%);filter:brightness(110%)}.eve-button.outline.sc-eve-st-button{background:none!important;color:inherit}.eve-button.outline.success.sc-eve-st-button{color:#5bc500}.eve-button.outline.success.sc-eve-st-button:disabled{-webkit-filter:brightness(90%);filter:brightness(90%)}.eve-button.outline.success.sc-eve-st-button:hover:not(:disabled){-webkit-filter:brightness(110%);filter:brightness(110%)}.eve-button.outline.info.sc-eve-st-button{color:#00a9e0}.eve-button.outline.info.sc-eve-st-button:disabled{-webkit-filter:brightness(90%);filter:brightness(90%)}.eve-button.outline.info.sc-eve-st-button:hover:not(:disabled){-webkit-filter:brightness(110%);filter:brightness(110%)}.eve-button.outline.warning.sc-eve-st-button{color:#ffb74d}.eve-button.outline.warning.sc-eve-st-button:disabled{-webkit-filter:brightness(90%);filter:brightness(90%)}.eve-button.outline.warning.sc-eve-st-button:hover:not(:disabled){-webkit-filter:brightness(110%);filter:brightness(110%)}.eve-button.outline.danger.sc-eve-st-button{color:#e24d4d}.eve-button.outline.danger.sc-eve-st-button:disabled{-webkit-filter:brightness(90%);filter:brightness(90%)}.eve-button.outline.danger.sc-eve-st-button:hover:not(:disabled){-webkit-filter:brightness(110%);filter:brightness(110%)}.eve-button.outline.custom-color.sc-eve-st-button:disabled{color:#fcc!important;border:.0625rem solid #fcc!important;background:#fff!important}.eve-button.outline.custom-color.sc-eve-st-button:hover:not(:disabled){border:.0625rem solid #fcc!important;background:#fcc!important}.eve-button.custom-color.sc-eve-st-button:not(.outline){color:#fff!important}.eve-button.sc-eve-st-button   .ripple.sc-eve-st-button{border-radius:50%;background:rgba(0,0,0,.2);-webkit-transform:scale(0);transform:scale(0);position:absolute;opacity:1;-webkit-animation:rippleDrop .4s linear;animation:rippleDrop .4s linear}\@-webkit-keyframes rippleDrop{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}\@keyframes rippleDrop{to{-webkit-transform:scale(2);transform:scale(2);opacity:0}}"; }
}

class AppHome {
    render() {
        return h("div", null,
            h("ion-grid", null,
                h("ion-row", null,
                    h("ion-col", { "size-sm-8": true, "offset-sm-2": true, "sixe-sm": true, "sixe-xs": true },
                        h("p", { class: "sub_title" }, "TDP - Proceso de Transformaci\u00F3n Digital Tel\u00E9fornica"))),
                h("ion-row", null,
                    h("ion-col", { "size-12": true },
                        h("eve-st-textbox", { color: "success", name: "Success", label: "Usuario", placeholder: "Usuario" }),
                        h("eve-st-textbox", { color: "success", name: "Success", label: "Clave", placeholder: "Clave" }))),
                h("ion-row", null,
                    h("ion-col", { "size-sm-8": true, "offset-sm-2": true, "sixe-sm": true, "sixe-xs": true },
                        h("eve-st-button", { label: "Registrar", color: "info", type: "outline", borderradius: "26px" })),
                    h("ion-col", { "size-sm": "4", "sixe-sm": true, "sixe-xs": true },
                        h("eve-st-button", { label: "Entrar", color: "success", type: "outline", borderradius: "26px" })))));
    }
    static get is() { return "eve-st-login-standard"; }
    static get style() { return ""; }
}

class eveStTextBox {
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
    static get style() { return ".sc-eve-st-textbox::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}.sc-eve-st-textbox::-webkit-scrollbar{width:3px;background-color:#f5f5f5}.sc-eve-st-textbox::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}.sc-eve-st-textbox-h{width:100%;padding-bottom:8px}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox{-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .error-message.sc-eve-st-textbox{height:16px;color:#e24d4d;font-size:16px}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   input.sc-eve-st-textbox, .sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   label.sc-eve-st-textbox, .sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   textarea.sc-eve-st-textbox{display:block;border:0}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input_icon_left.sc-eve-st-textbox{position:absolute;left:16px}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input_icon_right.sc-eve-st-textbox{position:absolute;right:16px}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   input.sc-eve-st-textbox, .sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   textarea.sc-eve-st-textbox{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:16px;font-family:Josefin Sans,sans-serif;width:100%;height:24px;background-color:transparent;outline:none;color:#666c7e}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   input.input_padding_left.sc-eve-st-textbox, .sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   textarea.input_padding_left.sc-eve-st-textbox{padding-left:32px}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   input.input_padding_right.sc-eve-st-textbox, .sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   textarea.input_padding_right.sc-eve-st-textbox{padding-right:32px}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   input.disable_input.sc-eve-st-textbox, .sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   textarea.disable_input.sc-eve-st-textbox{background-color:#fff}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   input.disable_input.sc-eve-st-textbox::-webkit-input-placeholder, .sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   textarea.disable_input.sc-eve-st-textbox::-webkit-input-placeholder{color:#fcc;opacity:1}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   input.disable_input.sc-eve-st-textbox:-ms-input-placeholder, .sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   textarea.disable_input.sc-eve-st-textbox:-ms-input-placeholder{color:#fcc;opacity:1}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   input.disable_input.sc-eve-st-textbox::-ms-input-placeholder, .sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   textarea.disable_input.sc-eve-st-textbox::-ms-input-placeholder{opacity:1}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   input.disable_input.sc-eve-st-textbox::placeholder, .sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   textarea.disable_input.sc-eve-st-textbox::placeholder{color:#fcc;opacity:1}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   input.disable_input.sc-eve-st-textbox::-ms-input-placeholder, .sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   textarea.disable_input.sc-eve-st-textbox::-ms-input-placeholder{color:#fcc}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .input-grapper.sc-eve-st-textbox   textarea.sc-eve-st-textbox{height:16em;resize:none}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   label.sc-eve-st-textbox{position:relative;top:0;font-size:16px;font-family:Josefin Sans,sans-serif;line-height:16px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;color:#5bc500;opacity:1}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   label.success.sc-eve-st-textbox{color:#5bc500}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   label.info.sc-eve-st-textbox{color:#00a9e0}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   label.warning.sc-eve-st-textbox{color:#ffb74d}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   label.danger.sc-eve-st-textbox{color:#e24d4d}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   label.label_fade.sc-eve-st-textbox{top:8px;opacity:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translateY(8);transform:translateY(8)}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   label.disable_input.sc-eve-st-textbox{color:#fcc}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .bar.sc-eve-st-textbox{min-height:1px;background-color:#666c7e;width:100%}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .bar.input_focus.sc-eve-st-textbox{-webkit-transform:scaleY(1.6);transform:scaleY(1.6);-webkit-transition:all .3s ease-in;transition:all .3s ease-in}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .bar.success.sc-eve-st-textbox{background-color:#5bc500}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .bar.info.sc-eve-st-textbox{background-color:#00a9e0}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .bar.warning.sc-eve-st-textbox{background-color:#ffb74d}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .bar.danger.sc-eve-st-textbox{background-color:#e24d4d}.sc-eve-st-textbox-h   .eve-texbox.sc-eve-st-textbox   .bar.disable_input.sc-eve-st-textbox{background-color:#fcc}"; }
}

const SIZE_TO_MEDIA = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
};
function matchBreakpoint(win, breakpoint) {
    if (breakpoint === undefined || breakpoint === '') {
        return true;
    }
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return win.matchMedia(mediaQuery).matches;
}

const win = window;
const SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports("--a: 0"));
const BREAKPOINTS = ["", "xs", "sm", "md", "lg", "xl"];
class Col {
    onResize() {
        this.el.forceUpdate();
    }
    getColumns(property) {
        let matched;
        for (const breakpoint of BREAKPOINTS) {
            const matches = matchBreakpoint(this.win, breakpoint);
            const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
            if (matches && columns !== undefined) {
                matched = columns;
            }
        }
        return matched;
    }
    calculateSize() {
        const columns = this.getColumns("size");
        if (!columns || columns === "") {
            return;
        }
        const colSize = (columns === "auto")
            ? "auto"
            : SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
                : ((columns / 12) * 100) + "%";
        return {
            "flex": `0 0 ${colSize}`,
            "width": `${colSize}`,
            "max-width": `${colSize}`
        };
    }
    calculatePosition(property, modifier) {
        const columns = this.getColumns(property);
        if (!columns) {
            return;
        }
        const amount = SUPPORTS_VARS
            ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
            : (columns > 0 && columns < 12) ? (columns / 12 * 100) + "%" : "auto";
        return {
            [modifier]: amount
        };
    }
    calculateOffset() {
        const isRTL = document.dir === "rtl";
        return this.calculatePosition("offset", isRTL ? "margin-right" : "margin-left");
    }
    calculatePull() {
        const isRTL = document.dir === "rtl";
        return this.calculatePosition("pull", isRTL ? "left" : "right");
    }
    calculatePush() {
        const isRTL = document.dir === "rtl";
        return this.calculatePosition("push", isRTL ? "right" : "left");
    }
    hostData() {
        return {
            style: Object.assign({}, this.calculateOffset(), this.calculatePull(), this.calculatePush(), this.calculateSize())
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-col"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "el": {
                "elementRef": true
            },
            "offset": {
                "type": String,
                "attr": "offset"
            },
            "offsetLg": {
                "type": String,
                "attr": "offset-lg"
            },
            "offsetMd": {
                "type": String,
                "attr": "offset-md"
            },
            "offsetSm": {
                "type": String,
                "attr": "offset-sm"
            },
            "offsetXl": {
                "type": String,
                "attr": "offset-xl"
            },
            "offsetXs": {
                "type": String,
                "attr": "offset-xs"
            },
            "pull": {
                "type": String,
                "attr": "pull"
            },
            "pullLg": {
                "type": String,
                "attr": "pull-lg"
            },
            "pullMd": {
                "type": String,
                "attr": "pull-md"
            },
            "pullSm": {
                "type": String,
                "attr": "pull-sm"
            },
            "pullXl": {
                "type": String,
                "attr": "pull-xl"
            },
            "pullXs": {
                "type": String,
                "attr": "pull-xs"
            },
            "push": {
                "type": String,
                "attr": "push"
            },
            "pushLg": {
                "type": String,
                "attr": "push-lg"
            },
            "pushMd": {
                "type": String,
                "attr": "push-md"
            },
            "pushSm": {
                "type": String,
                "attr": "push-sm"
            },
            "pushXl": {
                "type": String,
                "attr": "push-xl"
            },
            "pushXs": {
                "type": String,
                "attr": "push-xs"
            },
            "size": {
                "type": String,
                "attr": "size"
            },
            "sizeLg": {
                "type": String,
                "attr": "size-lg"
            },
            "sizeMd": {
                "type": String,
                "attr": "size-md"
            },
            "sizeSm": {
                "type": String,
                "attr": "size-sm"
            },
            "sizeXl": {
                "type": String,
                "attr": "size-xl"
            },
            "sizeXs": {
                "type": String,
                "attr": "size-xs"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get listeners() {
        return [{
                "name": "window:resize",
                "method": "onResize",
                "passive": true
            }];
    }
    static get style() { return ".sc-ion-col-h{padding-left:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-col-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px))}}\@media (min-width:576px){.sc-ion-col-h{padding-left:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-col-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}}\@media (min-width:768px){.sc-ion-col-h{padding-left:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-col-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}}\@media (min-width:992px){.sc-ion-col-h{padding-left:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-col-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}}\@media (min-width:1200px){.sc-ion-col-h{padding-left:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-col-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}}"; }
}

class Grid {
    constructor() {
        this.fixed = false;
    }
    hostData() {
        return {
            class: {
                "grid-fixed": this.fixed
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-grid"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "fixed": {
                "type": Boolean,
                "attr": "fixed"
            }
        };
    }
    static get style() { return ".sc-ion-grid-h{padding-left:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));margin-left:auto;margin-right:auto;display:block}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-grid-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px))}}\@media (min-width:576px){.sc-ion-grid-h{padding-left:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-grid-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}}}\@media (min-width:768px){.sc-ion-grid-h{padding-left:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-grid-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}}}\@media (min-width:992px){.sc-ion-grid-h{padding-left:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-grid-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}}}\@media (min-width:1200px){.sc-ion-grid-h{padding-left:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-grid-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-xs,var(--ion-grid-width,100%));max-width:100%}\@media (min-width:576px){.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-sm,var(--ion-grid-width,540px))}}\@media (min-width:768px){.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-md,var(--ion-grid-width,720px))}}\@media (min-width:992px){.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-lg,var(--ion-grid-width,960px))}}\@media (min-width:1200px){.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-xl,var(--ion-grid-width,1140px))}}[no-padding].sc-ion-grid-h, .sc-ion-grid-h[no-padding] .sc-ion-grid-s > ion-col{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}"; }
}

class Row {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-row"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".sc-ion-row-h{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"; }
}

export { eveTsButton as EveStButton, AppHome as EveStLoginStandard, eveStTextBox as EveStTextbox, Col as IonCol, Grid as IonGrid, Row as IonRow };
