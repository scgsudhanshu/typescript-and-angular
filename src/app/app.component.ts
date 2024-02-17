import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hoteinventory';

  checkinDate = new Date();
  currencyM = 8000
  numm = 9.4
}
