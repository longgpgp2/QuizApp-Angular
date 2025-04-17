import { managerRoutes } from './manager/manager.routes';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ManagerLayoutComponent } from './shared/layouts/manager/manager-layout/manager-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./customer/customer.routes').then((m) => m.customerRoutes),
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./manager/manager.routes').then((m) => m.managerRoutes),
  },
];
