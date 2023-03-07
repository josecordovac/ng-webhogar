import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
export declare class EveStModal {
    /**
     * modal color
     */
    color: string;
    /**
    * custom modal customcolor
    */
    customcolor: string;
    /**
     * modal shoe
     */
    show: boolean;
    /**
   * modal close
   */
    onClose: EventEmitter;
    hostData(): {
        'class': string;
    };
    getClasses(): {
        'eve-modal': boolean;
        'success': boolean;
        'info': boolean;
        'warning': boolean;
        'danger': boolean;
        'purple': boolean;
        'custom': boolean;
    };
    getStyles(): {
        'background-color': string;
        'border-color': string;
        'color': string;
        'display': string;
    };
    onCloseEvent(): void;
    render(): JSX.Element;
}
