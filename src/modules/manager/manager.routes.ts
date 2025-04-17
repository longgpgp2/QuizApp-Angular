import { Routes } from '@angular/router';
import { ManagerLayoutComponent } from '../shared/layouts/manager/manager-layout/manager-layout.component';

export const managerRoutes: Routes = [
  {
    path: '',
    component: ManagerLayoutComponent,
    children: [{ path: '', redirectTo: 'manager', pathMatch: 'full' }],
  },
];
