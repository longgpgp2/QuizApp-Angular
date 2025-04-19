import { Component, Inject } from '@angular/core';
import IQuestionService from '../../../../services/question/question-service.interface';
import { QUESTION_SERVICE } from '../../../../constants/injection.constant';
import { TableComponent } from '../../../../core/components/table/table.component';
import { MasterDataListComponent } from '../../../shared/master-data/master-data/master-data.component';
import { QuestionViewModel } from '../../../../models/question.models';
import { Router } from '@angular/router';
import { TableColumn } from '../../../../models/table.models';

@Component({
  selector: 'app-question-list',
  imports: [TableComponent],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css',
})
export class QuestionListComponent extends MasterDataListComponent<QuestionViewModel> {

  constructor(
    @Inject(QUESTION_SERVICE) private readonly questionService: IQuestionService,
    private readonly router: Router
  ) {
    super();
  }

  public override columns: TableColumn[] = [
    { name: 'Id', value: 'id' },
    { name: 'Content', value: 'content' },
    { name: 'QuestionType', value: 'questionType' },
    { name: 'Is Active', value: 'isActive' },

  ];

  viewDetails(id: string) {
    this.router.navigate(['/manager/question/details', id]);
  }
  edit($event: string) {
    throw new Error('Method not implemented.');
  }



  protected override initTable(): void {
    this.questionService.getAll().subscribe((res) => {
      this.data = res;
    });
  }
}


