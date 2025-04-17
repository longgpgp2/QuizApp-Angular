import { Routes } from '@angular/router';
import { ManagerLayoutComponent } from '../shared/layouts/manager/manager-layout/manager-layout.component';
import { QuizListComponent } from '../pages/quiz/quiz-list/quiz-list.component';
import { QuestionListComponent } from '../pages/question/question-list/question-list.component';
import { UserListComponent } from '../pages/user/user-list/user-list.component';
import { RoleListComponent } from '../pages/role/role-list/role-list.component';
import { QuizDetailsComponent } from '../pages/quiz/quiz-details/quiz-details.component';
import { QuestionDetailsComponent } from '../pages/question/question-details/question-details.component';
import { UserDetailsComponent } from '../pages/user/user-details/user-details.component';
import { RoleDetailsComponent } from '../pages/role/role-details/role-details.component';

export const managerRoutes: Routes = [
  {
    path: '',
    component: ManagerLayoutComponent,
    children: [
      { path: 'quiz', component: QuizListComponent },
      { path: 'quiz/details/:id', component: QuizDetailsComponent },
      { path: 'question', component: QuestionListComponent },
      { path: 'question/details/:id', component: QuestionDetailsComponent },
      { path: 'user', component: UserListComponent },
      { path: 'user/details/:id', component: UserDetailsComponent },
      { path: 'role', component: RoleListComponent },
      { path: 'role/details/:id', component: RoleDetailsComponent },
      { path: '', redirectTo: 'quiz', pathMatch: 'full' },
    ],
  },
];
