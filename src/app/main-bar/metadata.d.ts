type Optional<T> = T | null;

export interface Format {
    downloader_options?: Optional<Object>;
    http_headers?:       Optional<Object>
    format_note?:        Optional<string>;
    player_url?:         Optional<string>;
    format_id?:          Optional<string>;
    filesize?:           Optional<number>;
    protocol?:           Optional<string>;
    container?:          Optional<string>;
    vcodec?:             Optional<string>;
    acodec?:             Optional<string>;
    format?:             Optional<string>;
    height?:             Optional<number>;
    width?:              Optional<number>;
    abr?:                Optional<number>;
    asr?:                Optional<number>;
    fps?:                Optional<number>;
    ext?:                Optional<string>;
    url?:                Optional<string>;
    tbr?:                Optional<number>;
}

export interface Thumbnail {
    resolution?:         string
    height?:             number;
    width?:              number;
    url?:                string;
    id?:                 string;
}

// https?://github.com/ytdl-org/youtube-dl#output-template
export interface Metadata { 
    /**
     * @description Video identifier
     */
    id?:                    Optional<string>;
    /**
     * @description Video title
     */
    title?:                 Optional<string>;
    /**
     * @description Video URL
     */
    url?:                   Optional<string>;
    /**
     * @description Video filename extension
     */
    ext?:                   Optional<string>;
    /**
     * @description A secondary title of the video
     */
    alt_title?:             Optional<string>;
    /**
     * @description An alternative identifier for the video
     */
    uploader?:              Optional<string>;
    /**
     * @description Full name of the video uploader
     */
    license?:               Optional<string>;
    /**
     * @description License name the video is licensed under
     */
    creator?:               Optional<string>;
    /**
     * @description The creator of the video
     */
    release_date?:          Optional<string>;
    /**
     * @description The date (YYYYMMDD) when the video was released
     */
    timestamp?:             Optional<number>;
    /**
     * @description UNIX timestamp of the moment the video became available
     */
    upload_date?:           Optional<string>;
    /**
     * @description Video upload date (YYYYMMDD)
     */
    uploader_id?:           Optional<string>;
    /**
     * @description Nickname or id of the video uploader
     */
    channel?:                Optional<string>;
    /**
     * @description Full name of the channel the video is uploaded on
     */
    channel_id?:            Optional<string>;
    /**
     * @description Id of the channel
     */
    location?:              Optional<string>;
    /**
     * @description Physical location where the video was filmed
     */
    duration?:              Optional<number>;
    /**
     * @description  Length of the video in seconds
     */
    view_count?:            Optional<number>;
    /**
     * @description How many users have watched the video on the platform
     */
    like_count?:            Optional<number>;
    /**
     * @description Number of positive ratings of the video
     */
    dislike_count?:         Optional<number>;
    /**
     * @description Number of negative ratings of the video
     */
    repost_count?:          Optional<number>;
    /**
     * @description Number of reposts of the video
     */
    average_rating?:        Optional<number>;
    /**
     * @description Average rating give by users, the scale used depends on the webpage
     */
    comment_count?:         Optional<number>;
    /**
     * @description Number of comments on the video
     */
    age_limit?:             Optional<number>;
    /**
     * @description Age restriction for the video (years)
     */
    is_live?:               Optional<boolean>;
    /**
     * @description Whether this video is a live stream or a fixed-length video
     */
    start_time?:            Optional<number>;
    /**
     * @description Time in seconds where the reproduction should start, as specified in the URL
     */
    end_time?:              Optional<number>;
    /**
     * @description Time in seconds where the reproduction should end, as specified in the URL
     */
    format?:                Optional<string>;
    /**
     * @description A human-readable description of the format
     */
    format_id?:             Optional<string>;
    /**
     * @description Format code specified by --format
     */
    format_note?:           Optional<string>;
    /**
     * @description Additional info about the format
     */
    width?:                 Optional<number>;
    /**
     * @description Width of the video
     */
    height?:                Optional<number>;
    /**
     * @description Height of the video
     */
    resolution?:            Optional<string>;
    /**
     * @description Textual description of width and height
     */
    tbr?:                   Optional<number>;
    /**
     * @description Average bitrate of audio and video in KBit/s
     */
    abr?:                   Optional<number>;
    /**
     * @description Average audio bitrate in KBit/s
     */
    acodec?:                Optional<string>;
    /**
     * @description Name of the audio codec in use
     */
    asr?:                   Optional<number>;
    /**
     * @description Audio sampling rate in Hertz
     */
    vbr?:                   Optional<number>;
    /**
     * @description Average video bitrate in KBit/s
     */
    fps?:                   Optional<number>;
    /**
     * @description Frame rate
     */
    vcodec?:                Optional<string>;
    /**
     * @description Name of the video codec in use
     */
    container?:             Optional<string>;
    /**
     * @description Name of the container format
     */
    filesize?:              Optional<number>;
    /**
     * @description The number of bytes, if known in advance
     */
    filesize_approx?:       Optional<number>;
    /**
     * @description An estimate for the number of bytes
     */
    protocol?:              Optional<string>;
    /**
     * @description The protocol that will be used for the actual download
     */
    extractor?:             Optional<string>;
    /**
     * @description Name of the extractor
     */
    extractor_key?:         Optional<string>;
    /**
     * @description Key name of the extractor
     */
    epoch?:                 Optional<number>;
    /**
     * @description Unix epoch when creating the file
     */
    autonumber?:            Optional<number>;
    /**
     * @description Five-digit number that will be increased with each download, starting at zero
     */
    playlist?:              Optional<string>;
    /**
     * @description Name or id of the playlist that contains the video
     */
    playlist_index?:        Optional<number>;
    /**
     * @description Index of the video in the playlist padded with leading zeros according to the total length of the playlist
     */
    playlist_id?:           Optional<string>
    /**
     * @description Playlist identifier
     */
    playlist_title?:        Optional<string>;
    /**
     * @description Playlist title
     */
    playlist_uploader?:     Optional<string>;
    /**
     * @description Full name of the playlist uploader
     */
    playlist_uploader_id?:  Optional<string>;
    /**
     * @description Nickname or id of the playlist uploader
     */   
    chapter?:               Optional<string>;
    /**
     * @description Name or title of the chapter the video belongs to
     */
    chapter_number?:        Optional<number>;
    /**
     * @description  Number of the chapter the video belongs to
     */
    chapter_id?:            Optional<string>;
    /**
     * @description Id of the chapter the video belongs to
     */
    chapters?:              any;
    /**
     * @description Chapters
     */
    series?:                Optional<string>;
    /**
     * @description Title of the series or programme the video episode belongs to
     */
    season?:                Optional<string>;
    /**
     * @description Title of the season the video episode belongs to
     */
    season_number?:         Optional<number>;
    /**
     * @description Number of the season the video episode belongs to
     */
    episode?:               Optional<string>;
    /**
     * @description Id of the season the video episode belongs to
     */
    episode_number?:        Optional<number>;
    /**
     * @description Title of the video episode
     */
    episode_id?:            Optional<string>;
    /**
     * @description Number of the video episode within a season
     */
    track?:                 Optional<string>;
    /**
     * @description Title of the track
     */
    track_number?:          Optional<number>;
    /**
     * @description Number of the track within an album or a disc
     */
    track_id?:              Optional<string>;
    /**
     * @description Id of the track
     */
    artist?:                Optional<string>;
    /**
     * @description Artist(s) of the track
     */
    genre?:                 Optional<string>;
    /**
     * @description Genre(s) of the track
     */
    album?:                 Optional<string>;
    /**
     * @description Title of the album the track belongs to
     */
    album_type?:            Optional<string>;
    /**
     * @description Type of the album
     */
    album_artist?:          Optional<string>;
    /**
     * @description List of all artists appeared on the album
     */
    disc_number?:           Optional<number>;
    /**
     * @description Number of the disc or other physical medium the track belongs to
     */
    release_year?:          Optional<number>;
    /**
     * @description Year (YYYY) when the album was released
     */   

    //-----------not-commented:-----------
    requested_subtitles?:   any;
    stretched_ratio?:       any;
    annotations?:           any;
    formats?:               Optional<Format[]>;
    requested_formats?:     Optional<Format[]>;
    thumbnails?:            Optional<Thumbnail[]>;
    categories?:            Optional<string[]>;
    tags?:                  Optional<string[]>;
    display_id?:            Optional<string>;
    webpage_url_basename?:  Optional<string>;
    thumbnail?:             Optional<string>;
    uploader_url?:          Optional<string>;
    channel_url?:           Optional<string>;
    description?:           Optional<string>;
    subtitles?:             Optional<Object>;
    automatic_captions?:    Optional<Object>;
    webpage_url?:           Optional<string>;
}

export interface Playlist {
    webpage_url_basename?:   Optional<string>;
    extractor_key?:          Optional<string>;
    uploader_url?:           Optional<string>;
    uploader_id?:            Optional<string>;
    webpage_url?:            Optional<string>;
    uploader?:               Optional<string>;
    entries?:                Optional<Metadata[]>;
    title?:                  Optional<string>;
    _type?:                  Optional<string>;
}