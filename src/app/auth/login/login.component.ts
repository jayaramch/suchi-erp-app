import {Component, Inject, OnInit} from '@angular/core';
import {CarouselConfig} from 'ngx-bootstrap/carousel';
import {LoginModel} from '../models/login.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {BlockUI, NgBlockUI} from 'ng-block-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {provide: CarouselConfig, useValue: {interval: 3000, noPause: true, showIndicators: false}}
  ]
})
export class LoginComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;
  user = new LoginModel();
  loginForm: FormGroup;

  formErrors = {
    userName: '',
    password: '',
  };

  validationMessages = {
    userName: {
      required: 'Name is required.',
      minlength: 'Name must be at least 1 characters long.',
    },
    password: {
      required: 'Password is required.',
      minlength: 'Password must be at least 1 characters long.',
      maxlength: 'Password cannot be more than 15 characters long.',
      pattern: 'Password cannot contain whitespaces',
    },
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    @Inject(SESSION_STORAGE) private storage: StorageService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.authService.logout();
    this.buildForm();
  }

  onSubmit() {
    this.blockUI.start();
    const userPayload = {...this.user};
    this.authService
      .loginAuthentication(userPayload)
      .pipe(
        finalize(() => {
          this.blockUI.stop();
        })
      )
      .subscribe(
        (res: any) => {
          this.storage.set('token', res.token);
          this.router.navigate(['/main']);
        },
        (err) => {

        }
      );
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      userName: [this.user.userName, [Validators.required, Validators.minLength(1)]],
      password: [
        this.user.password,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(15),
          Validators.pattern('[\\S]*'),
        ],
      ],
    });

    this.loginForm.valueChanges.subscribe((data) => this.onValueChanged());

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged() {
    if (!this.loginForm) {
      return;
    }
    const form = this.loginForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
