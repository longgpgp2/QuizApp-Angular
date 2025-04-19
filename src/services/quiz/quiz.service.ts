import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
import IQuizService from './quiz-service.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuizService implements IQuizService {
  private readonly apiUrl = `${environment.apiBaseUrl}/quizzes`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<QuizViewModel[]> {
    return this.http.get<QuizViewModel[]>(`${this.apiUrl}`);
  }

  getById(id: string): Observable<QuizViewModel> {
    return this.http.get<QuizViewModel>(`${this.apiUrl}/${id}`);
  }

  create(obj: QuizCreateViewModel): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}`, obj);
  }

  update(obj: QuizEditViewModel): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/${obj.id}`, obj);
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }

  deleteQuestionFromQuiz(
    quizId: string,
    quizQuestionId: string
  ): Observable<boolean> {
    return this.http.delete<boolean>(
      `${this.apiUrl}/${quizId}/questions/${quizQuestionId}`
    );
  }

  addQuestionToQuiz(obj: QuizQuestionCreateViewModel): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/questions`, obj);
  }

  prepareQuiz(
    data: PrepareQuizViewModel
  ): Observable<QuizPrepareInfoViewModel> {
    return this.http.post<QuizPrepareInfoViewModel>(
      `${this.apiUrl}/prepare`,
      data
    );
  }

  takeQuiz(data: TakeQuizViewModel): Observable<QuizForTestViewModel> {
    return this.http.post<QuizForTestViewModel>(`${this.apiUrl}/take`, data);
  }

  submitQuiz(data: QuizSubmissionViewModel): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/submit`, data);
  }
}
