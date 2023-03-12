import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GenresResponse } from '../interfaces/genres-response.interface';

@Injectable({ providedIn: 'root' })
export class GenresService {
  private readonly http = inject(HttpClient);

  public getGenres(): Observable<Record<number, string>> {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=75943a3951570438452121a3db0fda8a`;
    return this.http.get<GenresResponse>(url).pipe(
      map((response: GenresResponse) =>
        response.genres.reduce((acc, genre) => {
          return { ...acc, [genre.id]: genre.name };
        }, {})
      )
    );
  }
}
