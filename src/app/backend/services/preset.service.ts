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
  
  private presetPath = "./src/assets/json/presets/";

  public presetNames = [];
  public presets = [];

  constructor(private $master: BackendService) { }

  loadPresets(){

    // Clear all entries
    this.presets = [];

    const {fs, path} = this.$master.node;

    if (this.$master.globalDebug) console.log("loading Profiles...");


    // Reading the director for all available Presets
    const presets = fs.readdirSync(this.presetPath);

    // For each preset:
    for (const presetFile of presets) {

      // Read and parse the file
      const data = fs.readFileSync(path.join(this.presetPath, presetFile));
      const preset: Preset = JSON.parse(data);

      // Add them to the database
      this.presets[preset.id] = preset;
      this.presetNames[preset.id] = preset.name;

    }

    if (this.$master.globalDebug) console.log("Loaded Presets:", {...this.presetNames});

    return this.presets;
  }


  public syncPresets() : void {

    const {path, fs} = this.$master.node;

    // Create a copy of the current preset list
    let copy : Preset[] = [...this.presets];

    // Load a copy of all files in the fs    
    let ref  : Preset[] = [...this.loadPresets()]

    // If Arrays have same length [...]
    if (copy.length == ref.length) {

      // [...] check if Arrays are equal
      let equal = true;
      copy.forEach((e: Preset, i: number) => equal = equal && (e == ref[i]));
      
      // Exit if no changes are found
      if (equal) return;
      
    }

    // // Array of Presets to delete
    // let del = ref.filter(e => copy.indexOf(e) == -1);

    // // Array of Presets to save
    // let sav = copy.filter(e => ref.indexOf(e) != -1);

    for (const preset of copy) {

      const a : Preset = preset.id >= ref.length ? ref[preset.id ?? 0] : ref[0];
      
      // Skip unchanged Presets
      if (preset == a) continue;

      // Delete old versions of changed presets
      fs.unlinkSync(path.join(this.presetPath,));

    }


  }

  getPresets(): Preset[] {
    return this.presets;
  }

  getPresetNames(): string[] {
    return this.presetNames;
  }

}
