import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

export interface Preset {
  id: number;
  name: string;
  args: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PresetService {

  public presetNames = [];
  public presets = [];

  constructor(private electron: ElectronService) {

    const fs = electron.remote.require('fs');
    const path = electron.remote.require('path');

    console.log("loading Profiles...");

    const presetPath = "./src/assets/presets";

    // Reading the director for all available Presets
    const presets = fs.readdirSync(presetPath);

    // For each preset:
    for (const presetFile of presets) {

      // Read and parse the file
      const data = fs.readFileSync(path.join(presetPath, presetFile));
      const preset: Preset = JSON.parse(data);

      // Add them to the database
      this.presets[preset.id] = preset;
      this.presetNames[preset.id] = preset.name;

    }

    console.log("Loaded Presets:", {...this.presetNames});

  }

  getPresets(): Preset[] {
    return this.presets;
  }

  getPresetNames(): string[] {
    return this.presetNames;
  }

}
