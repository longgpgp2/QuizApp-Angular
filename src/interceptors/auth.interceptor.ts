import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { AUTH_SERVICE } from '../constants/injection.constant';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const authService = inject(AUTH_SERVICE);

  let accessToken = authService.getAccessToken();

  req = req.clone({
    setHeaders: { Authorization: `Bearer ${accessToken}` },
  });

  return next(req);
};
