import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public filterLocation =new BehaviorSubject<string>('')
  public filterTitle =new BehaviorSubject<string>('')
  public isCheck =new BehaviorSubject<boolean>(false)
  constructor() { }
  getFilterLocation() {
    return this.filterLocation.asObservable()
  }

  getFilterTitle() {
   return this.filterTitle.asObservable()
  }

  getIsCheck() {
    return this.isCheck.asObservable()
  }
}
