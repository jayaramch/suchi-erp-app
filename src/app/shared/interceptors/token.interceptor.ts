import {Inject, Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {Router} from '@angular/router';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    const token = this.storage.get('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }

  }
}
