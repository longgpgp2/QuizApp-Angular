import { Observable } from 'rxjs';
import {
  QuestionViewModel,
  AnswerViewModel,
  QuestionCreateViewModel,
  QuestionEditViewModel,
  AnswerCreateViewModel,
  AnswerEditViewModel,
} from '../../models/question/question.models';

export default interface IQuestionService {
  getAll(): Observable<QuestionViewModel[]>;
  getById(id: string): Observable<QuestionViewModel>;
  getQuestionsByQuizId(id: string): Observable<QuestionViewModel[]>;
  getAnswersByQuestionId(questionId: string): Observable<AnswerViewModel[]>;
  getAnswerById(id: string): Observable<AnswerViewModel>;
  create(question: QuestionCreateViewModel): Observable<boolean>;
  update(question: QuestionEditViewModel): Observable<boolean>;
  delete(id: string): Observable<boolean>;

  addAnswerToQuestion(answer: AnswerCreateViewModel): Observable<boolean>;
  updateAnswerToQuestion(answer: AnswerEditViewModel): Observable<boolean>;
  deleteAnswer(answerId: string, questionId: string): Observable<boolean>;
}
