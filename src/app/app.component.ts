import { Component } from '@angular/core';
import { DependenciesService } from './backend/services/dependencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-dl-gui';

  constructor(private dep: DependenciesService) {}

}
