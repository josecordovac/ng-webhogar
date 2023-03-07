export class EveStList {
    render() {
        return (h("slot", null));
    }
    static get is() { return "eve-st-list"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "host": {
            "elementRef": true
        }
    }; }
    static get style() { return "/**style-placeholder:eve-st-list:**/"; }
}
