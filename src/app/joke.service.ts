import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';

export interface Joke {
  setup: string;

  delivery: string;
}

@Injectable({ providedIn: 'root' })
export class JokeService {
  likedJokes = new BehaviorSubject<Joke[]>([]);
  likedJokes$: Observable<Joke[]> = this.likedJokes.asObservable();

  fetchNextJoke = new BehaviorSubject<void>(void 0);

  joke$ = this.fetchNextJoke.pipe(switchMap(() => this.getJoke()));

  constructor(private httpClient: HttpClient) {}

  public getJoke(): Observable<Joke> {
    return this.httpClient.get<Joke>(
      'https://v2.jokeapi.dev/joke/Programming?type=twopart&safe-mode'
    );
  }

  public nextJoke() {
    this.fetchNextJoke.next();
  }

  jokeLiked(joke: Joke): void {
    const alreadyLikedJoyes = this.likedJokes.getValue();
    this.likedJokes.next([joke, ...alreadyLikedJoyes]);
  }
}
