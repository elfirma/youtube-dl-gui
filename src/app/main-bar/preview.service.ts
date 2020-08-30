import { Injectable } from '@angular/core';
import { Metadata, Thumbnail, Format } from './metadata';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  private url : string;

  setURL(url : string){
    this.url = url;

    const {spawn} = this.electron.remote.require('child_process');

    async function fetchMetadata(url: string){
      return new Promise((resolve, reject) => {
        
        // Fetch Metadata
        const data = spawn("./src/api/youtube-dl.exe", [url, "-J"]);

        data.stdout.on('data', (buffer: any) => {
          const json = JSON.parse(buffer);
          console.log(json);

          resolve(json);

        })

        data.stderr.on('err', (err: any) => reject(err))

      });
    }

    fetchMetadata(url);

  }

  constructor(private electron: ElectronService) {}

}
