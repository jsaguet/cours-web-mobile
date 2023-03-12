import { inject, Injectable } from '@angular/core';
import { MoviesRepository } from './movies.repository';
import { map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import { MovieResponse } from '../interfaces/movie-response.interface';

@Injectable({ providedIn: 'root' })
export class PopularMoviesService {
  moviesRepository = inject(MoviesRepository);

  public getPopularMovies(page: number = 1): Observable<Movie[]> {
    return this.moviesRepository.getPopularMovies(page).pipe(
      map((movies: MovieResponse[]) => {
        return movies.map((movie) => ({
          id: movie.id,
          original_title: movie.original_title,
          genres: movie.genre_ids,
        }));
      })
    );
  }
}
