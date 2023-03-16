import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JokesPageComponent } from './jokes-page/jokes-page.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, JokesPageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
