import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { routes } from './app.routes'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy, CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(withFetch(), withInterceptors([])),
        importProvidersFrom(CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, NgbModule),
        {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        },
        provideAnimations()
    ]
};