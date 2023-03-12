import { MovieResponse } from './movie-response.interface';

export interface MoviesResponse {
  page: number;
  results: MovieResponse[];
}
