import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-winctrl-max',
  template: `<div class="button" id="btn_max"><img class="icon" srcset="./assets/wndCtrls/max.png" draggable="false"></div>`,
  styleUrls: ['../header.component.scss']
})
export class MaximizeWindowCtrlComponent implements OnInit {

  constructor(private electron: ElectronService) { }

  @HostListener('click') onClick(): void {
    this.electron.remote.getCurrentWindow().maximize();
  }

  ngOnInit(): void {
  }

}
