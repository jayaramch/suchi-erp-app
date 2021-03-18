import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable } from 'rxjs';

export function passwordConfirming(password: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const v = control.value;
    const e = control.root.get(password);
    return e && v !== e.value
      ? { validateEqual: { value: control.value } }
      : null;
  };
}

export function existingEmailValidator(): AsyncValidatorFn {
  return (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return new Promise((resolve) => {
      /*return userService.checkEmail(control.value).subscribe(
        data => {
          return data ? resolve({'emailExists': true}) : resolve(null);
        }
      );*/
    });
  };
}
