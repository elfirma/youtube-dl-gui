import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-winctrl-close',
  template: `<button mat-icon-button><mat-icon>close</mat-icon></button>`,
  styleUrls: ['./winCtrls.component.scss']
})
export class CloseWindowCtrlComponent implements OnInit {

  constructor(private electron : ElectronService) { }

	@HostListener('click') onClick(){
    this.electron.remote.getCurrentWindow().close();
	}

  ngOnInit(): void {
  }

}
