import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(
    private _backend : BackendService
  ) { 
  }

  

}
