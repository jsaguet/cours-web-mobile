import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Joke {
  setup: string;

  delivery: string;
}

@Injectable({ providedIn: 'root' })
export class JokeService {
  constructor(private httpClient: HttpClient) {}

  public getJoke(): Observable<Joke> {
    return this.httpClient.get<Joke>(
      'https://v2.jokeapi.dev/joke/Programming?type=twopart&safe-mode'
    );
  }
}
