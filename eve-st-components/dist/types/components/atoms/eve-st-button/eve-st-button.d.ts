import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
export declare class eveTsButton {
    /**
     * button label
     */
    id: string;
    /**
    /**
     * button label
     */
    label: string;
    /**
     * button color
     */
    color: string;
    /**
    * custom button color
    */
    customcolor: string;
    /**
    * type of the button color
    */
    type: string;
    /**
    * Set button round corner
    */
    borderradius: string;
    /**
    * Set heights
    */
    height: string;
    /**
    * Set disabled
    */
    disabled: boolean;
    /**
    * Click Event
    */
    onClick: EventEmitter;
    /**
     * Emite un evento cuando toma el focus
     */
    onFocus: EventEmitter;
    /**
     * Emite un evento cuando pierda el focus
     */
    onBlur: EventEmitter;
    getClasses(): {
        'eve-button': boolean;
        'success': boolean;
        'info': boolean;
        'warning': boolean;
        'danger': boolean;
        'custom-color': boolean;
        'outline': boolean;
    };
    getStyles(): {
        'color': string;
        'background-color': string;
        'border-color': string;
        'border-radius': string;
        'height': string;
    };
    onClickEvent: () => void;
    onFocusEvent: () => void;
    onBlurEvent: () => void;
    isDisabled(value: any): boolean;
    render(): JSX.Element;
}
