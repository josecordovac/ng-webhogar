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
    static get style() { return ".sc-eve-st-modal::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}.sc-eve-st-modal::-webkit-scrollbar{width:3px;background-color:#f5f5f5}.sc-eve-st-modal::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}.flex_100.sc-eve-st-modal{-ms-flex:100%;flex:100%}.eve-modal.sc-eve-st-modal{position:fixed;left:50%;top:50%;z-index:120;width:100%;overflow:auto;min-height:124px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.eve-modal.sc-eve-st-modal   .modal-content.sc-eve-st-modal{background-color:#fefefe;margin:auto;width:80%;border-radius:25px;border-top-right-radius:0;border-top-left-radius:0}.eve-modal.sc-eve-st-modal   .modal-content.sc-eve-st-modal   .content.sc-eve-st-modal, .eve-modal.sc-eve-st-modal   .modal-content.sc-eve-st-modal   .footer.sc-eve-st-modal{padding:16px}.eve-modal.sc-eve-st-modal   .modal-content.sc-eve-st-modal   .header.sc-eve-st-modal{position:relative;padding:16px}.eve-modal.sc-eve-st-modal   .modal-content.sc-eve-st-modal   .header.sc-eve-st-modal   .close_icon.sc-eve-st-modal{position:absolute;right:16px;top:18px}.eve-modal.sc-eve-st-modal   .modal-content.sc-eve-st-modal   .header.success.sc-eve-st-modal{color:#fff;background-color:#5bc500}.eve-modal.sc-eve-st-modal   .modal-content.sc-eve-st-modal   .header.info.sc-eve-st-modal{color:#fff;background-color:#00a9e0}.eve-modal.sc-eve-st-modal   .modal-content.sc-eve-st-modal   .header.warning.sc-eve-st-modal{color:#fff;background-color:#ffb74d}.eve-modal.sc-eve-st-modal   .modal-content.sc-eve-st-modal   .header.danger.sc-eve-st-modal{color:#fff;background-color:#e24d4d}.eve-modal.sc-eve-st-modal   .modal-content.sc-eve-st-modal   .header.purple.sc-eve-st-modal{color:#fff;background:#954897}"; }
}

export { EveStModal };
