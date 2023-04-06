import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JokesPageComponent } from './jokes-page/jokes-page.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [RouterOutlet, JokesPageComponent, RouterLink, TranslateModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly translateService = inject(TranslateService);

  public ngOnInit() {
    this.translateService.use('fr');
    this.translateService.setDefaultLang('en');
  }

  public useLanguage(lang: string) {
    this.translateService.use(lang);
  }
}
