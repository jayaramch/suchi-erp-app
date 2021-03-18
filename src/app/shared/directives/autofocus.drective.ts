import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({ selector: '[ebikeAutofocus]' })
export class AutoFocusDirective implements OnChanges {
  constructor(private hostElement: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    window.setTimeout(() => {
      this.hostElement.nativeElement.focus();
    });
  }
}
