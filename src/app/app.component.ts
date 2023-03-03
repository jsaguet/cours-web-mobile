import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf],
  selector: 'cours-web-mobile-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter$: Observable<number> = this.appService.counter$;

  constructor(private readonly appService: AppService) {}

  emitValue(value: number): void {
    this.appService.emitNewCounterValue(value + 1);
  }
}
