// Angular Core:
import { Component, OnInit } from '@angular/core';

// External Services:
import { MatDialog } from '@angular/material/dialog';

// Local Services:

// Components
import { PreviewService } from '../../../backend/services/preview.service';
import { PSetDialogBodyComponent } from '../../../dialogs/PSettings/p-set-dialog-body/p-set-dialog-body.component';


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
