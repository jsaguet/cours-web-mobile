import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { likedJokes } from '../state/jokes.selectors';
import { JokeComponent } from '../joke/joke.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, JokeComponent],
  template: ` <div id="liked-jokes">
    <p>Liked jokes:</p>
    <app-joke *ngFor="let joke of viewModel$ | async" [joke]="joke"></app-joke>
  </div>`,
})
export class FavoritesComponent {
  private store = inject(Store);
  public viewModel$ = this.store.select(likedJokes);
}
