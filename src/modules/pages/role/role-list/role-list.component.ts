import { Component, Inject, OnInit } from '@angular/core';
import IRoleService from '../../../../services/role/role-service.interface';
import { ROLE_SERVICE } from '../../../../constants/injection.constant';
import { MasterDataListComponent } from '../../../shared/master-data/master-data/master-data.component';
import { RoleViewModel } from '../../../../models/role.models';
import { Router } from '@angular/router';
import { TableColumn } from '../../../../models/table.models';
import { TableComponent } from '../../../../core/components/table/table.component';

@Component({
  selector: 'app-role-list',
  imports: [TableComponent],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css',
})
export class RoleListComponent extends MasterDataListComponent<RoleViewModel> {

  constructor(
    @Inject(ROLE_SERVICE) private readonly roleService: IRoleService,
    private readonly router: Router
  ) {
    super();
  }

  public override columns: TableColumn[] = [
    { name: 'Id', value: 'id' },
    { name: 'Name', value: 'name' },
    { name: 'Description', value: 'description' },
    { name: 'Is Active', value: 'isActive' },

  ];

  viewDetails(id: string) {
    this.router.navigate(['/manager/role/details', id]);
  }
  edit($event: string) {
    throw new Error('Method not implemented.');
  }



  protected override initTable(): void {
    this.roleService.getAll().subscribe((res) => {
      this.data = res;
    });
  }
}


