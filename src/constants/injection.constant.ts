import { InjectionToken } from "@angular/core";
import IQuizService from "../services/quiz/quiz-service.interface";
import IQuestionService from "../services/question/question-service.interface";
import IUserService from "../services/user/user-service.interface";
import IRoleService from "../services/role/role-service.interface";

export const QUIZ_SERVICE = new InjectionToken<IQuizService>('QUIZ_SERVICE');
export const QUESTION_SERVICE = new InjectionToken<IQuestionService>('QUESTION_SERVICE');
export const USER_SERVICE = new InjectionToken<IUserService>('USER_SERVICE');
export const ROLE_SERVICE = new InjectionToken<IRoleService>('ROLE_SERVICE');
