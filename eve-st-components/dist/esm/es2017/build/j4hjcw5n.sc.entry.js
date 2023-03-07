import { h } from '../evestcomponents.core.js';

class eveStAlert {
    constructor() {
        this.label = '';
    }
    hostData() {
        return {
            'class': 'flex_100',
        };
    }
    getClasses() {
        return {
            'eve-alert': true,
            'success': this.color === 'success',
            'info': this.color === 'info',
            'warning': this.color === 'warning',
            'danger': this.color === 'danger',
            'purple': this.color === 'purple',
            'custom': !!this.customcolor,
            'outline': this.type === 'outline',
        };
    }
    getStyles() {
        return {
            'background-color': this.customcolor,
            'border-color': this.customcolor,
            'border-radius': this.borderradius,
            'color': this.customcolor
        };
    }
    render() {
        return h("div", { class: this.getClasses(), style: this.getStyles() },
            h("slot", null));
    }
    static get is() { return "eve-st-alert"; }
    static get properties() { return {
        "borderradius": {
            "type": String,
            "attr": "borderradius"
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "customcolor": {
            "type": String,
            "attr": "customcolor"
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
    static get style() { return "::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}::-webkit-scrollbar{width:3px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}.eve-alert,.flex_100{-ms-flex:100%;flex:100%}.eve-alert{background:#5bc500;border:1px solid #5bc500;padding:4px;padding-left:8px;color:#fff;position:relative;display:-ms-flexbox;display:flex;height:auto;min-height:54px}.eve-alert .close_btn{background:rgba(0,0,0,.1);font-size:20px;line-height:1;position:absolute;right:0;top:0;cursor:pointer;-webkit-transition:.5s;transition:.5s}.eve-alert .close_btn:hover{background:hsla(0,0%,100%,.3);color:red}.eve-alert.border{border-radius:3px}.eve-alert.success{background:#5bc500;border-color:#5bc500}.eve-alert.info{background:#00a9e0;border-color:#00a9e0}.eve-alert.warning{background:#ffb74d;border-color:#ffb74d}.eve-alert.danger{background:#e24d4d;border-color:#e24d4d}.eve-alert.purple{background:#954897;border-color:#954897}.eve-alert.outline{background:none!important;color:inherit}.eve-alert.outline .close_btn{background:none}.eve-alert.outline.success{color:#5bc500}.eve-alert.outline.info{color:#00a9e0}.eve-alert.outline.warning{color:#ffb74d}.eve-alert.outline.danger{color:#e24d4d}.eve-alert.outline.purple{color:#954897}.eve-alert.custom:not(.outline){color:#fff!important}"; }
}

export { eveStAlert as EveStAlert };
