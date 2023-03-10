import {Component, inject} from '@angular/core';
import {AsyncPipe, NgForOf} from "@angular/common";
import {ClientsService} from "./clients.service";

@Component({
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf
  ],
  selector: 'cours-web-mobile-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public readonly clients$ = inject(ClientsService).clients$;
}
