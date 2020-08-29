import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';


@Injectable({
  providedIn: 'root'
})
export class DependenciesService {

  public dependencies = [
    'ffmpeg'
  ];

  constructor(private electron: ElectronService ) {

    console.log("Dependencies service started...");

    const fs = electron.remote.require('fs');
    console.log(fs);

    // const { spawn } = require("child_process");
    // console.log(spawn);

  }
}
