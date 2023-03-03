import { Component } from '@angular/core';
import { AppService } from './app.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf],
  selector: 'cours-web-mobile-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  joke$ = this.appService.getJoke();

  constructor(private readonly appService: AppService) {}
}
