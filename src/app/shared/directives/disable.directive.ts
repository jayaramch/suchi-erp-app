import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Directive({ selector: '[ebikeDisable]' })
export class DisableDirective implements OnChanges {
  constructor(public el: ElementRef, public renderer: Renderer2) {}

  @Input('ebikeDisable') ebikeDisable: any;

  ngOnChanges(changes: SimpleChanges) {
    const data: SimpleChange = changes.ebikeDisable;
    data.currentValue = data.currentValue
      ? data.currentValue.trim()
      : data.currentValue;
    if (!data.currentValue) {
      this.renderer.setAttribute(
        this.el.nativeElement,
        'disabled',
        !data.currentValue ? 'true' : ''
      );
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }
}
