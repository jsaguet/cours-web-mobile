import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MovieResponse } from '../interfaces/movie-response.interface';
import { MoviesResponse } from '../interfaces/movies-response.interface';

@Injectable({ providedIn: 'root' })
export class MoviesRepository {
  private readonly http = inject(HttpClient);

  public getPopularMovies(page = 1): Observable<MovieResponse[]> {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=75943a3951570438452121a3db0fda8a&page=${page}`;
    return this.http
      .get<MoviesResponse>(url)
      .pipe(map((response: MoviesResponse) => response.results));
  }
}
