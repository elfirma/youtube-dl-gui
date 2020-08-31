import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  public items = [{
    name: "Test Video",
    img_src: "https://i.ytimg.com/vi/6GEI3PpXEAo/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBIrLHtY3tkeD-B_D5qXpHtpCIveA",
    progress: 69,
    profile: {
      name: "FLAC Lossless",
      type: "audio"
    }
  }];

  constructor() {}

  ngOnInit(): void {
  }

}
