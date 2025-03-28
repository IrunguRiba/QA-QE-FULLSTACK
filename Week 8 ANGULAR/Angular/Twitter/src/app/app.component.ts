import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwitterPageComponent } from './twitter-page/twitter-page.component';

@Component({
  selector: 'app-root',
  imports: [ TwitterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'twitter-clone';
}
