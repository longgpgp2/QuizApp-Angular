import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { QUESTION_SERVICE, QUIZ_SERVICE, ROLE_SERVICE, USER_SERVICE } from '../constants/injection.constant';
import { QuizService } from '../services/quiz/quiz.service';
import { provideHttpClient } from '@angular/common/http';
import { QuestionService } from '../services/question/question.service';
import { UserService } from '../services/user/user.service';
import { RoleService } from '../services/role/role.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: QUIZ_SERVICE,
      useClass: QuizService,
    },
    {
      provide: QUESTION_SERVICE,
      useClass: QuestionService,
    },
    {
      provide: USER_SERVICE,
      useClass: UserService,
    },
    {
      provide: ROLE_SERVICE,
      useClass: RoleService,
    },
  ],
};
