// Core Imports
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { BrowserModule }                from '@angular/platform-browser';

import { BrowserAnimationsModule }      from '@angular/platform-browser/animations';

//-----------------------------------// SERVICES //-----------------------------------//

//#region -> External Services            DIR: [[*]]
  import { ElectronService, NgxElectronModule } from 'ngx-electron';
//#endregion

//#region -> Local Services               DIR: [[./backend/services/*]]
  import { QueueService }                 from './backend/services/queue.service';
  import { PresetService }                from './backend/services/preset.service';
  import { PreviewService }               from './backend/services/preview.service';
  import { DependenciesService }          from './backend/services/dependencies.service';
//#endregion

//-----------------------------------// COMPONENTS //-----------------------------------//

//#region -> Material Components          DIR: [[@angular/material/*]]
import { MatCardModule }                from '@angular/material/card';
import { MatMenuModule }                from '@angular/material/menu';
import { MatIconModule }                from '@angular/material/icon';
import { MatInputModule }               from '@angular/material/input';
import { MatDialogModule }              from '@angular/material/dialog';
import { MatSelectModule }              from '@angular/material/select';
import { MatButtonModule }              from '@angular/material/button';
import { MatDividerModule }             from '@angular/material/divider';
import { MatExpansionModule }           from '@angular/material/expansion';
import { MatFormFieldModule }           from '@angular/material/form-field';
import { MatProgressBarModule }         from '@angular/material/progress-bar';
import { MatProgressSpinnerModule }     from '@angular/material/progress-spinner';
//#endregion

import { AppComponent }                 from './app.component';

//#region -> Header Components            DIR: [[./components/header/*]]
  import { HeaderComponent }              from './components/header/header.component';
  import { CloseWindowCtrlComponent }     from './components/header/windowCtrl/close-winCtrl.component';
  import { MinimizeWindowCtrlComponent }  from './components/header/windowCtrl/min-winCtrl.component';
  import { MaximizeWindowCtrlComponent }  from './components/header/windowCtrl/max-winCtrl.component';
//#endregion

//#region -> Body Components              DIR: [[./components/body/*]]
  import { ItemsComponent }               from './components/body/items/items.component';
  import { QueueComponent }               from './components/body/queue/queue.component';
//#endregion

//#region -> Footer Components            DIR: [[./components/footer/*]]
  import { UrlBarComponent }              from './components/footer/url-bar/url-bar.component';
  import { MainBarComponent }             from './components/footer/main-bar/main-bar.component';
  import { PresetSelectorComponent }      from './components/footer/preset-selector/preset-selector.component';
  import { PreviewComponent }             from './components/footer/preview/preview.component';
//#endregion

//#region -> Dialog Components            DIR: [[./dialog/*]]
  import { PSetDialogBodyComponent }      from './dialogs/PSettings/p-set-dialog-body/p-set-dialog-body.component';
//#endregion


@NgModule({

  declarations: [

    // Structure Components
    AppComponent,

    // Header Components
    HeaderComponent,
    CloseWindowCtrlComponent,
    MinimizeWindowCtrlComponent,
    MaximizeWindowCtrlComponent,

    // Body Components
    ItemsComponent,
    QueueComponent,

    // Footer Components
    MainBarComponent,
    PresetSelectorComponent,
    UrlBarComponent,
    PSetDialogBodyComponent,
    PreviewComponent,

  ],

  imports: [

    BrowserModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    FormsModule, 

    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    
  ],

  providers: [
    QueueService,
    ElectronService,
    DependenciesService,
    PresetService,
    PreviewService,

  ],

  bootstrap: [
    AppComponent
  ],

  entryComponents: [
    PSetDialogBodyComponent,
  ]
})
export class AppModule { }
