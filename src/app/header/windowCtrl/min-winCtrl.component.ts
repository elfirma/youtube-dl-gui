import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-winctrl-min',
  template: `<div class="button" id="btn_min"><svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12" draggable="false"><rect fill="currentColor" width="10" height="1" x="1" y="6"></rect></svg></div>`,
  styleUrls: ['../header.component.scss']
})
export class MinimizeWindowCtrlComponent implements OnInit {

  constructor(private electron: ElectronService) { }

  @HostListener('click') onClick(): void {
    this.electron.remote.getCurrentWindow().minimize();
  }

  ngOnInit(): void {
  }

}
// <img class="icon" srcset="./assets/wndCtrls/min.png" draggable="false">