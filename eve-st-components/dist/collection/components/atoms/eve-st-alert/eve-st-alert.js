export class eveStAlert {
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
    static get style() { return "/**style-placeholder:eve-st-alert:**/"; }
}
