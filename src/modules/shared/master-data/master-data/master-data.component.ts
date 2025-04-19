import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { faPlus, faRotate, faSearch, faHome } from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { SearchModel, OrderDirection, PaginatedResult, TableColumn } from '../../../../models/table.models';

@Component({
  selector: 'app-master-data-list',
  templateUrl: './master-data.component.html',
  styleUrls: ['./master-data.component.css'],
})
export class MasterDataListComponent<T> {
  //#region Font Awesome icons
  public faPlus: IconDefinition = faPlus;
  public faSearch: IconDefinition = faSearch;
  public faRotate: IconDefinition = faRotate;
  public faHome: IconDefinition = faHome;

  //#endregion

  public isShowDetail: boolean = false;
  public selectedItem!: T | undefined | null;

  public searchForm!: FormGroup;

  public data!: T[];

  public columns: TableColumn[] = [
  ];

  constructor() {}

  ngOnInit(): void {
    this.createForm();
    this.initTable();
  }

  protected createForm(): void {}

  protected initTable(): void {}

  public onSubmit(): void {
    this.initTable();
  }

  public onCloseDetail(): void {
    console.log('Event send from detail');
    this.isShowDetail = false;
    this.initTable();
  }


}
