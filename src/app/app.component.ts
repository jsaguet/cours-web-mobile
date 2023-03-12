import { Component, inject } from '@angular/core';
import { PopularMoviesService } from './services/popular-movies.service';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { Movie } from './interfaces/movie.interface';
import { AsyncPipe, NgForOf } from '@angular/common';
import { GenresService } from './services/genres.service';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgForOf],
  selector: 'cours-web-mobile-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly popularMoviesService = inject(PopularMoviesService);
  private readonly genresService = inject(GenresService);

  private readonly page = new BehaviorSubject<number>(1);

  movies$: Observable<Movie[]> = this.page.pipe(
    switchMap((page) => this.popularMoviesService.getPopularMovies(page))
  );

  public getGenre(id: number): Observable<string> {
    return this.genresService.getGenresById(id);
  }

  nextPage() {
    this.page.next(this.page.getValue() + 1);
  }
}
