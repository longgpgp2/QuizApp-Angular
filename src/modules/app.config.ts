import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { QUIZ_SERVICE } from '../constants/injection.constant';
import { QuizService } from '../services/quiz/quiz.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    {
      provide: QUIZ_SERVICE,
      useClass: QuizService
    }
  ]
};
