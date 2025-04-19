import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import IQuestionService from './question-service.interface';
import {
  QuestionViewModel,
  AnswerViewModel,
  QuestionCreateViewModel,
  QuestionEditViewModel,
  AnswerCreateViewModel,
  AnswerEditViewModel,
} from '../../models/question/question.models';

@Injectable({
  providedIn: 'root',
})
export class QuestionService implements IQuestionService {
  private readonly apiUrl = `${environment.apiBaseUrl}/questions`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<QuestionViewModel[]> {
    return this.http.get<QuestionViewModel[]>(`${this.apiUrl}`);
  }

  getById(id: string): Observable<QuestionViewModel> {
    return this.http.get<QuestionViewModel>(`${this.apiUrl}/${id}`);
  }

  getQuestionsByQuizId(quizId: string): Observable<QuestionViewModel[]> {
    return this.http.get<QuestionViewModel[]>(
      `${this.apiUrl}/by-quiz/${quizId}`
    );
  }

  getAnswersByQuestionId(questionId: string): Observable<AnswerViewModel[]> {
    return this.http.get<AnswerViewModel[]>(
      `${this.apiUrl}/${questionId}/answers`
    );
  }

  getAnswerById(id: string): Observable<AnswerViewModel> {
    return this.http.get<AnswerViewModel>(`${this.apiUrl}/answers/${id}`);
  }

  create(question: QuestionCreateViewModel): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}`, question);
  }

  update(question: QuestionEditViewModel): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/${question.id}`, question);
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }

  addAnswerToQuestion(answer: AnswerCreateViewModel): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/answers`, answer);
  }

  updateAnswerToQuestion(answer: AnswerEditViewModel): Observable<boolean> {
    return this.http.put<boolean>(
      `${this.apiUrl}/answers/${answer.id}`,
      answer
    );
  }

  deleteAnswer(answerId: string, questionId: string): Observable<boolean> {
    return this.http.delete<boolean>(
      `${this.apiUrl}/${questionId}/answers/${answerId}`
    );
  }
}
