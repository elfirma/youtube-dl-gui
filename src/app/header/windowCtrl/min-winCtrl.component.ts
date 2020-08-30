import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-winctrl-min',
  template: `<div class="button" id="btn_min"><img class="icon" srcset="./assets/wndCtrls/min.png" draggable="false"></div>`,
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
