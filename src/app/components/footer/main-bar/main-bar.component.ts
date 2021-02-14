// Angular Core:
import { Component, OnInit } from '@angular/core';

// External Services:
import { MatDialog } from '@angular/material/dialog';

// Local Services:

// Components
import { PSetDialogBodyComponent } from '../../../dialogs/PSettings/p-set-dialog-body/p-set-dialog-body.component';
import { ProviderService } from '../../../backend/provider.service';


@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnInit {

  constructor(private $provider : ProviderService, private matDialog : MatDialog) {}

  onSettingsClick(): void {
      const dialogRef = this.matDialog.open(PSetDialogBodyComponent, {
      width: "1100px",
      height: "500px",
      autoFocus: true,
    });
  }

  dl_btn(): void {

  }

  add_btn(): void {

  }

  ngOnInit(): void {
  }

}
