import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppService {
  private counterSubject = new BehaviorSubject<number>(1);
  counter$: Observable<number> = this.counterSubject.asObservable();

  public emitNewCounterValue(value: number) {
    this.counterSubject.next(value);
  }
}
