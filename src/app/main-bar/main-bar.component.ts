import { Component, OnInit, HostListener } from '@angular/core';
import { PreviewService } from './preview.service';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.scss']
})
export class MainBarComponent implements OnInit {

  constructor(private preview : PreviewService) {}

  ngOnInit(): void {
  }

}
