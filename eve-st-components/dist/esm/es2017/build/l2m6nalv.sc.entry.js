import { h } from '../evestcomponents.core.js';

class eveStItem {
    constructor() {
        this.line = '';
    }
    getClass() {
        return {
            'eve-item': true,
            'line-divider': this.line === 'simple'
        };
    }
    render() {
        return h("div", { class: this.getClass() },
            h("slot", { name: "item-left" }),
            h("slot", null),
            h("slot", { name: "item-right" }));
    }
    static get is() { return "eve-st-item"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "line": {
            "type": String,
            "attr": "line"
        }
    }; }
    static get style() { return "::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}::-webkit-scrollbar{width:3px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}.eve-item{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;min-height:47px}.eve-item.line-divider{border-bottom:1px solid #ddd}.eve-item .item-align-center{-ms-flex-align:center;align-items:center}.eve-item .item-justify-center{-ms-flex-pack:center;justify-content:center}"; }
}

export { eveStItem as EveStItem };
