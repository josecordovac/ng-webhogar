import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'eve-st-textbox', // eve-st-textbox[currency]

})
export class CurrencyDirective {
    constructor(private el: ElementRef) { }
  @HostListener('keypress', ['$event'])
  _handleInputEvent(e: KeyboardEvent) {
      const current: string = this.el.nativeElement.value;
      const keyPressed: string = String(e.key);
      const textToEvaluate = current.concat(keyPressed);
      const regex: RegExp = new RegExp(/^\d*\.?\d{0,2}$/g);

      const isValid = regex.test(textToEvaluate);
      if (!isValid) {
        e.preventDefault();
      }
  }
}

// }

// export class TextValue {
//     constructor(private _el: ElementRef) { }
//   @HostListener('onChange', ['$event.target.value'])
//   _handleInputEvent(value: any) {
//     let initalValue = this._el.nativeElement.value;
//     this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z0-9\s]*/g, '');
//   }
// }

