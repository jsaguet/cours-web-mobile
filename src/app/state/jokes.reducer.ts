import { Joke } from '../joke.service';
import { createReducer, on } from '@ngrx/store';
import {
  jokeLiked,
  jokesFetchedSuccessfully,
  showDelivery,
} from './jokes.actions';
import produce from 'immer';

export const featureKey = 'jokes';

export interface JokesState {
  displayedJoke: Joke | null;
  showDelivery: boolean;
  likedJokes: Joke[];
}

export const jokesInitialState: JokesState = {
  displayedJoke: null,
  showDelivery: false,
  likedJokes: [],
};

export const jokesReducer = createReducer(
  jokesInitialState,
  on(
    jokeLiked,
    produce((state, { joke }) => {
      state.likedJokes = [joke, ...state.likedJokes];
    })
  ),
  on(
    jokesFetchedSuccessfully,
    jokeLiked,
    produce((draftState, { joke }) => {
      draftState.displayedJoke = joke;
      draftState.showDelivery = false;
    })
  ),
  on(
    showDelivery,
    produce((state) => {
      state.showDelivery = true;
    })
  )
);
