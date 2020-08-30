import { Component, OnInit } from '@angular/core';
import { PreviewService } from '../preview.service';

@Component({
  selector: 'app-url-bar',
  templateUrl: './url-bar.component.html',
  styleUrls: ['./url-bar.component.scss']
})
export class UrlBarComponent implements OnInit {

  constructor(preview: PreviewService) {}

  public urlModel: string;

  onChange(){
    console.log(this.urlModel);
  }

  ngOnInit(): void {
  }

}
