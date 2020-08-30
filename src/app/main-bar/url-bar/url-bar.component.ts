import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../preview.service';

@Component({
  selector: 'app-url-bar',
  templateUrl: './url-bar.component.html',
  styleUrls: ['./url-bar.component.scss']
})
export class UrlBarComponent implements OnInit {

  constructor(private preview: PreviewService) {}

  public urlModel: string;

  onChange(): void {
    console.log("Fetching Metadata for: ", this.urlModel);
    this.preview.setURL(this.urlModel);
  }

  ngOnInit(): void {
  }

}
