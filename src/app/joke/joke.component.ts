import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joke } from '../joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JokeComponent {
  @Input() public joke!: Joke;
  @Input() public showDelivery = true;

  getJokeSetup(joke: Joke): string {
    console.log('getJokeSetup');
    return joke.setup;
  }
}
