export class EveStOverlay {
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
    static get style() { return "/**style-placeholder:eve-st-overlay:**/"; }
}
