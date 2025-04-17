import { Routes } from '@angular/router';
import { CustomerLayoutComponent } from '../shared/layouts/customer/customer-layout/customer-layout.component';
import { HomeComponent } from '../pages/home/home.component';
import { QuizListComponent } from '../pages/quiz/quiz-list/quiz-list.component';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { QuizzesComponent } from '../pages/quizzes/quizzes.component';

export const customerRoutes: Routes = [
  {
    path: '',
    component: CustomerLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'quizzes', component: QuizzesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];
