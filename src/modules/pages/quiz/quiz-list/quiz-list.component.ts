import { Component, Inject, OnInit } from '@angular/core';
import { QUIZ_SERVICE } from '../../../../constants/injection.constant';
import IQuizService from '../../../../services/quiz/quiz-service.interface';

@Component({
  selector: 'app-quiz-list',
  imports: [],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css',
})
export class QuizListComponent implements OnInit {
  constructor(
    @Inject(QUIZ_SERVICE) private readonly quizService: IQuizService
  ) {}
  ngOnInit(): void {
    this.quizService.getAll().subscribe((response) => {console.log(response);
    });
  }
}
