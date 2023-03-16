import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, JokesState } from './jokes.reducer';

export const jokesState = createFeatureSelector<JokesState>(featureKey);

export const displayedJoke = createSelector(
  jokesState,
  (state: JokesState) => state.displayedJoke
);
export const likedJokes = createSelector(
  jokesState,
  (state) => state.likedJokes
);

export const countLikedJokes = createSelector(
  likedJokes,
  (likedJokes) => likedJokes.length
);

export const showDelivery = createSelector(
  jokesState,
  (state: JokesState) => state.showDelivery
);

export const viewModel = createSelector(
  displayedJoke,
  likedJokes,
  showDelivery,
  countLikedJokes,
  (displayedJoke, likedJokes, showDelivery, countLikedJokes) => ({
    displayedJoke,
    likedJokes,
    showDelivery,
    countLikedJokes,
  })
);
