// Angular Core:
import { Injectable } from '@angular/core';

// External Services:

// Local Services:

// Assets:
import { Metadata, Thumbnail } from '../assets/templates/metadata';
import { QItem } from '../class/qitem';



@Injectable({
  providedIn: 'root'
})
export class QueueService {

  public items : QItem[] = [];

  constructor() { }

  public getThumbnailURL(item: QItem) : string {

    let meta: Metadata;

    if (this.isPlaylist(item)) {
      meta = item.metadata.entries[0];
    } else {
      meta = item.metadata;
    }

    const thumbs : Thumbnail[] = meta.thumbnails;
    thumbs.filter((a : Thumbnail) => a.width == 168)

    return thumbs[0]?.url ?? meta.thumbnail;
  }

  public getListProgress(item: QItem): number {
    return item.isPlaylist ? 100 * item.listProgress / item.listLength : 0;
  }

  public isPlaylist(item: QItem): boolean {
    return typeof item.metadata.entries == 'object';
  }

  public getItems() : QItem[] {
    return this.items;
  }
}
