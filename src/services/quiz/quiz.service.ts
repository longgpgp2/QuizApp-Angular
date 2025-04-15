import { Injectable } from '@angular/core';
import IQuizService from './quiz-service.interface';
import Quiz from '../../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements IQuizService {

  private readonly quizzes: Quiz[] = [];
  
  constructor() { }
  getQuizzes(): Promise<Quiz[]> {
    throw new Error('Method not implemented.');
  }
  getQuizById(id: number): Promise<Quiz | null> {
    throw new Error('Method not implemented.');
  }
  addQuiz(quiz: Quiz): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateQuiz(quiz: Quiz): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteQuiz(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
