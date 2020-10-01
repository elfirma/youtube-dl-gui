import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { ProviderService } from './provider.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(
    private $backend  : BackendService,
    private $provider : ProviderService
  ) { 

    // Load saved presets from filesystem
    this.$provider.updatePresets();

  }

  

}
