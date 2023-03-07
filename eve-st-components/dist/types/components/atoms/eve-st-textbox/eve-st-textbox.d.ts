import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
export declare class eveStTextBox {
    /**
     * The first name
     */
    elFocus: boolean;
    value: string;
    name: string;
    label: string;
    type: string;
    color: string;
    textcolor: string;
    customcolor: string;
    customcolorerror: string;
    disabled: boolean;
    placeholder: string;
    errors: string;
    usepattern: string;
    onChange: EventEmitter;
    onBlur: EventEmitter;
    onFocus: EventEmitter;
    constructor();
    getInputClasses(): {
        'disable_input': boolean;
    };
    getInputStyles(): {
        'color': string;
    };
    getLabelClasses(): {
        'eve-texbox ': boolean;
        'success': boolean;
        'info': boolean;
        'warning': boolean;
        'danger': boolean;
        'label_fade': boolean;
        'disable_input': boolean;
    };
    getStyles(): {
        'border-color': string;
        'color': string;
    };
    getBarClasses(): {
        'bar ': boolean;
        'success': boolean;
        'info': boolean;
        'warning': boolean;
        'danger': boolean;
        'disable_input': boolean;
        'input_focus': boolean;
    };
    getBarStyles(): {
        'background-color': string;
    };
    getClassesError(): {
        'error-message': boolean;
    };
    getStylesError(): {
        'color': string;
    };
    onInputChanged(e: any): void;
    onInputBlur(e: any): void;
    onInputFocus(e: any): void;
    getPlaceHolder(): string;
    handleKeyPress(e: KeyboardEvent): void;
    render(): JSX.Element;
}
