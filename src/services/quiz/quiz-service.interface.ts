import { Observable } from 'rxjs';
import {
  QuizViewModel,
  QuizCreateViewModel,
  QuizEditViewModel,
  QuizQuestionCreateViewModel,
  PrepareQuizViewModel,
  QuizPrepareInfoViewModel,
  TakeQuizViewModel,
  QuizForTestViewModel,
  QuizSubmissionViewModel,
} from '../../models/quiz.models';

export default interface IQuizService {
  getAll(): Observable<QuizViewModel[]>;
  getById(id: string): Observable<QuizViewModel>;
  create(obj: QuizCreateViewModel): Observable<boolean>;
  update(obj: QuizEditViewModel): Observable<boolean>;
  delete(id: string): Observable<boolean>;
  deleteQuestionFromQuiz(
    quizId: string,
    quizQuestionId: string
  ): Observable<boolean>;
  addQuestionToQuiz(obj: QuizQuestionCreateViewModel): Observable<boolean>;
  prepareQuiz(data: PrepareQuizViewModel): Observable<QuizPrepareInfoViewModel>;
  takeQuiz(data: TakeQuizViewModel): Observable<QuizForTestViewModel>;
  submitQuiz(data: QuizSubmissionViewModel): Observable<boolean>;
}
