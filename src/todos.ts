export interface ToDos {
  meta: any | Meta;
  data: any | (DataEntity)[];
}
export interface Meta {
  pagination: Pagination;
}
export interface Pagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
  links: Links;
}
export interface Links {
  previous?: string;
  current: string;
  next?: string;
}
export interface DataEntity {
  id: number;
  user_id: number;
  title: string;
  due_on: string;
  status: string;
}
