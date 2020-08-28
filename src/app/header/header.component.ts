import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private electron: ElectronService){}

  onClick(): void{
    console.log('got here');
  }

  ngOnInit(): void {
    console.log(this.electron);
  }

}
