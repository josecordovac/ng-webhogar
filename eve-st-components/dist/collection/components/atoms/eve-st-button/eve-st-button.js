export class eveTsButton {
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
    static get style() { return "/**style-placeholder:eve-st-button:**/"; }
}
