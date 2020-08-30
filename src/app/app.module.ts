// Core Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Imports
// import { MatSliderModule } from '@angular/material/slider';#
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Import Services
import { QueueService } from './queue/queue.service';
import { ElectronService, NgxElectronModule } from 'ngx-electron';

// Component Imports
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { QueueComponent } from './queue/queue.component';
import { HeaderComponent } from './header/header.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { PlaylistComponent } from './main-bar/playlist/playlist.component';
import { CloseWindowCtrlComponent } from './header/windowCtrl/close-winCtrl.component';
import { MinimizeWindowCtrlComponent } from './header/windowCtrl/min-winCtrl.component';
import { MaximizeWindowCtrlComponent } from './header/windowCtrl/max-winCtrl.component';
import { PresetSelectorComponent } from './main-bar/preset-selector/preset-selector.component';
import { DependenciesService } from './dependencies.service';
import { PresetService } from './main-bar/preset-selector/preset.service';
import { PreviewService } from './main-bar/preview.service';

@NgModule({

  declarations: [

    // Structure Components
    AppComponent,

    // Header Components
    HeaderComponent,
    CloseWindowCtrlComponent,
    MinimizeWindowCtrlComponent,
    MaximizeWindowCtrlComponent,

    // Queue Components
    ItemComponent,
    QueueComponent,

    // Footer Components
    MainBarComponent,
    PlaylistComponent,
    PresetSelectorComponent,

  ],

  imports: [

    BrowserModule,
    NgxElectronModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,

  ],

  providers: [
    QueueService,
    ElectronService,
    DependenciesService,
    PresetService,
    PreviewService
  ],

  bootstrap: [
    AppComponent
  ]

})
export class AppModule { }
