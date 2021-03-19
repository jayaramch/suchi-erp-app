import {Inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot,} from '@angular/router';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    const token = this.storage.get('token');
    if (token) {
      return true;
    }

    this.router.navigate(['/auth/error-404']).then((_) => false);
  }
}
