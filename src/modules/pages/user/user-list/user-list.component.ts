import { Component, Inject, OnInit } from '@angular/core';
import { USER_SERVICE } from '../../../../constants/injection.constant';
import IUserService from '../../../../services/user/user-service.interface';
import { MasterDataListComponent } from '../../../shared/master-data/master-data/master-data.component';
import { UserViewModel } from '../../../../models/quiz.models';
import { Router } from '@angular/router';
import { TableColumn } from '../../../../models/table.models';
import { TableComponent } from '../../../../core/components/table/table.component';

@Component({
  selector: 'app-user-list',
  imports: [TableComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent extends MasterDataListComponent<UserViewModel> {

  constructor(
    @Inject(USER_SERVICE) private readonly userService: IUserService,
    private readonly router: Router
  ) {
    super();
  }

  public override columns: TableColumn[] = [
    { name: 'Id', value: 'id' },
    { name: 'Full Name', value: 'displayName' },
    { name: 'Username', value: 'userName' },
    { name: 'Email', value: 'email' },
    { name: 'Is Active', value: 'isActive' },

  ];

  viewDetails(id: string) {
    this.router.navigate(['/manager/user/details', id]);
  }
  edit($event: string) {
    throw new Error('Method not implemented.');
  }



  protected override initTable(): void {
    this.userService.getAll().subscribe((res) => {
      this.data = res;
    });
  }
}

