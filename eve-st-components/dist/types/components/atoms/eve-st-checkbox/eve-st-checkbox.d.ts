import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
export declare class EveStCheckbox {
    checked: boolean;
    name: string;
    label: string;
    color: string;
    customcolor: string;
    disabled: boolean;
    errors: string;
    customcolorerror: string;
    onChange: EventEmitter;
    getClasses(): {
        'eve-input-checkbox': boolean;
        'checkmark': boolean;
        'success-checkbox': boolean;
        'info-checkbox': boolean;
        'warning-checkbox': boolean;
        'danger-checkbox': boolean;
    };
    getStyles(): {
        'background-color': string;
        'border-color': string;
        'color': string;
    };
    getClassesError(): {
        'error-message': boolean;
    };
    getStylesError(): {
        'color': string;
    };
    elementClickHandler(): void;
    render(): JSX.Element;
}
