import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../../backend/provider.service';
import { Preset } from '../../../backend/assets/templates/preset';

@Component({
  selector: 'app-preset-selector',
  templateUrl: './preset-selector.component.html',
  styleUrls: ['./preset-selector.component.scss']
})
export class PresetSelectorComponent implements OnInit {

  public presets: Preset[];

  constructor(private $provider : ProviderService) {

    this.presets = $provider.presets;

  }

  ngOnInit(): void {
  }

}
