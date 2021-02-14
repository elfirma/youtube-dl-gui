import { Metadata } from '../assets/templates/metadata';
import { ProviderService } from '../provider.service';

export class QItem {

    // Playlist Options
    isPlaylist : boolean;
    listProgress?: number;
    listLength?: number;
    state?: "loading" | "buffering";

    // Profile
    profile : {
        name: string;
        type: "audio" | "video"
    };

    // Dowload Details
    speed: string;
    ETA: string;
    progress : number;

    // Metadata
    metadata : Metadata;

    // URL:
    url : string;

    constructor(url : string, provider : ProviderService) {
        
    }

}
