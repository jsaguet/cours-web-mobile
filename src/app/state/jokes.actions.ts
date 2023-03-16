import { createAction, props } from '@ngrx/store';
import { Joke } from '../joke.service';

export const applicationStarted = createAction('[Startup] Application started');
export const jokesFetchedSuccessfully = createAction(
  'Jokes fetched OK',
  props<{ joke: Joke }>()
);
export const jokesFetchedFailure = createAction('Jokes not fetched');

export const jokeLiked = createAction('Joke liked', props<{ joke: Joke }>());

export const nextClicked = createAction('Next clicked');

export const showDelivery = createAction('Show joke delivery');
