import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-winctrl-min',
  template: `<button mat-icon-button><mat-icon>minimize</mat-icon></button>`,
  styleUrls: ['./winCtrls.component.scss']
})
export class MinimizeWindowCtrlComponent implements OnInit {

  constructor(private electron: ElectronService) { }

  @HostListener('click') onClick(): void {
    this.electron.remote.getCurrentWindow().minimize();
  }

  ngOnInit(): void {
  }

}
