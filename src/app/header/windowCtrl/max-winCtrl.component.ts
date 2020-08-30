import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-winctrl-max',
  template: `<div class="button" id="btn_max"><svg aria-hidden="false" width="12" height="12" viewBox="0 0 12 12"><rect width="9" height="9" x="1.5" y="1.5" fill="none" stroke="currentColor"></rect></svg></div>`,
  styleUrls: ['./winCtrls.component.scss']
})
export class MaximizeWindowCtrlComponent implements OnInit {

  constructor(private electron: ElectronService) { }

  @HostListener('click') onClick(): void {
    this.electron.remote.getCurrentWindow().maximize();
  }

  ngOnInit(): void {
  }

}
