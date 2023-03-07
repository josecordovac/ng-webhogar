import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
import '@ionic/core';
export declare class eveStDropDown {
    /**
     * The first name
     */
    el: HTMLElement;
    value: {
        [key: string]: string;
    };
    listitems: [{
        [key: string]: string;
    }];
    name: string;
    label: string;
    color: string;
    customcolor: string;
    customcolorerror: string;
    disabled: boolean;
    placeholder: string;
    errors: string;
    imageleftturl: string;
    imagerightturl: string;
    selectedValue: string;
    paddingright: string;
    paddingleft: string;
    elFocus: boolean;
    elOpen: boolean;
    onChange: EventEmitter;
    onBlur: EventEmitter;
    constructor();
    getClasses(): {
        'eve-dropdown': boolean;
        'active': boolean;
        'success': boolean;
        'info': boolean;
        'warning': boolean;
        'danger': boolean;
        'white': boolean;
        'purple': boolean;
    };
    getLabelClasses(): {
        'success': boolean;
        'info': boolean;
        'warning': boolean;
        'danger': boolean;
        'white': boolean;
        'purple': boolean;
        'label_fade': boolean;
    };
    getStyles(): {
        'border-color': string;
        'color': string;
    };
    getDisplayClasses(): {
        'display ': boolean;
        'white': boolean;
    };
    getBarClasses(): {
        'bar ': boolean;
        'success': boolean;
        'info': boolean;
        'warning': boolean;
        'danger': boolean;
        'white': boolean;
        'purple': boolean;
    };
    getBarStyles(): {
        'border-color': string;
        'color': string;
    };
    getClassesError(): {
        'error-message': boolean;
    };
    getStylesError(): {
        'color': string;
    };
    toggle(ev: UIEvent): void;
    onInputChanged(e: any): void;
    onInputBlur(e: any): void;
    onInputFocus(e: any): void;
    getPlaceHolder(): string;
    renderIconLeft(): JSX.Element;
    getArrowClasses(): {
        'arrow': boolean;
        'success': boolean;
        'info': boolean;
        'warning': boolean;
        'danger': boolean;
        'white': boolean;
        'purple': boolean;
    };
    rendeIconArrow(): JSX.Element;
    private onElementClickEvent;
    render(): JSX.Element;
    click(ev: any): void;
}
