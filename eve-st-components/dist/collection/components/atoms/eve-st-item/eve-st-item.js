export class eveStItem {
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
    static get style() { return "/**style-placeholder:eve-st-item:**/"; }
}
