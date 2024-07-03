import { Component } from '@angular/core';
import { WeatherComponent } from './weather/weather.component';
WeatherComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
}
