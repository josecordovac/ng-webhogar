import '../../../stencil.core';
export declare class eveStAvatar {
    color: string;
    customcolor: string;
    imageurl: string;
    iconfa: string;
    size: string;
    borderradius: string;
    getClass(): {
        'eve-avatar': boolean;
    };
    getStyles(): {
        'color': string;
        'background-color': string;
        'border-radius': string;
    };
    getClassIconDiv(): {
        'icon': boolean;
        'success': boolean;
        'info': boolean;
        'warning': boolean;
        'danger': boolean;
        'custom': boolean;
        'xsmall': boolean;
        'small': boolean;
        'medium': boolean;
        'large': boolean;
    };
    getClassImgDiv(): {
        'imagen': boolean;
        'xsmall': boolean;
        'small': boolean;
        'medium': boolean;
        'large': boolean;
    };
    getClassIcon(): {
        [x: string]: boolean;
    };
    renderImage(): JSX.Element;
    renderFaIcon(): JSX.Element;
    render(): JSX.Element;
}
