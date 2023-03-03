import { JokesPageComponent } from './jokes-page.component';
import { Joke, JokeService } from '../joke.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

describe('JokesPageComponent', () => {
  let component: JokesPageComponent;
  let fixture: ComponentFixture<JokesPageComponent>;
  let jokeService: Partial<JokeService>;

  beforeEach(async () => {
    jokeService = {
      joke$: of({ delivery: '', setup: '' }),
      nextJoke: jest.fn(),
      jokeLiked: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [JokesPageComponent],
      providers: [{ provide: JokeService, useValue: jokeService }],
    }).compileComponents();

    fixture = TestBed.createComponent(JokesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('when next button is clicked', () => {
    test('should call nextJoke on JokeService', () => {
      fixture.nativeElement.querySelector('#next').click();

      expect(jokeService.nextJoke).toHaveBeenCalledWith();
    });
  });

  test('should call jokeLiked on JokeService', () => {
    const joke: Joke = { setup: '', delivery: '' };

    component.jokeLiked(joke);

    expect(jokeService.jokeLiked).toHaveBeenCalledWith(joke);
  });
});
