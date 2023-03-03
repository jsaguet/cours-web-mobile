import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joke, JokeService } from '../joke.service';
import { JokeComponent } from '../joke/joke.component';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule, JokeComponent],
  templateUrl: './jokes-page.component.html',
  styleUrls: ['./jokes-page.component.scss'],
})
export class JokesPageComponent {
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
