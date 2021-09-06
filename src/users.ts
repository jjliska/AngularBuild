export interface Users {
  meta?: Meta;
  data?: (DataEntity)[];
}
export interface Meta {
  pagination?: Pagination;
}
export interface Pagination {
  total: number;
  pages: number;
  page: number;
  limit: number;
  links?: Links;
}
export interface Links {
  previous?: string;
  current: string;
  next?: string;
}
export interface DataEntity {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
}
