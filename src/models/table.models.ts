export interface TableColumn {
  name: string;
  value: string;
}


export interface PaginatedResult<T> {
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  items: T[];
}


export interface SearchModel {
  keyword: string;
  pageNumber: number;
  pageSize: number;
  orderBy: string;
  orderDirection: OrderDirection;
}

export enum OrderDirection {
  ASC = 0,
  DESC = 1,
}
