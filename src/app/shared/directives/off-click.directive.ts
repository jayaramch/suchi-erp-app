/**
 * Created by Ganesh on 6/12/2018.
 */
import {Directive, ElementRef, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({selector: '[ebikeOffClick]'})
export class OffClickDirective {

  @Output('ebikeOffClick') ebikeOffClick: EventEmitter<Event> = new EventEmitter<Event>();

  @Input('target') target: string;
  @Input('overlay') overlay: boolean;

  constructor(private _elementRef: ElementRef) {
  }

  @HostListener('document:click', ['$event', '$event.target'])
  public onClick(event: MouseEvent, targetElement: HTMLElement): void {
    if (!targetElement) {
      return;
    }

    const target = targetElement.closest('#' + this.target);
    const target1 = targetElement.closest('.mat-autocomplete-panel');

    if (target) {
      return;
    }

    if (this.overlay && target1) {
      return;
    }
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.ebikeOffClick.emit(event);
    }
  }


}
