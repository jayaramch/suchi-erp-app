import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({ selector: '[ebikeInputDecimal]' })
export class InputDecimalDirective implements OnInit {
  private el: HTMLInputElement;

  constructor(private _elementRef: ElementRef) {
    this.el = this._elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.transformedInput(this.el.value);
  }

  @HostListener('keyup', ['$event.target.value'])
  OnKeyup(value) {
    this.el.value = this.transformedInput(this.el.value);
  }

  transformedInput(transformedInput: any) {
    transformedInput = transformedInput.replace(/[^0-9.]/g, '');
    const decimalCheck = transformedInput.split('.');

    if (decimalCheck[1]) {
      decimalCheck[1] = decimalCheck[1].slice(0, 2);
      transformedInput = decimalCheck[0] + '.' + decimalCheck[1];
    }

    return transformedInput;
  }
}
