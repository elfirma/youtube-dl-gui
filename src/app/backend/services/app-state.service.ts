import { Injectable } from '@angular/core';
import { BackendService } from '../backend.service';
import { State, StateDesc } from '../assets/constant/appState.enum';
import { BrowserWindow } from 'electron';

type overlayIconSrcLibary = {
  [index in State | "dir"]: string | null;
};

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private flash_onState = {
       
    // Flashes for 1 sec
    timed : [
      State.FINISHED
    ],

    // Flashes until focus is restored
    perm : [
      State.ERROR,
      State.OFFLINE
    ]

  };

  private overlayIcons : overlayIconSrcLibary = {
    
    // Path to Icon Directory
    dir : "./src/assets/",

    // List of all Icons to be displayed as an overlay
    // null -> no Icon displayed
    [State.FINISHED]     : "done.ico",
    [State.WORKING]      : "download.ico",
    [State.OFFLINE]      : "error.ico",
    [State.QUEUED]       : "queue.icon",
    [State.ERROR]        : "error.ico",
    [State.IDLE]         : null,
    [State.INIT]         : null,
    [State.UNRESPONSIVE] : null

  };

  constructor(
    private $master : BackendService
  ) { }

  private _appState : State;

  public set appState(s: State) {

    this._appState = s;

    // Change Overlay Icon
    this.overlay = s;

    // Flash Icon if neccesary
    if (this.flash_onState.perm.indexOf(s) >= 0) this.flash(false);
    if (this.flash_onState.timed.indexOf(s) >= 0) this.flash(true);

  }

  public get appState(): State {
    return this._appState;
  }


  // Flashes the taskbar icon on given states
  private flash(timed = true) : void {

    const {remote} = this.$master;
    const win = remote.getCurrentWindow();

    win.once('focus', () => win.flashFrame(false));

    win.flashFrame(true);

    if (timed) setTimeout((w : BrowserWindow) => {
      w.flashFrame(false);
    }, 1000, win);

  }


  // Changes the overlayicon
  private set overlay(s: State){
    
    const { node, remote } = this.$master;
    const { path } = node;
    const win = remote.getCurrentWindow();

    const icon = path.join(this.overlayIcons["dir"], this.overlayIcons[s]);

    win.setOverlayIcon(icon, StateDesc[s] ?? "")

  }
  

}
