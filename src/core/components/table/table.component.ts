import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

import {
  FontAwesomeModule,
  IconDefinition,
} from '@fortawesome/angular-fontawesome';
import {
  faTrash,
  faPlus,
  faSearch,
  faEye,
  faPenToSquare,
  faHome,
  faSort,
} from '@fortawesome/free-solid-svg-icons';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderDirection, TableColumn } from '../../../models/table.models';

@Component({
  selector: 'app-table',
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  //#region Font Awesome icons
  public faTrash: IconDefinition = faTrash;
  public faPlus: IconDefinition = faPlus;
  public faSearch: IconDefinition = faSearch;
  public faEye: IconDefinition = faEye;
  public faPenToSquare: IconDefinition = faPenToSquare;
  public faHome: IconDefinition = faHome;
  public faSort: IconDefinition = faSort;
  //#endregion

  @Input() columns: TableColumn[] = [];
  @Input() public isShowNumber?: boolean = true;
  @Input() public role: string = '';
  @Input() public isShowDeleteAction: boolean = true;
  @Input() public isShowEditAction: boolean = true;
  @Input() public data!: any;

  public currentSortField: string | null = null;
  public currentSortDirection: OrderDirection | null = null;
  pageSizes = [2, 5, 10, 20, 50];
  inputPage: number | null = null;

  @Output() public onEdit: EventEmitter<string> = new EventEmitter<string>();

  @Output() public onDelete: EventEmitter<string> = new EventEmitter<string>();

  @Output() public onViewDetails: EventEmitter<string> =
    new EventEmitter<string>();

  public isModalOpen: boolean = false;
  private deleteItemId: string | null = null;

  confirmDelete(itemId: string) {
    this.deleteItemId = itemId;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.deleteItemId = null;
  }

  deleteRecord() {
    if (this.deleteItemId) {
      this.onDelete.emit(this.deleteItemId);
    }
    this.closeModal();
  }

  public calculateColspan(): number {
    let colspan = this.columns.length + 1;
    if (this.isShowNumber) {
      colspan++;
    }
    return colspan;
  }

  handleViewDetails(id: string): void {
    this.onViewDetails.emit(id);
  }

  handUpdate(id: string): void {
    this.onEdit.emit(id);
  }
}
