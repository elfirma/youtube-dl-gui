import { Component } from '@angular/core';

import { InitService } from './backend/init.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-dl-gui';

  constructor(private init: InitService) {}

}
