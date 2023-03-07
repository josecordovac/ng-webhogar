import '../../../stencil.core';
export declare class eveStItem {
    el: HTMLElement;
    line: string;
    getClass(): {
        'eve-item': boolean;
        'line-divider': boolean;
    };
    render(): JSX.Element;
}
