export class eveStDropDown {
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
    static get style() { return "/**style-placeholder:eve-st-dropdown:**/"; }
}
