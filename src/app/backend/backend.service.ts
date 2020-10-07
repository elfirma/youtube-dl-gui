// Angular Core:
import { Injectable } from '@angular/core';

// External Services:
import { ElectronService } from 'ngx-electron';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

	public globalDebug : boolean = true;

  constructor(
		private $electron : ElectronService
  ){}

	// ELECTRON

	public remote = this.$electron.remote;

	public node = {
		fs 			  : this.remote.require('fs'),
		path		  : this.remote.require('path'),
		child_process : this.remote.require('child_process')
	}


}
