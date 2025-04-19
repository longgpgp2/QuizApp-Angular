import { InjectionToken } from "@angular/core";
import IQuizService from "../services/quiz/quiz-service.interface";
import IQuestionService from "../services/question/question-service.interface";

export const QUIZ_SERVICE = new InjectionToken<IQuizService>('QUIZ_SERVICE');
export const QUESTION_SERVICE = new InjectionToken<IQuestionService>('QUESTION_SERVICE');
