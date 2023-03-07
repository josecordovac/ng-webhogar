import { h } from '../evestcomponents.core.js';

class EveStModal {
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
    static get style() { return "::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}::-webkit-scrollbar{width:3px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}.flex_100{-ms-flex:100%;flex:100%}.eve-modal{position:fixed;left:50%;top:50%;z-index:120;width:100%;overflow:auto;min-height:124px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.eve-modal .modal-content{background-color:#fefefe;margin:auto;width:80%;border-radius:25px;border-top-right-radius:0;border-top-left-radius:0}.eve-modal .modal-content .content,.eve-modal .modal-content .footer{padding:16px}.eve-modal .modal-content .header{position:relative;padding:16px}.eve-modal .modal-content .header .close_icon{position:absolute;right:16px;top:18px}.eve-modal .modal-content .header.success{color:#fff;background-color:#5bc500}.eve-modal .modal-content .header.info{color:#fff;background-color:#00a9e0}.eve-modal .modal-content .header.warning{color:#fff;background-color:#ffb74d}.eve-modal .modal-content .header.danger{color:#fff;background-color:#e24d4d}.eve-modal .modal-content .header.purple{color:#fff;background:#954897}"; }
}

export { EveStModal };
