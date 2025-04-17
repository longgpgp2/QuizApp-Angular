import { InjectionToken } from "@angular/core";
import IQuizService from "../services/quiz/quiz-service.interface";

export const QUIZ_SERVICE = new InjectionToken<IQuizService>('QUIZ_SERVICE');