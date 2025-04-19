import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { QUESTION_SERVICE, QUIZ_SERVICE } from '../constants/injection.constant';
import { QuizService } from '../services/quiz/quiz.service';
import { provideHttpClient } from '@angular/common/http';
import { QuestionService } from '../services/question/question.service';

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
  ],
};
