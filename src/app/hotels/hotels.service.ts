import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private filtersSubject = new BehaviorSubject<any>({});
  filters$ = this.filtersSubject.asObservable();
  
constructor() { }

setFilters(filters: any) {
  this.filtersSubject.next(filters);
}
}
