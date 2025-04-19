import { Component, Inject, OnInit } from '@angular/core';
import { QUIZ_SERVICE } from '../../../../constants/injection.constant';
import IQuizService from '../../../../services/quiz/quiz-service.interface';
import { TableComponent } from '../../../../core/components/table/table.component';
import { MasterDataListComponent } from '../../../shared/master-data/master-data/master-data.component';
import { QuizViewModel } from '../../../../models/quiz.models';
import { TableColumn } from '../../../../models/table.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  imports: [TableComponent],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css',
})
export class QuizListComponent extends MasterDataListComponent<QuizViewModel> {

  constructor(
    @Inject(QUIZ_SERVICE) private readonly quizService: IQuizService,
    private readonly router: Router
  ) {
    super();
  }

  public override columns: TableColumn[] = [
    { name: 'Id', value: 'id' },
    { name: 'Title', value: 'title' },
    { name: 'Description', value: 'description' },
    { name: 'Duration', value: 'duration' },
    { name: 'IsActive', value: 'isActive' },
  ];

  viewDetails(id: string) {
    this.router.navigate(['/manager/quiz/details', id]);
  }
  edit($event: string) {
    throw new Error('Method not implemented.');
  }



  protected override initTable(): void {
    this.quizService.getAll().subscribe((res) => {
      this.data = res;
    });
  }
}
