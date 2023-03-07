import { h } from '../evestcomponents.core.js';

class eveStDropDown {
    constructor() {
        this.listitems = [{}];
        this.color = '';
        this.customcolor = '';
        this.customcolorerror = '';
        this.errors = '';
        this.imageleftturl = '';
        this.imagerightturl = '';
        this.paddingright = '0';
        this.paddingleft = '0';
        this.elFocus = false;
        this.elOpen = false;
        this.getPlaceHolder();
    }
    getClasses() {
        return {
            'eve-dropdown': true,
            'active': this.elOpen,
            'success': this.color === 'success',
            'info': this.color === 'info',
            'warning': this.color === 'warning',
            'danger': this.color === 'danger',
            'white': this.color === 'white',
            'purple': this.color === 'purple',
        };
    }
    getLabelClasses() {
        return {
            'success': this.color === 'success',
            'info': this.color === 'info',
            'warning': this.color === 'warning',
            'danger': this.color === 'danger',
            'white': this.color === 'white',
            'purple': this.color === 'purple',
            'label_fade': !this.elFocus,
        };
    }
    ;
    getStyles() {
        return {
            'border-color': this.customcolor,
            'color': this.customcolor,
        };
    }
    getDisplayClasses() {
        return {
            'display ': true,
            'white': this.color === 'white',
        };
    }
    getBarClasses() {
        return {
            'bar ': true,
            'success': this.color === 'success',
            'info': this.color === 'info',
            'warning': this.color === 'warning',
            'danger': this.color === 'danger',
            'white': this.color === 'white',
            'purple': this.color === 'purple',
        };
    }
    getBarStyles() {
        return {
            'border-color': this.customcolor,
            'color': this.customcolor,
        };
    }
    getClassesError() {
        return {
            'error-message': true,
        };
    }
    getStylesError() {
        return {
            'color': this.customcolor
        };
    }
    toggle(ev) {
        ev.stopPropagation();
        this.elOpen = !this.elOpen;
    }
    onInputChanged(e) {
        this.value = e.target && e.target.value;
    }
    onInputBlur(e) {
        this.elFocus = false;
        this.value = e.target && e.target.value;
    }
    onInputFocus(e) {
        this.elFocus = true;
        this.value = e.target && e.target.value;
    }
    getPlaceHolder() {
        return !this.elFocus ? this.placeholder : '';
    }
    renderIconLeft() {
        if (this.imagerightturl.length || this.imageleftturl.length) {
            let iconClass = '';
            this.paddingright = '';
            this.paddingleft = '';
            if (this.imagerightturl.length) {
                iconClass = 'input_icon_right';
                this.paddingright = '32px';
            }
            if (this.imageleftturl.length) {
                iconClass = this.imageleftturl.length ? '' : '';
                iconClass = 'input_icon_left';
                this.paddingleft = '32px';
            }
            return (h("img", { class: iconClass, src: "assets/images/avatar.png", width: "16", height: "16" }));
        }
        return null;
    }
    getArrowClasses() {
        return {
            'arrow': true,
            'success': this.color === 'success',
            'info': this.color === 'info',
            'warning': this.color === 'warning',
            'danger': this.color === 'danger',
            'white': this.color === 'white',
            'purple': this.color === 'purple',
        };
    }
    rendeIconArrow() {
        console.log(this.elOpen);
        let iconArrowImage = this.elOpen ? 'arrow-up' : 'arrow-down';
        return h("ion-icon", { class: this.getArrowClasses(), name: iconArrowImage, style: { 'height': '24px' } });
    }
    onElementClickEvent(ev, element) {
        ev.stopPropagation();
        this.selectedValue = element['label'];
        this.onChange.emit(element);
        this.elOpen = false;
    }
    render() {
        return h("div", { class: "eve-ng-dropdown" },
            h("label", { class: this.getLabelClasses(), style: this.getStyles() }, this.label),
            h("div", { class: this.getClasses(), onClick: ev => this.toggle(ev) },
                h("div", { class: "input-wraper" },
                    h("div", { class: this.getDisplayClasses() }, this.selectedValue || this.placeholder),
                    this.rendeIconArrow()),
                h("ul", { class: "dropdown" }, this.listitems.map((item) => {
                    return (h("li", { onClick: ev => this.onElementClickEvent(ev, item) }, item['label']));
                }))),
            h("div", { class: this.getBarClasses(), style: this.getBarStyles() }),
            h("div", { class: this.getClassesError(), style: this.getStylesError() }, this.errors));
    }
    click(ev) {
        ev.stopPropagation();
        this.el.blur();
        this.elOpen = false;
    }
    static get is() { return "eve-st-dropdown"; }
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
        "customcolorerror": {
            "type": String,
            "attr": "customcolorerror"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "elFocus": {
            "state": true
        },
        "elOpen": {
            "state": true
        },
        "errors": {
            "type": String,
            "attr": "errors"
        },
        "imageleftturl": {
            "type": String,
            "attr": "imageleftturl"
        },
        "imagerightturl": {
            "type": String,
            "attr": "imagerightturl"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "listitems": {
            "type": "Any",
            "attr": "listitems"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "paddingleft": {
            "state": true
        },
        "paddingright": {
            "state": true
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "selectedValue": {
            "state": true
        },
        "value": {
            "type": "Any",
            "attr": "value",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "onChange",
            "method": "onChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "onBlur",
            "method": "onBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "body:click",
            "method": "click"
        }]; }
    static get style() { return "::-webkit-scrollbar-track{border-radius:25px;background-color:#f5f5f5}::-webkit-scrollbar{width:3px;background-color:#f5f5f5}::-webkit-scrollbar-thumb{border-radius:25px;background-color:#cfcfcf}:host{width:100%}:host .eve-ng-dropdown{position:relative;width:100%}:host .eve-ng-dropdown .input-grapper{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;width:100%}:host .eve-ng-dropdown .input-grapper .display{font-size:16px;font-family:Josefin Sans,sans-serif;line-height:16px;color:#f0f0f0;width:100%}:host .eve-ng-dropdown .input-grapper .display.white{color:#fff}:host .eve-ng-dropdown .error-message{color:#e24d4d;margin-top:4px;height:8px;font-size:14px}:host .eve-ng-dropdown label{display:block;border:0;font-size:16px;font-family:Josefin Sans,sans-serif;line-height:16px;color:main-color(500);opacity:1}:host .eve-ng-dropdown label.success{color:#5bc500}:host .eve-ng-dropdown label.info{color:#00a9e0}:host .eve-ng-dropdown label.warning{color:#ffb74d}:host .eve-ng-dropdown label.danger{color:#e24d4d}:host .eve-ng-dropdown label.white{color:#fff}:host .eve-ng-dropdown label.purple{color:#954897}:host .eve-ng-dropdown .bar{height:1px;background-color:main-color(500);position:relative;display:block;width:100%}:host .eve-ng-dropdown .bar.success{background-color:#5bc500}:host .eve-ng-dropdown .bar.info{background-color:#00a9e0}:host .eve-ng-dropdown .bar.warning{background-color:#ffb74d}:host .eve-ng-dropdown .bar.danger{background-color:#e24d4d}:host .eve-ng-dropdown .bar.white{background-color:#fff}:host .eve-ng-dropdown .bar.purple{background-color:#954897}:host .eve-ng-dropdown .eve-dropdown{position:relative;width:100%;height:29px;margin:0 auto;padding-left:0;padding-top:6px;padding-bottom:0;background:#fff;border-radius:4px;-webkit-box-shadow:none;box-shadow:none;cursor:pointer;outline:none;background-color:transparent;font-size:16px;font-family:Josefin Sans,sans-serif}:host .eve-ng-dropdown .eve-dropdown.success{color:#5bc500}:host .eve-ng-dropdown .eve-dropdown.info{color:#00a9e0}:host .eve-ng-dropdown .eve-dropdown.warning{color:#ffb74d}:host .eve-ng-dropdown .eve-dropdown.danger{color:#e24d4d}:host .eve-ng-dropdown .eve-dropdown.white{color:#fff!important}:host .eve-ng-dropdown .eve-dropdown .arrow{position:absolute;top:16px;right:8px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translateY(-6px);transform:translateY(-6px)}:host .eve-ng-dropdown .eve-dropdown .dropdown{padding-left:0;position:absolute;top:72%;left:0;right:0;z-index:2;background:#fff;border-radius:5px;border:1px solid #e8e6e5;-webkit-box-shadow:none;box-shadow:none;font-weight:400;-webkit-transition:all .3s ease-in;transition:all .3s ease-in;list-style:none;overflow-y:scroll;max-height:120px;opacity:0;pointer-events:none}:host .eve-ng-dropdown .eve-dropdown .dropdown li{display:block;padding-left:19px;padding-top:6px;padding-bottom:3px;text-decoration:none;color:#6e6259;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}:host .eve-ng-dropdown .eve-dropdown .dropdown li:hover{color:#666c7e;background:#f5f5f5}:host .eve-ng-dropdown .eve-dropdown .dropdown li:first-of-type{border-radius:4px 4px 0 0}:host .eve-ng-dropdown .eve-dropdown .dropdown li:last-of-type{border-radius:0 0 4px 4px;border:none}:host .eve-ng-dropdown .eve-dropdown.active .dropdown{opacity:1;pointer-events:auto}"; }
}

export { eveStDropDown as EveStDropdown };
