import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderState } from './loader-state';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSub = new BehaviorSubject<LoaderState>({ show: true });
  loaderState = this.loaderSub.asObservable();

  constructor() { }

  show() {
    console.log('inside loader serive show method');
    this.loaderSub.next(<LoaderState>{ show: true });
  }

  hide() {
    this.loaderSub.next(<LoaderState>{ show: false });
  }
}
