// Angular Core:
import { Injectable } from '@angular/core';

// External Services:

// Local Services:
import { DependenciesService } from './dependencies.service';
import { ElectronService } from 'ngx-electron';
import { PresetService } from './preset.service';

// Assets:
import { Metadata, Format, Thumbnail } from '../assets/templates/metadata';
import { QueueService } from './queue.service';



@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(
    public dependencies : DependenciesService,
    public electron : ElectronService,
    public presets : PresetService,
    public queue : QueueService,
  ) { }
}
