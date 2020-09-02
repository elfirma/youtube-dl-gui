import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PresetService, Preset } from './preset.service'

@Component({
  selector: 'app-p-set-dialog-body',
  templateUrl: './p-set-dialog-body.component.html',
  styleUrls: ['./p-set-dialog-body.component.scss']
})
export class PSetDialogBodyComponent implements OnInit {

  public presets: Preset[];

  constructor(public dialogRef: MatDialogRef<PSetDialogBodyComponent>, private presetsService: PresetService) { 
    this.presets = presetsService.getPresets();
  }

  close(): void {
    this.dialogRef.close("Thanks for using me!");
  }

  ngOnInit(): void {
  }

}
