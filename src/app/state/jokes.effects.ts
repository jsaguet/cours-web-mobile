import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Joke, JokeService } from '../joke.service';
import {
  applicationStarted,
  jokeLiked,
  jokesFetchedFailure,
  jokesFetchedSuccessfully,
  nextClicked,
} from './jokes.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class JokesEffects {
  actions$ = inject(Actions);
  jokeService = inject(JokeService);

  fetchJokes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(applicationStarted, jokeLiked, nextClicked),
      switchMap(() =>
        this.jokeService.getJoke().pipe(
          map((joke: Joke) => jokesFetchedSuccessfully({ joke })),
          catchError(() => of(jokesFetchedFailure()))
        )
      )
    )
  );
}
