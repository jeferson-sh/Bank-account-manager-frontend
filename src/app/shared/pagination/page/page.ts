import  { Sort } from '../sort/sort';
import  { Pageable } from '../pageable/pageable';
 
export class Page<T> {
  content: Array<T>;
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  sort: Sort;
  numberOfElements: number;
  size: number;
  number: number;
 
  public constructor() {
    this.pageable = new Pageable();
  }
}