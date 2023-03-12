import { inject, Injectable } from '@angular/core';
import { MoviesRepository } from './movies.repository';
import { GenresService } from './genres.service';
import { forkJoin, map, Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import { MovieResponse } from '../interfaces/movie-response.interface';

@Injectable({ providedIn: 'root' })
export class PopularMoviesService {
  moviesRepository = inject(MoviesRepository);
  genresService = inject(GenresService);

  public getPopularMovies(page: number = 1): Observable<Movie[]> {
    return forkJoin([
      this.moviesRepository.getPopularMovies(page),
      this.genresService.getGenres(),
    ]).pipe(
      map(([movies, genres]: [MovieResponse[], Record<number, string>]) => {
        return movies.map((movie) => ({
          id: movie.id,
          original_title: movie.original_title,
          genres: movie.genre_ids.map((id) => genres[id]),
        }));
      })
    );
  }
}
