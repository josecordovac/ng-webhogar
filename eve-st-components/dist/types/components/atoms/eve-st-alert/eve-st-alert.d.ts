import '../../../stencil.core';
export declare class eveStAlert {
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
    hostData(): {
        'class': string;
    };
    getClasses(): {
        'eve-alert': boolean;
        'success': boolean;
        'info': boolean;
        'warning': boolean;
        'danger': boolean;
        'purple': boolean;
        'custom': boolean;
        'outline': boolean;
    };
    getStyles(): {
        'background-color': string;
        'border-color': string;
        'border-radius': string;
        'color': string;
    };
    render(): JSX.Element;
}
