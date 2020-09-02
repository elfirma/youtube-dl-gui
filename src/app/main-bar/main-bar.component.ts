import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { PreviewService } from './preview.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PSetDialogBodyComponent } from '../p-set-dialog-body/p-set-dialog-body.component';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnInit {

  constructor(private preview : PreviewService, private matDialog : MatDialog) {}

  onSettingsClick(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "400px";
    dialogConfig.height = "auto";

    
    this.matDialog.open(PSetDialogBodyComponent, dialogConfig);
  }

  ngOnInit(): void {
  }

}
