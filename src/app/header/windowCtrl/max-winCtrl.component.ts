import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-winctrl-max',
  template: `<button mat-icon-button><mat-icon>fullscreen</mat-icon></button>`,
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
