
import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './app-header/header.component';
import {FooterComponent} from './app-footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent,  FooterComponent],
})
export class AppComponent {
  title = 'My Angular App';

}

