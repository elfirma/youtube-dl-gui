import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { PreviewService } from './preview.service';
import { MatDialog } from '@angular/material/dialog';
import { PSetDialogBodyComponent } from '../p-set-dialog-body/p-set-dialog-body.component';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnInit {

  constructor(private preview : PreviewService, private matDialog : MatDialog) {}

  onSettingsClick(): void {
      const dialogRef = this.matDialog.open(PSetDialogBodyComponent, {
      width: "1100px",
      height: "500px",
      autoFocus: true,
    });
  }

  ngOnInit(): void {
  }

}
