export class EveStModal {
    constructor() {
        this.show = true;
    }
    hostData() {
        return {
            'class': 'flex_100',
        };
    }
    getClasses() {
        return {
            'eve-modal': true,
            'success': this.color === 'success',
            'info': this.color === 'info',
            'warning': this.color === 'warning',
            'danger': this.color === 'danger',
            'purple': this.color === 'purple',
            'custom': !!this.customcolor
        };
    }
    getStyles() {
        return {
            'background-color': this.customcolor,
            'border-color': this.customcolor,
            'color': this.customcolor,
            'display': this.show ? 'block' : 'none',
        };
    }
    onCloseEvent() {
        this.onClose.emit();
    }
    render() {
        return h("div", { class: this.getClasses(), style: this.getStyles() },
            h("div", { class: "modal-content" },
                h("div", { class: "header info" },
                    h("slot", { name: "modal-header" }),
                    h("slot", null),
                    h("ion-icon", { class: "close_icon", name: "close", onClick: _ => this.onCloseEvent() })),
                h("div", { class: "content" },
                    h("slot", { name: "modal-body" }),
                    h("slot", null)),
                h("div", { class: "footer" },
                    h("slot", { name: "modal-footer" }),
                    h("slot", null))));
    }
    static get is() { return "eve-st-modal"; }
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
        "show": {
            "type": Boolean,
            "attr": "show"
        }
    }; }
    static get events() { return [{
            "name": "onClose",
            "method": "onClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:eve-st-modal:**/"; }
}
