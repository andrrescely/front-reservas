import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Lista de endpoints que no requieren token
    const noAuthRequired = ['/login', '/reserve', '/finca'];

    const requiresAuth = !noAuthRequired.some((url) =>
      request.url.includes(url)
    );

    if (requiresAuth) {
      const token = this.cookieService.get('token_service');
      if (token) {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });
        request = request.clone({ headers });
      }
    }

    return next.handle(request);
  }
}

