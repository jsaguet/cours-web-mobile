import { Component } from '@angular/core';
import { Joke, JokeService } from './joke.service';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JokeComponent } from './joke/joke.component';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf, RouterOutlet, JokeComponent, NgForOf],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly joke$ = this.jokeService.joke$;

  public readonly likedJokes$ = this.jokeService.likedJokes$;

  constructor(private readonly jokeService: JokeService) {}

  public nextJoke(): void {
    this.jokeService.nextJoke();
  }

  public jokeLiked(joke: Joke): void {
    this.jokeService.jokeLiked(joke);
  }
}
