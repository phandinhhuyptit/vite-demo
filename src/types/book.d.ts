export type Attribute = {
  title: string;
  content: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
export interface IBookResponse {
  data: Array<Book>;
  status: string;
  meta: {
    pagination: Pagination;
  };
}
export interface Book {
  id: number;
  attributes: Attribute;
}

export interface Pagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

export interface Params {}
