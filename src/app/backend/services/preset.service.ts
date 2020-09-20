// Angular Core:
import { Injectable } from '@angular/core';

// External Services:
import { Preset } from '../assets/templates/preset';
import { BackendService } from '../backend.service';

// Local Services:

// Assets:


@Injectable({
  providedIn: 'root'
})
export class PresetService {

  public presetNames = [];
  public presets = [];

  constructor(private $master: BackendService) {

    

  }

  loadPresets(){

    const {fs, path} = this.$master.node;

    console.log("loading Profiles...");

    const presetPath = "./src/assets/json/presets/";

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

    return this.presets;
  }


  public savePresets() : void {
    
  }

  getPresets(): Preset[] {
    return this.presets;
  }

  getPresetNames(): string[] {
    return this.presetNames;
  }

}
