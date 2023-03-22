import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JokesPageComponent } from './jokes-page/jokes-page.component';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  standalone: true,
  imports: [RouterOutlet, JokesPageComponent, RouterLink],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(storage: AngularFireStorage) {}
}
