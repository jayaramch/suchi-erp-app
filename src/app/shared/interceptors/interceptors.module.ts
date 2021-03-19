import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TokenInterceptor } from './token.interceptor';

const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  },
];

@NgModule({
  imports: [HttpClientModule],
  providers: INTERCEPTORS,
})
export class InterceptorsModule {}
