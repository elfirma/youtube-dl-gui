import { Injectable } from '@angular/core';

import { BackendService } from './backend.service';

import { AppStateService } from './services/app-state.service';
import { PresetService } from './services/preset.service';
import { QueueService } from './services/queue.service';

import { Preset } from './assets/templates/preset';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(
    private $master   : BackendService,
    private $appState : AppStateService,
    private $preset   : PresetService,
    private $queue    : QueueService 
  ) { }

  //#region ---------- PRESETS ----------
  
    public updatePresets(): Preset[] {
      return this.$preset.loadPresets();
    }

    public get presets() : Preset[]{
      return this.$preset.presets;
    }

    public get presetNames(): string[]{
      return this.$preset.presetNames;
    }
  
    public addPreset(newPreset : Preset, save= false) : number {
      
      let id: number;
      
      // Get the next id from the last id in the array
      newPreset.id = (id = this.presets[this.presets.length - 1].id + 1);

      // Push Preset in Array
      this.$preset.presets.push(newPreset);

      if (save) this.$preset.savePresets();

      return id;

    }

    public savePresets() : void {
      return this.$preset.savePresets();
    }
  //#endregion











}
