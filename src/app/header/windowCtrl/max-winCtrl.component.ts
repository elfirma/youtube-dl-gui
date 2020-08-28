import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-winctrl-max',
  template: `<mat-icon>fullscreen</mat-icon>`,
  styleUrls: ['./winCtrls.component.scss']
})
export class MaximizeWindowCtrlComponent implements OnInit {

  constructor(private electron: ElectronService) { }

  @HostListener('click') onClick(): void {
    console.log('+');
  }

  ngOnInit(): void {
  }

}
