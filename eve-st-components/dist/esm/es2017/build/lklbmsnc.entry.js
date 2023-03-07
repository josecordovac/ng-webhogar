import { h } from '../evestcomponents.core.js';

class eveStAvatar {
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
    static get style() { return "::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}::-webkit-scrollbar{width:3px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}.eve-avatar .icon,.eve-avatar .imagen{margin-right:8px;border-radius:50px}.eve-avatar .imagen.xsmall{max-width:32px}.eve-avatar .imagen.small{max-width:48px}.eve-avatar .imagen.medium{max-width:64px}.eve-avatar .imagen.large{max-width:80px}.eve-avatar .icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:57px;width:57px;background-color:hsla(0,0%,80%,.5);color:#fff;border-radius:37px}.eve-avatar .icon.success{background:#5bc500;border-color:#5bc500}.eve-avatar .icon.info{background:#00a9e0;border-color:#00a9e0}.eve-avatar .icon.warning{background:#ffb74d;border-color:#ffb74d}.eve-avatar .icon.danger{background:#e24d4d;border-color:#e24d4d}.eve-avatar .icon.xsmall{width:32px;height:32px;font-size:16px}.eve-avatar .icon.small{width:48px;height:48px;font-size:32px}.eve-avatar .icon.medium{width:64px;height:64px;font-size:40px}.eve-avatar .icon.large{width:80px;height:80px;font-size:48px}"; }
}

export { eveStAvatar as EveStAvatar };
