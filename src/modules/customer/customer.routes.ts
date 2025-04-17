import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from '../shared/layouts/customer/customer-layout/customer-layout.component';

export const customerRoutes: Routes = [
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [{ path: '', redirectTo: 'customer', pathMatch: 'full' }],
  },
];
