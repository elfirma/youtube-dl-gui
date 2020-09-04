// Angular Core:
import { Component, OnInit } from '@angular/core';

// External Services:

// Local Services:
import { QueueService } from '../../../backend/services/queue.service';

// Assets:

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(public queue: QueueService) {}

  ngOnInit(): void {
  }

}
