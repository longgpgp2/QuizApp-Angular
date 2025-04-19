import { Component, Inject } from '@angular/core';
import IQuestionService from '../../../../services/question/question-service.interface';
import { QUESTION_SERVICE } from '../../../../constants/injection.constant';

@Component({
  selector: 'app-question-list',
  imports: [],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css',
})
export class QuestionListComponent {
  constructor(
    @Inject(QUESTION_SERVICE) private readonly questionService: IQuestionService
  ) {}
  ngOnInit(): void {
    this.questionService.getAll().subscribe((response) => {
      console.log(response);
    });
  }
}
