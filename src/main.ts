import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import '@angular/localize/init';

import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LocationStrategy, PathLocationStrategy, CommonModule } from '@angular/common';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, NgbModule),
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        },
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes)
    ]
})
.catch(err => console.error(err));
