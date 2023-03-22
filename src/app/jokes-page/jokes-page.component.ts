import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joke } from '../joke.service';
import { JokeComponent } from '../joke/joke.component';
import { Store } from '@ngrx/store';
import { viewModel } from '../state/jokes.selectors';
import {
  applicationStarted,
  jokeLiked,
  nextClicked,
  showDelivery,
} from '../state/jokes.actions';

@Pipe({ standalone: true, name: 'likedJokesCount' })
export class LikedJokesCountPipe implements PipeTransform {
  transform(jokes: Joke[]): number {
    return jokes.length;
  }
}

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, JokeComponent, LikedJokesCountPipe],
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss'],
})
export class JokesPageComponent implements OnInit {
  public readonly viewModel$ = this.store.select(viewModel);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(applicationStarted());
  }

  public nextJoke(): void {
    this.store.dispatch(nextClicked());
  }

  public showDelivery(): void {
    this.store.dispatch(showDelivery());
  }

  public jokeLiked(joke: Joke): void {
    this.store.dispatch(jokeLiked({ joke }));
  }

  public getLikedJokesCount(jokes: Joke[]): number {
    console.log('getLikedJokesCount');
    return jokes.length;
  }
}
