import { Component, OnInit, HostListener } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-winctrl-close',
  template: `<mat-icon>close</mat-icon>`,
  styleUrls: ['./winCtrls.component.scss']
})
export class CloseWindowCtrlComponent implements OnInit {

  constructor(private electron : ElectronService) { }

	@HostListener('click') onClick(){
    console.log('X');
	}

  ngOnInit(): void {
  }

}
