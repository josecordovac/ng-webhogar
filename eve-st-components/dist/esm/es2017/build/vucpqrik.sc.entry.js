import { h } from '../evestcomponents.core.js';

class EveStOverlay {
    constructor() {
        this.show = true;
        this.closeonclick = false;
    }
    hostData() {
        return {
            'class': 'flex_100',
        };
    }
    getClasses() {
        return {
            'eve-overlay': true,
            'success': this.color === 'success',
            'info': this.color === 'info',
            'warning': this.color === 'warning',
            'danger': this.color === 'danger',
            'purple': this.color === 'purple',
            'custom': !!this.customcolor,
            'show': this.show
        };
    }
    getStyles() {
        return {
            'background-color': this.customcolor,
            'border-color': this.customcolor,
            'color': this.customcolor
        };
    }
    onClickEvent() {
        if (this.closeonclick) {
            this.show = !this.show;
            this.onCloseEvent();
        }
    }
    onCloseEvent() {
        this.onClose.emit();
    }
    render() {
        return h("div", { class: this.getClasses(), style: this.getStyles(), onClick: _ => this.onClickEvent() });
    }
    static get is() { return "eve-st-overlay"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "closeonclick": {
            "type": Boolean,
            "attr": "closeonclick"
        },
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
            "attr": "show",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "onClose",
            "method": "onClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-eve-st-overlay::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}.sc-eve-st-overlay::-webkit-scrollbar{width:3px;background-color:#f5f5f5}.sc-eve-st-overlay::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}.flex_100.sc-eve-st-overlay{-ms-flex:100%;flex:100%}.eve-overlay.sc-eve-st-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:100;opacity:0;visibility:hidden;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;display:none;background-image:-webkit-linear-gradient(#d7d7d6,#f5f5f4);background-image:-webkit-gradient(linear,left top,left bottom,from(#d7d7d6),to(#f5f5f4));background-image:linear-gradient(#d7d7d6,#f5f5f4)}.eve-overlay.show.sc-eve-st-overlay{opacity:.7;visibility:visible;-webkit-transform:scale(1);transform:scale(1);-webkit-transition-delay:0s;transition-delay:0s;display:block}.eve-overlay.success.sc-eve-st-overlay{background-image:-webkit-linear-gradient(#5bc500,#00bd25);background-image:-webkit-gradient(linear,left top,left bottom,from(#5bc500),to(#00bd25));background-image:linear-gradient(#5bc500,#00bd25)}.eve-overlay.info.sc-eve-st-overlay{background-image:-webkit-linear-gradient(#00a9e0,#00bfe8);background-image:-webkit-gradient(linear,left top,left bottom,from(#00a9e0),to(#00bfe8));background-image:linear-gradient(#00a9e0,#00bfe8)}.eve-overlay.warning.sc-eve-st-overlay{background-image:-webkit-linear-gradient(#ffb74d,#fcc);background-image:-webkit-gradient(linear,left top,left bottom,from(#ffb74d),to(#fcc));background-image:linear-gradient(#ffb74d,#fcc)}.eve-overlay.danger.sc-eve-st-overlay, .eve-overlay.purple.sc-eve-st-overlay{background-image:-webkit-linear-gradient(#e24d4d,#fcc);background-image:-webkit-gradient(linear,left top,left bottom,from(#e24d4d),to(#fcc));background-image:linear-gradient(#e24d4d,#fcc)}.eve-overlay-content.sc-eve-st-overlay{position:fixed;top:0;left:0;right:0;bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:110}"; }
}

export { EveStOverlay };
