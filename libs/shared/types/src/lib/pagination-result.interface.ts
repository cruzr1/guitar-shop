export interface PaginationResult<T> {
  entities: T[];
  totalPages: number;
  currentPage: number;
}
