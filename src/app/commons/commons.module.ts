import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { EveGrTextboxComponent } from './components/eve-gr-textbox/eve-gr-textbox.component'
import { CurrencyDirective } from './pipe/alphanumeric.component';
import { EveTextBoxDirective } from './pipe/value.accesor.directive';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

    declarations: [
        NotificationsComponent,
        EveGrTextboxComponent,
        CurrencyDirective,
        EveTextBoxDirective
    ],
    exports: [
        EveGrTextboxComponent,
        CurrencyDirective,
        EveTextBoxDirective,
    ],
    entryComponents: [NotificationsComponent],
})


export class CommonsModule { }

