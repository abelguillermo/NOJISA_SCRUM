import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import {DashboardComponent} from "./dashboard/dashboard.component"
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {
    path: '',
    
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: FullComponent,
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        component: FullComponent,
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        component: FullComponent,
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      {
         path: 'login', component: LoginComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];