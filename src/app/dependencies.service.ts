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

    // const { spawn } = require("child_process");
    // console.log("SPAWN:", spawn);

  }
}
