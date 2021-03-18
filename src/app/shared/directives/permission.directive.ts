import {
  Directive,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  Renderer2,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { PermissionsModel } from '../models/permissions.model';

@Directive({ selector: '[ebikePermission]' })
export class PermissionDirective implements OnChanges {
  constructor(
    public el: ElementRef,
    public renderer: Renderer2,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}

  @Input('ebikePermission') ebikePermission: string;
  @Input('condition') condition: boolean;
  @Input('data') data: any;

  ngOnChanges(changes: SimpleChanges) {
    const condition: SimpleChange = changes.condition,
      data: SimpleChange = changes.data,
      conditionValue = condition ? condition.currentValue : null,
      dataValue = data && data.currentValue ? data.currentValue : null;

    if (conditionValue) {
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
    } else if (dataValue) {
      if (dataValue instanceof Array) {
        if (dataValue.length <= 0) {
          this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
        } else {
          this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
        }
      } else if (!dataValue) {
        this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
      } else {
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
      }
    } else if (this.ebikePermission) {
      const currentRoutePermissions: Permissions =
        this.storage.get('currentRoutePermissions') ||
        new PermissionsModel(1, 1, 1);
      if (currentRoutePermissions[this.ebikePermission] !== 1) {
        this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
      } else {
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
      }
    } else {
      this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
  }
}
