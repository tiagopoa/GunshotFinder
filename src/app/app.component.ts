import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  zoom: number = 8;
  lat: number = 51.678418;
  lng: number = 7.809007;
}
