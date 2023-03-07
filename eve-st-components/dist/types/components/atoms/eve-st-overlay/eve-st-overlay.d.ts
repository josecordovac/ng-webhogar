import '../../../stencil.core';
import { EventEmitter } from '../../../stencil.core';
export declare class EveStOverlay {
    /**
     * overlay color
     */
    color: string;
    /**
    * custom overlay customcolor
    */
    customcolor: string;
    /**
     * overlay show
     */
    show: boolean;
    /**
   * overlay closeonclick
   */
    closeonclick: boolean;
    /**
     * overay close
     */
    onClose: EventEmitter;
    hostData(): {
        'class': string;
    };
    getClasses(): {
        'eve-overlay': boolean;
        'success': boolean;
        'info': boolean;
        'warning': boolean;
        'danger': boolean;
        'purple': boolean;
        'custom': boolean;
        'show': boolean;
    };
    getStyles(): {
        'background-color': string;
        'border-color': string;
        'color': string;
    };
    onClickEvent(): void;
    onCloseEvent(): void;
    render(): JSX.Element;
}
