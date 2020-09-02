import { Component, OnInit, HostListener } from '@angular/core';
import { PreviewService } from './preview.service';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnInit {

  constructor(private preview : PreviewService, private electron : ElectronService) {}

  onSettingsClick(): void {

    const path = this.electron.remote.require('path');
    const url  = this.electron.remote.require('url');
    const {dialog} = this.electron.remote.require('electron')

    const wnd_pSettings = new this.electron.remote.BrowserWindow({
      width: 800,
      height: 400,

      frame: false,
      titleBarStyle: "hidden",
      
      webPreferences: {
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
        enableRemoteModule: true
      }
    });

    wnd_pSettings.loadURL(url.format({
      pathname: path.join("./psettings/window/", 'window.component.html'),
      protocol: 'file:',
      slashes: true
    }))

    dialog.showOpenDialog(wnd_pSettings);
  }

  ngOnInit(): void {
  }

}
