import { Injectable } from '@angular/core';

import { BackendService } from './backend.service';

import { AppStateService } from './services/app-state.service';
import { PresetService } from './services/preset.service';
import { QueueService } from './services/queue.service';

import { Preset } from './assets/templates/preset';
import { State } from './assets/constant/appState.enum';

type Platform = 'aix'
              | 'android'
              | 'darwin'
              | 'freebsd'
              | 'linux'
              | 'openbsd'
              | 'sunos'
              | 'win32'
              | 'cygwin'
              | 'netbsd';

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

      if (save) this.$preset.syncPresets();

      return id;

    }

    public savePresets() : void {
      return this.$preset.syncPresets();
    }

  //#endregion

  //#region ---------- APP STATE ----------

    public get appState() : State {
      return this.$appState.appState;
    }

    public set appState(v: State) {
      this.$appState.appState = v;
    }

  //#endregion

  //#region ---------- Download Path ----------

    public os : Platform = this.$master.remote.process.platform;

    public path_seperator = this.os == "win32" ? "\\" : "\/";

    public download_path = 
      this.os == "win32"  ? this.$master.remote.process.env["USERPROFILE"] + "\\Downloads\\" :
      this.os == "linux"  ? "\~\/Download" :
      this.os == "darwin" ? "\~\/Download" :
      /* none of the above: */  ""; 

    public openFolderDialog() : void {

      let window = this.$master.remote.getCurrentWindow();

      this.$master.remote.dialog.showOpenDialog( window, {
        title : "Select Download Directory",
        properties : [ 'openDirectory' ]
      })
      .then(( v : Electron.OpenDialogReturnValue ) => {

        if (v.canceled) return;
        if (v.filePaths.length != 1)  return;

        // console.log(v.filePaths)

        this.download_path = v.filePaths[0];

      })
      .catch( reason => {
        console.warn(reason)
      })

    }

  //#endregion
}
