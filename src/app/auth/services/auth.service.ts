import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {apiConfig} from 'src/app/shared/configs/api-url.config';
import {CommonService} from 'src/app/shared/services/common.service';
import {environment} from 'src/environments/environment';
import {LoginModel} from '../models/login.model';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

const OAUTH_CLIENT = 'client';
const OAUTH_SECRET = 'clientpassword';

const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + btoa(OAUTH_CLIENT + ':' + OAUTH_SECRET),
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService extends CommonService {
  API_END_POINT: string;

  constructor(
    private httpClient: HttpClient,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {
    super();

    this.API_END_POINT = environment.API_END_POINT;
  }

  loginAuthentication(loginPayload: LoginModel): Observable<any> {
    this.logout();

    return this.httpClient
      .post(
        `${this.API_END_POINT}${apiConfig.login.name}`, loginPayload
      )
      .pipe(
        map((res: any) => res.data),
        catchError((error: any) => {
          return throwError(this.handleError(error));
        })
      );
  }


  logout(): void {
    this.storage.clear();
  }
}
