import { Injectable } from '@angular/core';
import { CLIDT } from './assets/constant/clidt.enum';
import { BackendService } from './backend.service';
import { CLIData } from './class/clidata';
import { PATHS } from './lib/paths.lib';

type ResultObject = {
  [key in CLIDT]: RegExpMatchArray;
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private $master : BackendService
  ){ }

  // CLI PARSING // 

    private Pattern = {
      warning             : /WARNING: (?<txt>.+)/,
      destination         : /\[download\] Destination: (?<Destination>.+)/,
      progress            : /\[download\]\s+(?<percentage>[\d\.]{1,5})% of ~?(?<filesize>\d+\.\d{2})(?<filesizeu>Ki|Mi|Gi|Ti|)B(?: at\s+(?<speed>\d+\.\d{2})(?<speedu>Ki|Mi|Gi|Ti|)B\/s ETA (?<ETA>\d\d?(?:\:\d\d)+))?/,
      ffmpeg_destination  : /\[ffmpeg\] Destination: (?<Destination>.+)/,
    }
    
    private matchPattern( data: Buffer, pattern:  RegExp ) : RegExpMatchArray {
      return (data.toString() ?? "").match(pattern);
    }

    private parseToEnum<T>(key : string) : T {
        return <T> <unknown> Number(key);
    }

    private parseCLI(data : Buffer) : void /*<--- CHANGE PLOX*/  {

      // Parsing data from console log
    
      let CLID !: CLIData;

      const results : ResultObject = {
        [CLIDT.WARN] : this.matchPattern(data, this.Pattern.warning),
        [CLIDT.DEST] : this.matchPattern(data, this.Pattern.destination),
        [CLIDT.PROG] : this.matchPattern(data, this.Pattern.progress),
        [CLIDT.FFMP] : this.matchPattern(data, this.Pattern.ffmpeg_destination),
        [CLIDT.TEST] : this.matchPattern(data, /./)
      }

      for (const key in results) if(results[key] != []) {
        
        CLID = new CLIData(this.parseToEnum<CLIDT>(key), results[key])

        break;
      }

      console.log(data.toString())
    
      return;

    }


  // SUBPROCESS MANAGEMENT // 

    private cProcess = this.$master.node.child_process;

    private async fetchData( ...args : string[] ) : Promise<Object[]> {
      return new Promise((res, rej) => {

        const process = this.cProcess.spawn(args);
        const returns = [];

        process.stdout.on('data', data => {
          returns.push(data);
        })

        process.stderr.on('data', (err : any) => rej(err));
        process.stdout.on('err',  (err : any) => rej(err));


        process.on('close', ( code : number ) => {
          res(returns);
        });

      })
    }


    public async fetchJSON(url : string) {

      this.fetchData(PATHS.youtube_dl, url, "-J")
      .then(data => {

      })
      .catch(err => {
        console.error(new Error(err));
        throw err;
      })
      

      
    }
  
}
