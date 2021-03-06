import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-winctrl-close',
  template: `<div class="button" id="btn_close"><svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12" draggable="false"><polygon fill="currentColor" fill-rule="evenodd" points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"></polygon></svg></div>`,
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
// <img class="icon" srcset="./assets/wndCtrls/close.png" draggable="false">