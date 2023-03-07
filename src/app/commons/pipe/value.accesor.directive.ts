import { Directive, forwardRef, HostListener, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[eveValueAccesor]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EveTextBoxDirective),
      multi: true
    }
  ]
})
export class EveTextBoxDirective implements ControlValueAccessor {

  @HostBinding('disabled') hostDisabled: boolean = false;
  @HostBinding('value') hostValue: any;

  protected lastValue: any;
  private onChange: (value: any) => void = () => {/**/};
  private onTouched: () => void = () => {/**/};

  writeValue(value: any) {
    this.hostValue = this.lastValue = value == null ? '' : value;
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.hostDisabled = isDisabled;
  }

  @HostListener ('onChange', ['$event.target.value'])
  _handleInputEvent(value: any) {
    if (JSON.stringify(value) !== JSON.stringify(this.lastValue)) {
      this.lastValue = value;
      this.onChange(value);
      this.onTouched();
    }
  }

  @HostListener('onBlur')
  _handleBlurEvent() {
    this.onTouched();
  }

}