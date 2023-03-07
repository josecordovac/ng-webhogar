export class eveStAvatar {
    constructor() {
        this.color = 'success';
        this.customcolor = '';
        this.imageurl = '';
        this.iconfa = '';
        this.size = 'small';
        this.borderradius = '';
    }
    getClass() {
        return {
            'eve-avatar': true,
        };
    }
    getStyles() {
        return {
            'color': this.customcolor,
            'background-color': this.customcolor,
            'border-radius': this.borderradius,
        };
    }
    getClassIconDiv() {
        return {
            'icon': true,
            'success': this.color === 'success',
            'info': this.color === 'info',
            'warning': this.color === 'warning',
            'danger': this.color === 'danger',
            'custom': !!this.customcolor,
            'xsmall': this.size === 'xsmall',
            'small': this.size === 'small',
            'medium': this.size === 'medium',
            'large': this.size === 'large',
        };
    }
    getClassImgDiv() {
        return {
            'imagen': true,
            'xsmall': this.size === 'xsmall',
            'small': this.size === 'small',
            'medium': this.size === 'medium',
            'large': this.size === 'large',
        };
    }
    getClassIcon() {
        return {
            [this.iconfa]: true,
        };
    }
    renderImage() {
        return this.imageurl.length ?
            h("img", { src: this.imageurl, class: this.getClassImgDiv(), style: this.getStyles() })
            :
                null;
    }
    renderFaIcon() {
        return this.iconfa.length === 0 && this.imageurl.length === 0 ?
            h("div", { class: this.getClassIconDiv(), style: this.getStyles() },
                h("slot", null))
            :
                null;
    }
    render() {
        return h("div", { class: this.getClass() },
            this.renderImage(),
            this.renderFaIcon());
    }
    static get is() { return "eve-st-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "borderradius": {
            "type": String,
            "attr": "borderradius"
        },
        "color": {
            "type": String,
            "attr": "color",
            "mutable": true
        },
        "customcolor": {
            "type": String,
            "attr": "customcolor"
        },
        "iconfa": {
            "type": String,
            "attr": "iconfa"
        },
        "imageurl": {
            "type": String,
            "attr": "imageurl"
        },
        "size": {
            "type": String,
            "attr": "size",
            "mutable": true
        }
    }; }
    static get style() { return "/**style-placeholder:eve-st-avatar:**/"; }
}
