import { Component, OnInit, HostListener } from '@angular/core';
import { ProviderService } from '../../../backend/provider.service';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent implements OnInit {

  @HostListener('click') onClick(): void {
    
    this.$provider.openFolderDialog();

  }

  public path !: string;

  constructor(public $provider : ProviderService) {

    this.path = this.$provider.download_path;

    console.log(this.$provider.os, this.path)

  }

  ngOnInit(): void {
  }

}
