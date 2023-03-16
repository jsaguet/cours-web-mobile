import { Joke } from '../joke.service';
import { createReducer, on } from '@ngrx/store';
import {
  jokeLiked,
  jokesFetchedSuccessfully,
  showDelivery,
} from './jokes.actions';

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
  on(jokeLiked, (state, { joke }) => ({
    ...state,
    likedJokes: [joke, ...state.likedJokes],
  })),
  on(jokesFetchedSuccessfully, (state, { joke }) => ({
    ...state,
    displayedJoke: joke,
    showDelivery: false,
  })),
  on(showDelivery, (state) => ({
    ...state,
    showDelivery: true,
  }))
);
