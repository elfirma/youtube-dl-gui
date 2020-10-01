import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PresetService } from '../../../backend/services/preset.service'
import { Preset } from '../../../backend/assets/templates/preset';
import { ProviderService } from '../../../backend/provider.service';

@Component({
  selector: 'app-p-set-dialog-body',
  templateUrl: './p-set-dialog-body.component.html',
  styleUrls: ['./p-set-dialog-body.component.scss']
})
export class PSetDialogBodyComponent implements OnInit {

  public presets: Preset[];

  constructor(public dialogRef: MatDialogRef<PSetDialogBodyComponent>, private $provider: ProviderService) { 
    this.presets = this.$provider.presets;
  }

  close(): void {
    this.dialogRef.close("Thanks for using me!");
  }

  ngOnInit(): void {
    this.dialogRef.updatePosition({
      bottom: "203px"
    })


  }

}
