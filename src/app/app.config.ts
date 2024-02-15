import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter, withComponentInputBinding, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

import localetPT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './interceptor/http.interceptor';
registerLocaleData(localetPT);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding(), withRouterConfig(
    {
      paramsInheritanceStrategy: 'always'
    }
  )),
  provideHttpClient(
    withInterceptors([httpInterceptor])
  ),
  { provide: LOCALE_ID, useValue: 'pt-BR' }]
};
