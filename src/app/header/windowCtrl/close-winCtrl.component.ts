import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-winctrl-close',
  template: `<div class="button" id="btn_close"><img class="icon" srcset="./assets/wndCtrls/close.png" draggable="false"></div>`,
  styleUrls: ['../header.component.scss']
})
export class CloseWindowCtrlComponent implements OnInit {

  constructor(private electron : ElectronService) { }

	@HostListener('click') onClick(){
    this.electron.remote.getCurrentWindow().close();
	}

  ngOnInit(): void {
  }

}
