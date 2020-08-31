import { Component, OnInit, HostListener } from '@angular/core';
import { PreviewService } from './preview.service';
import { ElectronService } from 'ngx-electron';

const path = require('path')
const url = require('url')
const { dialog } = require('electron').remote;

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnInit {

  constructor(private preview : PreviewService, private electron : ElectronService) {}

  onSettingsClick(): void {
    let wnd_pSettings = new this.electron.remote.BrowserWindow({
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
