import { Component, OnInit } from '@angular/core';
import { PresetService, Preset } from '../../../backend/services/preset.service';

@Component({
  selector: 'app-preset-selector',
  templateUrl: './preset-selector.component.html',
  styleUrls: ['./preset-selector.component.scss']
})
export class PresetSelectorComponent implements OnInit {

  public presets: Preset[];

  constructor(private presetsService: PresetService) {

    this.presets = presetsService.getPresets();

  }

  ngOnInit(): void {
  }

}
