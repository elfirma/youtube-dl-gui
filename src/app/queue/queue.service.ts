import { Injectable } from '@angular/core';
import { Metadata, Thumbnail } from '../main-bar/metadata';

interface Item {

  // Playlist Options
  isPlaylist : boolean;
  listProgress?: number;
  listLength?: number

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
}

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  public items : Item[] = [
    {
      isPlaylist: false,
      listProgress: 1,
      listLength: 2,
      progress: 69,
      speed: "1Mb/s",
      ETA: "04:20",
      profile: {
        name: "FLAC Lossless",
        type: "audio"
      },
      metadata : {
        webpage_url: 'https://www.youtube.com/watch?v=6GEI3PpXEAo',
        channel_url: 'http://www.youtube.com/channel/UC-jln7H9BVxgX1zZvDcDatg',
        tags: null,
        height: 720,
        series: null,
        upload_date: '20170524',
        season_number: null,
        playlist_index: null,
        annotations: null,
        ext: 'webm',
        abr: 160,
        average_rating: 4.9657083,
        vcodec: 'vp9',
        dislike_count: null,
        album: null,
        requested_formats: [
          {
            format: '247 - 1280x720 (720p)',
            width: 1280,
            height: 720,
            filesize: 42642792,
            fps: 30,
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=247&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fwebm&gir=yes&clen=42642792&dur=2156.788&lmt=1540914279840649&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAPJBFapSNE4d_Xs6M1W49JP-GkPgc8P-AmBoHUPRNSzhAiB19-ZlK3qbwriL2fHpMQ4PvUBdf2VKCGJgPEBK-x09pg%3D%3D&sig=AOq0QJ8wRgIhAM2mDZGYUbUlXOIW5lRPDDOu0JJgYIXut7M29_0sYmh9AiEA-xkAacREKbxZZNOOIRTU7C3wHUMJSe8jDeGm2Z3Shyo=&ratebypass=yes',
            http_headers: [Object],
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            format_id: '247',
            ext: 'webm',
            protocol: 'https',
            acodec: 'none',
            format_note: '720p',
            vcodec: 'vp9',
            downloader_options: [Object],
            asr: null,
            tbr: 159.129
          },
          {
            format: '251 - audio only (tiny)',
            width: null,
            height: null,
            filesize: 37485172,
            fps: null,
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=251&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=audio%2Fwebm&gir=yes&clen=37485172&dur=2156.821&lmt=1540915045673463&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5511222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhANZz9hEl9deAqz7OA16OSOyClf5bE6_NNOCXoniK4FhsAiEAz9GwgHz_83cYyKZcW8JDHaf7hy0B93hdsbMp2vanQwk%3D&sig=AOq0QJ8wRQIgCn_21cUaunlbAGBgm9s6v2KrflR4vqmAJl_toACWSogCIQDB_CWP3Nc6eQjCZTiVujKXQ-3SR9H9vzM80EqyC_w6aw==&ratebypass=yes',        
            abr: 160,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            format_id: '251',
            ext: 'webm',
            protocol: 'https',
            http_headers: [Object],
            format_note: 'tiny',
            acodec: 'opus',
            vcodec: 'none',
            downloader_options: [Object],
            asr: 48000,
            tbr: 153.903
          }
        ],
        format_id: '247+251',
        width: 1280,
        fps: 30,
        chapters: null,
        extractor: 'youtube',
        thumbnail: 'https://i.ytimg.com/vi_webp/6GEI3PpXEAo/maxresdefault.webp',
        formats: [
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=249&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=audio%2Fwebm&gir=yes&clen=14327179&dur=2156.821&lmt=1540915015469106&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5511222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgLueXY-di_YdII15XE2QgL-9LN926jfNE-rPCF0u6ZhkCIGhp2wC8zqQsZ4mK4CkztI-wLfcv9GRP0PNS9Rafxe5B&sig=AOq0QJ8wRAIgVpv-BWOHZ5SFiSzy1GZrPOQ437xkGHUJrTZx1xszsfECIGkpJ3_kwmgSESoZKSGU54IMRDs_ia64HREAAMdS6UgQ&ratebypass=yes',
            fps: null,
            height: null,
            filesize: 14327179,
            width: null,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            abr: 50,
            format_id: '249',
            ext: 'webm',
            protocol: 'https',
            format: '249 - audio only (tiny)',
            http_headers: [Object],
            format_note: 'tiny',
            acodec: 'opus',
            vcodec: 'none',
            downloader_options: [Object],
            asr: 48000,
            tbr: 61.24
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=250&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=audio%2Fwebm&gir=yes&clen=18972796&dur=2156.821&lmt=1540915015394742&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5511222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgWALb__JnmnS2p72z_vAn9U7Taq14bNK5Ydr16hiMgw4CIQCRynKLpe93gYAnL-Dc3T3uVKkAuvkmiY2JbuzpTpAknQ%3D%3D&sig=AOq0QJ8wRAIgX-9v72CPSWOJu7Vk4z9SCYtfRwgU-5Vny8jc1Gle_SMCICkcLRhI9V12CF8rAJTzDmm5GOC1DtckHMxu-kyECvhf&ratebypass=yes',
            fps: null,
            height: null,
            filesize: 18972796,
            width: null,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            abr: 70,
            format_id: '250',
            ext: 'webm',
            protocol: 'https',
            format: '250 - audio only (tiny)',
            http_headers: [Object],
            format_note: 'tiny',
            acodec: 'opus',
            vcodec: 'none',
            downloader_options: [Object],
            asr: 48000,
            tbr: 79.891
          },
          {
            protocol: 'https',
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=140&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=audio%2Fmp4&gir=yes&clen=34907153&dur=2156.855&lmt=1581935339985374&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhALy6xEPLi3bQQ3v_vGfVRuwvyqciczPzdV4uoBFev9fZAiEA-MwO1oM1WqWaBnDRmBKcC1DLEx1BCbiqqUuHNTnVpUA%3D&sig=AOq0QJ8wRQIgUVU2pb0AQczOxUTtolkcIqkpefZqlhHiKIBppp8UquICIQC49XDdraHUJnYizhjsoT7300VL2nypBC5x9A4XzujtWg==&ratebypass=yes',
            width: null,
            height: null,
            filesize: 34907153,
            container: 'm4a_dash',
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            abr: 128,
            format_id: '140',
            ext: 'm4a',
            fps: null,
            format: '140 - audio only (tiny)',
            http_headers: [Object],
            acodec: 'mp4a.40.2',
            format_note: 'tiny',
            vcodec: 'none',
            downloader_options: [Object],
            asr: 44100,
            tbr: 132.495
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=251&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=audio%2Fwebm&gir=yes&clen=37485172&dur=2156.821&lmt=1540915045673463&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5511222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhANZz9hEl9deAqz7OA16OSOyClf5bE6_NNOCXoniK4FhsAiEAz9GwgHz_83cYyKZcW8JDHaf7hy0B93hdsbMp2vanQwk%3D&sig=AOq0QJ8wRQIgCn_21cUaunlbAGBgm9s6v2KrflR4vqmAJl_toACWSogCIQDB_CWP3Nc6eQjCZTiVujKXQ-3SR9H9vzM80EqyC_w6aw==&ratebypass=yes',        
            fps: null,
            height: null,
            filesize: 37485172,
            width: null,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            abr: 160,
            format_id: '251',
            ext: 'webm',
            protocol: 'https',
            format: '251 - audio only (tiny)',
            http_headers: [Object],
            format_note: 'tiny',
            acodec: 'opus',
            vcodec: 'none',
            downloader_options: [Object],
            asr: 48000,
            tbr: 153.903
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=160&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fmp4&gir=yes&clen=3129395&dur=2156.787&lmt=1581937577492815&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgL2M2xJn453SLKVrdUV2sc13yqZX7lUcL0uyQytO_4nwCIQDTRj-EbSd65-IwCV4NMQN6joBHW-eIfsxjnnSu_0RU4Q%3D%3D&sig=AOq0QJ8wRQIhAP1DKUOkqHTO-1rxb-jsSKrnjXNAMTZAmkcCrp0Y5gU2AiBc-cRAZL023mjlcMtAFN44xFSj8REZdO58QJaBwPyrog==&ratebypass=yes',
            fps: 30,
            height: 144,
            filesize: 3129395,
            width: 256,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '160',
            ext: 'mp4',
            protocol: 'https',
            format: '160 - 256x144 (144p)',
            acodec: 'none',
            format_note: '144p',
            vcodec: 'avc1.4d400c',
            downloader_options: [Object],
            asr: null,
            tbr: 20.086
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=133&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fmp4&gir=yes&clen=5075430&dur=2156.787&lmt=1581937577486178&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAKRyE9XWiLgrUCVOEwPPHXpOh-Dl4w4gzFUpeAM3Rp_TAiEAkPVZokJgZj74Z4XVSKfq0Zek9ET4U2gKZmzODUltEjA%3D&sig=AOq0QJ8wRQIgUvHSALuFtj4UyC1QHtVDGnWALTiK70G64xtsyTW82aYCIQCr5Nb0uerMzM6qC4YCVWPIsXLNIVZbdRUdamiCNcISqA==&ratebypass=yes',
            fps: 30,
            height: 240,
            filesize: 5075430,
            width: 426,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '133',
            ext: 'mp4',
            protocol: 'https',
            format: '133 - 426x240 (240p)',
            acodec: 'none',
            format_note: '240p',
            vcodec: 'avc1.4d4015',
            downloader_options: [Object],
            asr: null,
            tbr: 27.918
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=394&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fmp4&gir=yes&clen=6005183&dur=2156.787&lmt=1589104734410436&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAL9AiqbJLhivBYsJaJYgWognjD0r6tMWsb5rsyTOv5Q3AiEA41e_fy1pyuH5r8wTvgte9-8XwzElMWcPT1vEUYglkUA%3D&sig=AOq0QJ8wRAIgJU6GqjYblSbS60Ngz63YgZdDkvVf7wUS2sNkRFsXT_wCIEAsXusiz4nqNePdOJypF-cnuCH_tILVx1pmQoL-4OuU&ratebypass=yes',
            fps: 30,
            height: 144,
            filesize: 6005183,
            width: 256,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '394',
            asr: null,
            protocol: 'https',
            format: '394 - 256x144 (144p)',
            format_note: '144p',
            acodec: 'none',
            vcodec: 'av01.0.00M.08',
            downloader_options: [Object],
            ext: 'mp4',
            tbr: 30.333
          },
          {
            protocol: 'https',
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=278&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fwebm&gir=yes&clen=6224229&dur=2156.788&lmt=1540913909375727&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhANmRrn5pa1JT9ocmZ9Ra4ANRwC6X5o9l8Mk60Ik6DxYaAiACEEgVtM0hbuLBZOhJyNBciNPoTI2NkYaw0h1piMgvVQ%3D%3D&sig=AOq0QJ8wRAIgGubYXZuaslJWnfBuU4Tmn2zR6c6w_SXHjAtC41S9EV8CIGjNEtGI6D5re3zIdQzR5sBe-SqLJGMGsNQnBsoMHuMN&ratebypass=yes',
            width: 256,
            height: 144,
            filesize: 6224229,
            container: 'webm',
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '278',
            ext: 'webm',
            fps: 30,
            format: '278 - 256x144 (144p)',
            acodec: 'none',
            format_note: '144p',
            vcodec: 'vp9',
            downloader_options: [Object],
            asr: null,
            tbr: 33.363
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=134&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fmp4&gir=yes&clen=6494251&dur=2156.787&lmt=1581937577487067&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgCycpgKCgq4UHEZDzvkf7PCaGN-W_xZIJWvzMHCd3XgACIC3ust2V1SOc1FmwYYSprAvpfmyNqxceFk20aML4JyMu&sig=AOq0QJ8wRgIhAKo2V1iGAbr3EdBbEMcr_yaEmyhoWrw58H1TMEsaA1rKAiEA-dglAhnWuR-JYDRtPgMb3CyM7-YZzP9IFWwW_ByDN_E=&ratebypass=yes',
            fps: 30,
            height: 360,
            filesize: 6494251,
            width: 640,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '134',
            ext: 'mp4',
            protocol: 'https',
            format: '134 - 640x360 (360p)',
            acodec: 'none',
            format_note: '360p',
            vcodec: 'avc1.4d401e',
            downloader_options: [Object],
            asr: null,
            tbr: 33.55
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=395&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fmp4&gir=yes&clen=7896655&dur=2156.787&lmt=1589104836036915&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAO7G3iKHn8Hx3ejUIgA1bTigcoaptrr0PQyW7FCGUYZkAiBvS0czu39QKreccZjXUxfGfZY6M-EBSUHabJXxM-_PXA%3D%3D&sig=AOq0QJ8wRQIgctqodVJq3bqjib2O40xzRozrthnSf_VecbP-EOnivjQCIQCp142nhCef3rFHGIluOZlf8NaEwTeL5bt2RWLqpcYm3g==&ratebypass=yes',
            fps: 30,
            height: 240,
            filesize: 7896655,
            width: 426,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '395',
            asr: null,
            protocol: 'https',
            format: '395 - 426x240 (240p)',
            format_note: '240p',
            acodec: 'none',
            vcodec: 'av01.0.00M.08',
            downloader_options: [Object],
            ext: 'mp4',
            tbr: 37.178
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=135&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fmp4&gir=yes&clen=8216985&dur=2156.787&lmt=1581937577485194&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAKS3Ml9L2bxx_E8gec6HR35djRaMifd-b_N0pUj413OHAiBqg-YjC1fZXDLQEQVgO1ZQhzxq6PksQdgi49kmNQwOAg%3D%3D&sig=AOq0QJ8wRAIgXiLt63TUZbjC7Xujb6zVJpqotUhitEOc9sxLiE1eQyUCIHJJcJddNAFkwYR2EKGOt88Un9eGRdDtXYSV_J7v8rwN&ratebypass=yes',
            fps: 30,
            height: 480,
            filesize: 8216985,
            width: 854,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '135',
            ext: 'mp4',
            protocol: 'https',
            format: '135 - 854x480 (480p)',
            acodec: 'none',
            format_note: '480p',
            vcodec: 'avc1.4d401f',
            downloader_options: [Object],
            asr: null,
            tbr: 38.234
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=242&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fwebm&gir=yes&clen=9317912&dur=2156.788&lmt=1540913919811289&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhAOtRjjgx3iVuzbJvXk6uj3JrR-rboj966CqMsMVJ8FJNAiEAqgC9J_woSHD_bcr3isUU_1ayi3AER7rpQMTyF6QrHxk%3D&sig=AOq0QJ8wRgIhAPIUK_Wd0gRUrAqIkwiuPnuwSJstoMVCG71cSH3-wC3TAiEAzhuk_V7N9k9Td7HCGfaJ6T1EJCo6Fm89j_5WMAzOPhc=&ratebypass=yes',
            fps: 30,
            height: 240,
            filesize: 9317912,
            width: 426,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '242',
            ext: 'webm',
            protocol: 'https',
            format: '242 - 426x240 (240p)',
            acodec: 'none',
            format_note: '240p',
            vcodec: 'vp9',
            downloader_options: [Object],
            asr: null,
            tbr: 41.624
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=136&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fmp4&gir=yes&clen=11471704&dur=2156.787&lmt=1581937577494921&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgB45rt78X3JOG71_WS5XLZVkhu1uKh8inLixnCDq6qqMCIHF2p_TfcRfTfF-TtEDvs0CasvdexKBI1R47uG3b93d8&sig=AOq0QJ8wRgIhANYuTwPZaqRRghmodq9nYbyKQTqCLoGeGh1Q3Gp9lV1DAiEApFT3kAcBBA85GI9GEw_HvsKMwA83NjITuS9LGhnFcH8=&ratebypass=yes',
            fps: 30,
            height: 720,
            filesize: 11471704,
            width: 1280,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '136',
            ext: 'mp4',
            protocol: 'https',
            format: '136 - 1280x720 (720p)',
            acodec: 'none',
            format_note: '720p',
            vcodec: 'avc1.4d401f',
            downloader_options: [Object],
            asr: null,
            tbr: 49.965
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=396&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fmp4&gir=yes&clen=12699073&dur=2156.787&lmt=1589104853866722&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgPJyX2jqcr0elmKNBYMpoalcrgN0bpp-3YrNSXub-YsUCIQCe2T9azEiWWqFjBX9iY1FDPCnulJhXpZIxNlbT2qcAfw%3D%3D&sig=AOq0QJ8wRQIga4zJO2HnQqRffhXQse44UrjvEsL1K_nuDO09Vn8YGmoCIQDSiYBnlJfwTYW1hwmGU741qDul0VokjKxP5pPGr77Skw==&ratebypass=yes',
            fps: 30,
            height: 360,
            filesize: 12699073,
            width: 640,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '396',
            asr: null,
            protocol: 'https',
            format: '396 - 640x360 (360p)',
            format_note: '360p',
            acodec: 'none',
            vcodec: 'av01.0.01M.08',
            downloader_options: [Object],
            ext: 'mp4',
            tbr: 54.14
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=243&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fwebm&gir=yes&clen=15219091&dur=2156.788&lmt=1540914043599827&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRgIhANjpLNnbrKh-Xdxlu3SwqklrOi3zzJjhMWJVo1NAwRvjAiEA87cBYYh5kiK0c7sxpvkFkAcYkOValVF5qSnm49cYG20%3D&sig=AOq0QJ8wRQIhAMGp1mhC_YTuOr91JCWfdM1bcy2KaymT8XqBBx2r6nHuAiBxI64RTMeWfJ55vSjn_adNFBj5rzyQR20FmPoFxOv18A==&ratebypass=yes',
            fps: 30,
            height: 360,
            filesize: 15219091,
            width: 640,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '243',
            ext: 'webm',
            protocol: 'https',
            format: '243 - 640x360 (360p)',
            acodec: 'none',
            format_note: '360p',
            vcodec: 'vp9',
            downloader_options: [Object],
            asr: null,
            tbr: 62.33
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=244&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fwebm&gir=yes&clen=15409386&dur=2156.788&lmt=1540914153932047&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAOWbx53OZbArHD3fyHlvi9nLBpgEsdim0Dgoe0wvLT-TAiBTmQslTLOO4hjJZbJK6nSjnA9VJcuqyKeXtYPO2DScog%3D%3D&sig=AOq0QJ8wRQIhAJfB2f_Qk2ypa6ek5XuRScVwPox4AFBVxMSZZDwVCOCNAiBH6agJccbKMKmQqR8Ti8rMvMP2qv8LTI8i_vU4sZYpug==&ratebypass=yes',
            fps: 30,
            height: 480,
            filesize: 15409386,
            width: 854,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '244',
            ext: 'webm',
            protocol: 'https',
            format: '244 - 854x480 (480p)',
            acodec: 'none',
            format_note: '480p',
            vcodec: 'vp9',
            downloader_options: [Object],
            asr: null,
            tbr: 70.838
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=397&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fmp4&gir=yes&clen=18979017&dur=2156.787&lmt=1589105155803125&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgLP__kCqtomaKpgSgyRdH4owyE7WDJ0GOOj3rQeRGwVUCIHmg6cfc2jvjpnHJlCxIANabiAINmAqN42cjb7ApEtVA&sig=AOq0QJ8wRQIgS0dG0DGj_yWbmQyKntF97Fjo_UM5XNdqHEZc74czeioCIQCTLB3nh_-b3t5vzX_ALRsIkh9BAVyE_tOMAvP1t8bJCg==&ratebypass=yes',
            fps: 30,
            height: 480,
            filesize: 18979017,
            width: 854,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '397',
            asr: null,
            protocol: 'https',
            format: '397 - 854x480 (480p)',
            format_note: '480p',
            acodec: 'none',
            vcodec: 'av01.0.04M.08',
            downloader_options: [Object],
            ext: 'mp4',
            tbr: 74.055
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=398&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fmp4&gir=yes&clen=38360309&dur=2156.787&lmt=1589105792561388&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgT8ZZ2UNQdmfoVn2WudSYWgrTGIBOAUVxLJmDZ-tSZQ8CIDLfSsr4z_jyiuTr7wt8QrFHwgovVSFa4FzHCNuipod3&sig=AOq0QJ8wRQIgfOmNFvhYFN7XnQG9atlZVS2-X9VulxojuNlCbeRiyP8CIQCGOR9tyNa2hP9SGrlCwfOmRr_Za2g2Xe1RSkPLu78lNA==&ratebypass=yes',
            fps: 30,
            height: 720,
            filesize: 38360309,
            width: 1280,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '398',
            asr: null,
            protocol: 'https',
            format: '398 - 1280x720 (720p)',
            acodec: 'none',
            format_note: '720p',
            vcodec: 'av01.0.05M.08',
            downloader_options: [Object],
            ext: 'mp4',
            tbr: 143.083
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=247&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C394%2C395%2C396%2C397%2C398&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fwebm&gir=yes&clen=42642792&dur=2156.788&lmt=1540914279840649&mt=1599060767&fvip=4&keepalive=yes&c=WEB&txp=5533432&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAPJBFapSNE4d_Xs6M1W49JP-GkPgc8P-AmBoHUPRNSzhAiB19-ZlK3qbwriL2fHpMQ4PvUBdf2VKCGJgPEBK-x09pg%3D%3D&sig=AOq0QJ8wRgIhAM2mDZGYUbUlXOIW5lRPDDOu0JJgYIXut7M29_0sYmh9AiEA-xkAacREKbxZZNOOIRTU7C3wHUMJSe8jDeGm2Z3Shyo=&ratebypass=yes',
            fps: 30,
            height: 720,
            filesize: 42642792,
            width: 1280,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            http_headers: [Object],
            format_id: '247',
            ext: 'webm',
            protocol: 'https',
            format: '247 - 1280x720 (720p)',
            acodec: 'none',
            format_note: '720p',
            vcodec: 'vp9',
            downloader_options: [Object],
            asr: null,
            tbr: 159.129
          },
          {
            url: 'https://r3---sn-xfxuxa-cgxd.googlevideo.com/videoplayback?expire=1599082408&ei=SLtPX5jgHYepgQf95I7YCw&ip=91.248.204.92&id=o-AJIMeIVm6Rb9Mv5hcuZXmAHs4RhSYlmd9-wn2_Y5puRC&itag=18&source=youtube&requiressl=yes&mh=gD&mm=31%2C29&mn=sn-xfxuxa-cgxd%2Csn-i5heen7z&ms=au%2Crdu&mv=m&mvi=3&pl=23&initcwndbps=1478750&vprv=1&mime=video%2Fmp4&gir=yes&clen=57545103&ratebypass=yes&dur=2156.855&lmt=1540912272964019&mt=1599060767&fvip=4&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgE6cxM_aBQYb8AaiV7boWwvXi9mF51sxFkAiPPXzF-BwCIQD97oZveVKKqfKKshqckSTZvLhD9MS63Tqm2EYQKTTkfA%3D%3D&sig=AOq0QJ8wRgIhANY76GsO77NnzdwrXT5iHEfTOqupzWSc1fB7Bv65kh6wAiEA6Emh9Zs54YgywHJsCeHOFsDFmgpgsq35H8nywVZJPhQ=',
            fps: 30,
            height: 360,
            filesize: 57545103,
            width: 640,
            player_url: '/s/player/86f77974/player_ias.vflset/en_US/base.js',
            abr: 96,
            format_id: '18',
            ext: 'mp4',
            protocol: 'https',
            format: '18 - 640x360 (360p)',
            http_headers: [Object],
            format_note: '360p',
            acodec: 'mp4a.40.2',
            vcodec: 'avc1.42001E',
            asr: 44100,
            tbr: 213.447
          }
        ],
        format: '247 - 1280x720 (720p)+251 - audio only (tiny)',
        like_count: null,
        webpage_url_basename: 'watch',
        creator: null,
        channel_id: 'UC-jln7H9BVxgX1zZvDcDatg',
        release_year: null,
        episode_number: null,
        extractor_key: 'Youtube',
        is_live: null,
        age_limit: 0,
        alt_title: null,
        view_count: 2696689,
        license: null,
        display_id: '6GEI3PpXEAo',
        uploader_url: 'http://www.youtube.com/channel/UC-jln7H9BVxgX1zZvDcDatg',
        uploader: "Kuma's campfire",
        description: 'Tracklist:\n' +
          '\n' +
          '00:00 | Take Me  \n' +
          '04:49 | Asayake  \n' +
          '09:47 | Midnight Rendezvous  \n' +
          '14:43 | Time Limit  \n' +
          '17:20 | Domino Line  \n' +
          '24:41 | Tears Of The Star  \n' +
          '29:09 | Swear\n' +
          '\n' +
          '(^=◕ᴥ◕=^)',
        duration: 2157,
        automatic_captions: {},
        acodec: 'opus',
        subtitles: {},
        artist: null,
        start_time: null,
        categories: [ 'Music' ],
        playlist: null,
        uploader_id: 'UC-jln7H9BVxgX1zZvDcDatg',
        vbr: null,
        end_time: null,
        requested_subtitles: null,
        release_date: null,
        resolution: null,
        id: '6GEI3PpXEAo',
        thumbnails: [
          {
            resolution: '168x94',
            url: 'https://i.ytimg.com/vi/6GEI3PpXEAo/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBIrLHtY3tkeD-B_D5qXpHtpCIveA',
            width: 168,
            id: '0',
            height: 94
          },
          {
            resolution: '196x110',
            url: 'https://i.ytimg.com/vi/6GEI3PpXEAo/hqdefault.jpg?sqp=-oaymwEYCMQBEG5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLD4FlpO65ZZF-bEoInzziEXXfOGkA',
            width: 196,
            id: '1',
            height: 110
          },
          {
            resolution: '246x138',
            url: 'https://i.ytimg.com/vi/6GEI3PpXEAo/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAuDBw4BCj9n03j1mDXZnF3LLhKYg',
            width: 246,
            id: '2',
            height: 138
          },
          {
            resolution: '336x188',
            url: 'https://i.ytimg.com/vi/6GEI3PpXEAo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDzLS_B0RkyGyPy0paQC9l3AXkKOA',
            width: 336,
            id: '3',
            height: 188
          },
          {
            resolution: '1920x1080',
            url: 'https://i.ytimg.com/vi_webp/6GEI3PpXEAo/maxresdefault.webp',
            width: 1920,
            id: '4',
            height: 1080
          }
        ],
        title: 'Casiopea - Mint Jams (1982) FULL ALBUM',
        stretched_ratio: null,
        track: null
      }
      
    },
    {
      isPlaylist: true,
      listProgress: 1,
      listLength: 2,
      progress: 42,
      speed: "5Mb/s",
      ETA: "01:50",
      profile: {
        name: "FLAC Lossless",
        type: "audio"
      },
      metadata: {
        uploader: 'Jannes Lücht',
        webpage_url: 'https://www.youtube.com/playlist?list=PLCJM2NLgNTQ3V9LMHvt8cKVW2cQNtsOCA',
        title: 'Latín Pop',
        _type: 'playlist',
        id: 'PLCJM2NLgNTQ3V9LMHvt8cKVW2cQNtsOCA',
        uploader_url: 'https://www.youtube.com/channel/UCjXSWead8jX-cDu-PFuzs6w',
        extractor: 'youtube:playlist',
        uploader_id: 'UCjXSWead8jX-cDu-PFuzs6w',
        webpage_url_basename: 'playlist',
        entries: [
          {
            requested_formats: [],
            categories: [],
            annotations: null,
            duration: 192,
            channel_url: 'http://www.youtube.com/channel/UCpb_iJuhFe8V6rQdbNqfAlQ',
            playlist_title: 'Latín Pop',
            format: '137 - 1920x1080 (1080p)+251 - audio only (tiny)',
            playlist: 'Latín Pop',
            creator: null,
            release_year: null,
            age_limit: 0,
            like_count: null,
            uploader_id: 'NickyJamTV',
            playlist_uploader_id: 'UCjXSWead8jX-cDu-PFuzs6w',
            license: null,
            stretched_ratio: null,
            vbr: null,
            playlist_index: 1,
            subtitles: {},
            display_id: '_I_D_8Z4sJE',
            id: '_I_D_8Z4sJE',
            dislike_count: null,
            format_id: '137+251',
            view_count: 1898226445,
            resolution: null,
            playlist_id: 'PLCJM2NLgNTQ3V9LMHvt8cKVW2cQNtsOCA',
            title: 'Nicky Jam x J. Balvin - X (EQUIS) | Video Oficial | Prod. Afro Bros & Jeon',
            width: 1920,
            album: null,
            requested_subtitles: null,
            vcodec: 'avc1.640028',
            abr: 160,
            chapters: null,
            uploader: 'NickyJamTV',
            start_time: null,
            artist: null,
            uploader_url: 'http://www.youtube.com/user/NickyJamTV',
            thumbnail: 'https://i.ytimg.com/vi_webp/_I_D_8Z4sJE/maxresdefault.webp',
            thumbnails: [],
            webpage_url_basename: '_I_D_8Z4sJE',
            tags: [],
            alt_title: null,
            extractor_key: 'Youtube',
            series: null,
            playlist_uploader: 'Jannes Lücht',
            average_rating: 4.7365336,
            extractor: 'youtube',
            acodec: 'opus',
            webpage_url: 'https://www.youtube.com/watch?v=_I_D_8Z4sJE',
            height: 1080,
            upload_date: '20180301',
            automatic_captions: {},
            track: null,
            n_entries: 3,
            formats: [],
            channel_id: 'UCpb_iJuhFe8V6rQdbNqfAlQ',
            is_live: null,
            episode_number: null,
            season_number: null,
            end_time: null,
            description: 'Escucha mi última canción "Desahogo" ▶ https://www.youtube.com/watch?v=L0ndG50HXXk\n' +
              'Escucha "Muévelo" con Daddy Yankee ▶ https://smarturl.it/NJMuevelo/youtube \n' +
              '\n' +
              '\n' +
              'Disponible en tu plataforma preferida:\n' +
              'https://goo.gl/b8TDFS \n' +
              '\n' +
              'Escucha todos mis éxitos en estas playlists de Spotify:\n' +
              '▶Nación urbana: http://smarturl.it/NacionUrbana-Spotify \n' +
              '▶El Ganador, La Serie: http://smarturl.it/jaleoPlaylist \n' +
              '▶Chillin in the sea by Nicky Jam: http://smarturl.it/ChillinInTheSea\n' +
              '▶Grandes Éxitos de La Industria Inc.: http://smarturl.it/GrandesExitosLaInd \n' +
              '▶Top Clásicos del Reggaeton: http://smarturl.it/TopClasicosReggaeton\n' +
              '\n' +
              '\n' +
              'Nicky Jam y J. Balvin performing "X" \n' +
              'Nuevo video de Nicky Jam 2018\n' +
              '\n' +
              'Letra de EQUIS "X" \n' +
              '\n' +
              'Aquel día te vi y tu energia sentí\n' +
              'Desde eso no te quiero lejos de mi\n' +
              'Sé que no sabes de mi y no te puedo mentir\n' +
              'Lo que dicen en la calle sobre mi\n' +
              '\n' +
              'Y no te voy a negar\n' +
              'Estamos claros y ya\n' +
              'No te lo voy a negar (no te lo puedo negar)\n' +
              'Estamos claros y ya (estamos claros, estamos claros)\n' +
              '\n' +
              'Solo deja que yo te agarre baby\n' +
              "Besos en el cuello pa' calmar la sed\n" +
              "Mi mano en tus caderas pa' empezar como es\n" +
              "No le vamo' a bajar mas nunca mamá\n" +
              '\n' +
              'Ba-Ba-Ba-Ba-Baila\n' +
              'Placata Placata \n' +
              'Como ella lo mueve\n' +
              'Sin parar, sin parar\n' +
              '\n' +
              'Mis ganas de comerte\n' +
              'Ahora son mas fuertes\n' +
              'Quiero tenerte\n' +
              '\n' +
              'Y no te voy a negar\n' +
              'Estamos claros y ya\n' +
              'No te lo voy a negar\n' +
              'Estamos claros y ya\n' +
              '\n' +
              'Lo que he visto de ti mami no me es normal\n' +
              'Pero no te preocupes que soy anormal\n' +
              'Sé que tus amigas no les debo gustar\n' +
              '\n' +
              'Pero ve y cuentale parte por parte\n' +
              'Como tenemos sex y te quito el estres\n' +
              'Dale otra vez\n' +
              '\n' +
              'Y no te voy a negar\n' +
              'Estamos claros y ya\n' +
              'No te lo voy a negar\n' +
              'Estamos claros y ya\n' +
              '\n' +
              'Ba-Ba-Ba-Ba- Baila\n' +
              'Placata Placata \n' +
              'Como ella lo mueve\n' +
              'Sin parar, sin parar\n' +
              '\n' +
              'Mis ganas de comerte\n' +
              'Ahora son mas fuertes\n' +
              'Quiero tenerte\n' +
              '\n' +
              'Y no te voy a negar\n' +
              'Estamos claros y ya\n' +
              'No te lo voy a negar\n' +
              'Estamos claros y ya\n' +
              '\n' +
              'La Industria Inc\n' +
              'Sony Music Latin\n' +
              '2018\n' +
              '\n' +
              'Skloziv Network',
            release_date: null,
            fps: 24,
            ext: 'mp4'
          },
          {
            requested_formats: [],
            categories: [],
            annotations: null,
            duration: 219,
            channel_url: 'http://www.youtube.com/channel/UCrwmu-gceGOmtZeuTsn7DlQ',
            playlist_title: 'Latín Pop',
            format: '137 - 1920x808 (1080p)+251 - audio only (tiny)',
            playlist: 'Latín Pop',
            creator: null,
            release_year: null,
            age_limit: 0,
            like_count: null,
            uploader_id: 'BlackEyedPeasVEVO',
            playlist_uploader_id: 'UCjXSWead8jX-cDu-PFuzs6w',
            license: null,
            stretched_ratio: null,
            vbr: null,
            playlist_index: 2,
            subtitles: {},
            display_id: 'EzKkl64rRbM',
            id: 'EzKkl64rRbM',
            dislike_count: null,
            format_id: '137+251',
            view_count: 757739459,
            resolution: null,
            playlist_id: 'PLCJM2NLgNTQ3V9LMHvt8cKVW2cQNtsOCA',
            title: 'Black Eyed Peas, J Balvin - RITMO (Bad Boys For Life)',
            width: 1920,
            album: null,
            requested_subtitles: null,
            vcodec: 'avc1.640028',
            abr: 160,
            chapters: null,
            uploader: 'BlackEyedPeasVEVO',
            start_time: null,
            artist: null,
            uploader_url: 'http://www.youtube.com/user/BlackEyedPeasVEVO',
            thumbnail: 'https://i.ytimg.com/vi/EzKkl64rRbM/maxresdefault.jpg',
            thumbnails: [],
            webpage_url_basename: 'EzKkl64rRbM',
            tags: [],
            alt_title: null,
            extractor_key: 'Youtube',
            series: null,
            playlist_uploader: 'Jannes Lücht',
            average_rating: 4.8198957,
            extractor: 'youtube',
            acodec: 'opus',
            webpage_url: 'https://www.youtube.com/watch?v=EzKkl64rRbM',
            height: 808,
            upload_date: '20191010',
            automatic_captions: {},
            track: null,
            n_entries: 3,
            formats: [],
            channel_id: 'UCrwmu-gceGOmtZeuTsn7DlQ',
            is_live: null,
            episode_number: null,
            season_number: null,
            end_time: null,
            description: '"RITMO (Bad Boys For Life)" single available at: https://smarturl.it/RITMO\n' +
              '\n' +
              'Follow Black Eyed Peas online\n' +
              'Facebook: https://www.facebook.com/blackeyedpeas\n' +
              'Twitter: https://twitter.com/bep \n' +
              'Instagram: https://www.instagram.com/bep\n' +
              'More Videos: https://www.youtube.com/playlist?list=PLgZwaNdNnwLpNLAN8Kh2DoWsD1ViSlNDN\n' +
              '\n' +
              'Follow Bad Boys For Life online\n' +
              'Official Site: https://www.badboysforlife.movie/?hs308=ritmo\n' +
              'Watch Trailer: https://www.youtube.com/watch?time_continue=1&v=jKCj3XuPG8M\n' +
              'Facebook: https://www.facebook.com/BadBoysMovie\n' +
              'Twitter: https://twitter.com/BadBoys\n' +
              'Instagram: https://www.instagram.com/BadBoys/\n' +
              '\n' +
              'Lyrics:\n' +
              'This is the rhythm, rhythm, rhythm, rhythm\n' +
              'This is the rhythm, rhythm, rhythm, rhythm, rhythm, rhythm\n' +
              'This is the rhythm, rhythm, rhythm, rhythm, rhythm of the night\n' +
              '\n' +
              "Toda la noche rompemo' (The night)\n" +
              "Al otro día volvemo' (Oh, yeah)\n" +
              "Tú sabes como lo hacemo', baby\n" +
              '(This is the rhythm of the night)\n' +
              "Baby, tonight's like fuego (The night)\n" +
              "We 'bout to spend the dinero (Oh, yeah)\n" +
              'We party to the extremo, baby\n' +
              '(This is the rhythm of the night)\n' +
              "Toda la noche rompemo' (The night)\n" +
              "Al otro día volvemo' (Oh, yeah)\n" +
              "Tú sabes como lo hacemo', baby\n" +
              '(This is the rhythm of the night)\n' +
              "Baby, tonight's like fuego (The night)\n" +
              "We 'bout to spend the dinero (Oh, yeah)\n" +
              'We party to the extremo, extremo, extremo, extremo, extremo\n' +
              '\n' +
              'Ritmo \n' +
              '\n' +
              'No son ni Reebok ni son Nike (No)\n' +
              'Sin estilista luzco fly (Yes)\n' +
              'La Rosalía me dice que luzco guay (La Rosalía)\n' +
              'No te lo niego porque yo sé lo que hay (Woo)\n' +
              'Lo que se ve, no se pregunta (Nah)\n' +
              "Soy próspero y tengo claro que e' mi culpa (Mi culpa, culpa)\n" +
              'Como Canelo en el ring nada me asusta\n' +
              'Vivo en mi base y la paz no me la tumban (Woo)\n' +
              'Hakuna Matata como Timón y Pumba\n' +
              "Voy pa' leyenda así que dale zumba\n" +
              "Los dejo ciego' con la vibra que me alumbra\n" +
              "Haters pa' la tumba, nosotros pa' la rumba (Ra)\n" +
              '\n' +
              'This is the rhythm, rhythm, rhythm, rhythm, rhythm of the night\n' +
              '\n' +
              '[Chorus: J Balvin, Corona, will.i.am]\n' +
              "Toda la noche rompemo' (The night)\n" +
              "Al otro día volvemo' (Oh, yeah)\n" +
              "Tú sabes como lo hacemo', baby\n" +
              '(This is the rhythm of the night)\n' +
              "Baby, tonight's like fuego (The night)\n" +
              "We 'bout to spend the dinero (Oh, yeah)\n" +
              'We party to the extremo, baby\n' +
              '(This is the rhythm of the night)\n' +
              "Toda la noche rompemo' (The night)\n" +
              "Al otro día volvemo' (Oh, yeah)\n" +
              "Tú sabes como lo hacemo', baby\n" +
              '(This is the rhythm of the night)\n' +
              "Baby, tonight's like fuego (The night)\n" +
              "We 'bout to spend the dinero (Oh, yeah)\n" +
              'We party to the extremo, extremo, extremo, extremo, extremo \n' +
              '\n' +
              'Ritmo\n' +
              '\n' +
              'The rhythm, the rebel\n' +
              'Styles upon styles upon styles, I got several\n' +
              "Born to be wild 'cause I live like a daredevil\n" +
              'Live it up, hit ‘em up, that’s the scenario \n' +
              '2Pac, I get around like a merry go \n' +
              'Rooftop, I am on top of the pedestal \n' +
              'Flu shot, I am so sick I need medical \n' +
              'Puta, I learned that shit down in Mexico (Hahaha!)\n' +
              'The rhythm, the rebel\n' +
              'New and improved I be on a new level (Oh, yeah)\n' +
              'That’s how we do it, we buildin’ like LEGOs (Oh, yeah)\n' +
              "Fuel on the fire, you dealin' with fuego\n" +
              "Can't stop, I am addicted I never quit\n" +
              "Won't stop, don't need to speak to no therapist\n" +
              "Don’t stop, keepin' it movin's the narrative\n" +
              'Nonstop, do it like Whoop! There it is \n' +
              '\n' +
              'This is the rhythm, rhythm, rhythm, rhythm, rhythm of the night\n' +
              '\n' +
              "Toda la noche rompemo' (The night)\n" +
              "Al otro día volvemo' (Oh, yeah)\n" +
              "Tú sabes como lo hacemo', baby\n" +
              '(This is the rhythm of the night)\n' +
              "Baby, tonight's like fuego (The night)\n" +
              "We 'bout to spend the dinero (Oh, yeah)\n" +
              'We party to the extremo, baby\n' +
              '(This is the rhythm of the night)\n' +
              "Toda la noche rompemo' (The night)\n" +
              "Al otro día volvemo' (Oh, yeah)\n" +
              "Tú sabes como lo hacemo', baby\n" +
              '(This is the rhythm of the night)\n' +
              "Baby, tonight's like fuego (The night)\n" +
              "We 'bout to spend the dinero (Oh, yeah)\n" +
              'We party to the extremo, extremo, extremo, extremo, extremo\n' +
              '\n' +
              'Ritmo\n' +
              'You like that space?\n' +
              '\n' +
              'Visit Bad Boys For Life Official Site\n' +
              'Link: https://www',
            release_date: null,
            fps: 24,
            ext: 'mp4'
          },
          {
            requested_formats: [],
            categories: [],
            annotations: null,
            duration: 203,
            channel_url: 'http://www.youtube.com/channel/UCxnuocYtHU8Sxo14SOOGveg',
            playlist_title: 'Latín Pop',
            format: '137 - 1920x1080 (1080p)+251 - audio only (tiny)',
            playlist: 'Latín Pop',
            creator: null,
            release_year: null,
            age_limit: 0,
            like_count: null,
            uploader_id: 'SoSofiaReyes',
            playlist_uploader_id: 'UCjXSWead8jX-cDu-PFuzs6w',
            license: null,
            stretched_ratio: null,
            vbr: null,
            playlist_index: 3,
            subtitles: {},
            display_id: 'p03TIGqEc8o',
            id: 'p03TIGqEc8o',
            dislike_count: null,
            format_id: '137+251',
            view_count: 618884626,
            resolution: null,
            playlist_id: 'PLCJM2NLgNTQ3V9LMHvt8cKVW2cQNtsOCA',
            title: 'Sofia Reyes - 1, 2, 3 (feat. Jason Derulo & De La Ghetto) [Official Video]',
            width: 1920,
            album: null,
            requested_subtitles: null,
            vcodec: 'avc1.640028',
            abr: 160,
            chapters: null,
            uploader: 'Sofia Reyes',
            start_time: null,
            artist: null,
            uploader_url: 'http://www.youtube.com/user/SoSofiaReyes',
            thumbnail: 'https://i.ytimg.com/vi_webp/p03TIGqEc8o/maxresdefault.webp',
            thumbnails: [],
            webpage_url_basename: 'p03TIGqEc8o',
            tags: [],
            alt_title: null,
            extractor_key: 'Youtube',
            series: null,
            playlist_uploader: 'Jannes Lücht',
            average_rating: 4.7300901,
            extractor: 'youtube',
            acodec: 'opus',
            webpage_url: 'https://www.youtube.com/watch?v=p03TIGqEc8o',
            height: 1080,
            upload_date: '20180215',
            automatic_captions: {},
            track: null,
            n_entries: 3,
            formats: [],
            channel_id: 'UCxnuocYtHU8Sxo14SOOGveg',
            is_live: null,
            episode_number: null,
            season_number: null,
            end_time: null,
            description: 'Official Video for Sofia Reyes - 1, 2, 3 (feat. Jason Derulo & De La Ghetto) \n' +
              '\n' +
              'Suscríbete al canal: http://bit.ly/SofiaReyesYT\n' +
              '\n' +
              'Available on all digital platforms: https://SofiaReyes.lnk.to/123\n' +
              '\n' +
              'Follow Sofia Reyes on social media\n' +
              'FB: Sosofiareyes\n' +
              'Twitter: sofiareyes\n' +
              'IG: sofiareyesp\n' +
              '\n' +
              '\n' +
              'Lyrics:\n' +
              'Sofia, Music history, DELA!\n' +
              'SOFIA\n' +
              'Oh baby I’m thinking maybe that you were always a piece of\n' +
              'shhh…\n' +
              'You’re rubbing your dirt on everyone’s skirt you know how to\n' +
              'be a ddd…\n' +
              'Donde están tus modales, que no aprendiste ni a saludar\n' +
              'Parece que hoy me gustas un poco más\n' +
              'Pre-Coro\n' +
              'Hola comment allez, allez-vous\n' +
              'So nice to meet you\n' +
              'You say we should go and get a room\n' +
              'uhmm…\n' +
              'No\n' +
              '\n' +
              'Coro:\n' +
              'If you wanna turn it on\n' +
              'Go get a lightbulb, después hablamos\n' +
              'If you wanna turn it on\n' +
              'Go get a lighter, después bailamos\n' +
              'Ohhh 123, 123\n' +
              'Si te doy un beso ya estas a mis pies\n' +
              'Dime 123, 123\n' +
              'La la la- la la la\n' +
              '\n' +
              'JASON\n' +
              'Oh baby just hush the talking\n' +
              'And let my loving ease your mind\n' +
              'If love’s the game let’s play a million times\n' +
              'Baby give it to me\n' +
              'I’ll be good company\n' +
              'Baby mi nombre es Jason Derulo\n' +
              '\n' +
              'SOFIA - Coro\n' +
              'If you wanna turn it on\n' +
              'Go get a lightbulb, después hablamos\n' +
              'If you wanna turn it on\n' +
              'Go get a lighter, después bailamos\n' +
              'Ohhhh 123, 123\n' +
              'Si te doy un beso ya estás a mis pies\n' +
              'Dime 123, 123\n' +
              'La la la – la la la\n' +
              '\n' +
              'DE LA GHETTO\n' +
              'Disculpe la ignorancia nunca quise lastimarte\n' +
              'Lo que quiero es transformarte en mi Diosa mi obra de arte\n' +
              'Dime si tu quiere me da igual cómo se hace\n' +
              'Prendemos toda la noche y a las nubes voy a llevarte\n' +
              'Quiero yo enseñarte mucha’ cosa’ interesante\n' +
              'Convertirte en mi dama, en la cama amarrarte\n' +
              'Besarte de arriba a abajo pa’ ponerlo interesante\n' +
              'Después de todo esto nunca vas a olvidarte\n' +
              '\n' +
              'SOFIA\n' +
              'Hola comment allez, allez-vous…\n' +
              '\n' +
              'JASON\n' +
              'It’s ‘bout time we go and get a room…\n' +
              '\n' +
              'SOFIA\n' +
              'If you wanna turn it on\n' +
              'Go get a lightbulb, después hablamos\n' +
              'If you wanna turn it on\n' +
              'Go get a lighter, después bailamos\n' +
              'Ohh 123, 123\n' +
              'Si te doy un beso ya estas a mis pies\n' +
              'Dime 123, 123\n' +
              'La la la – la la la\n' +
              '\n' +
              'SOFIA, JASON, DLG\n' +
              'La la la – la la la (todos)\n' +
              '123 123\n' +
              'Care for me 123 (Jason)\n' +
              '123 123\n' +
              'Love how you counted out for me babe (Jason)\n' +
              '123 i’mma make you a freak girl…(todos)\n' +
              'Care for me 123 (Jason)\n' +
              '123 123\n' +
              'Love how you counted out for me babe… (Jason)\n' +
              '\n' +
              '\n' +
              '\n' +
              '\n' +
              '\n' +
              '\n' +
              '\n' +
              '\n' +
              '\n' +
              '\n' +
              '\n' +
              '#SofiaReyes  #123 \n' +
              '\n' +
              '\n' +
              'wmlatinapop',
            release_date: null,
            fps: 24,
            ext: 'mp4'
          }
        ],
        extractor_key: 'YoutubePlaylist'
      }
      }
  
  ];

  constructor() { }

  public getThumbnailURL(item: Item) : string {

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

  public getListProgress(item: Item): number {
    return item.isPlaylist ? 100 * item.listProgress / item.listLength : 0;
  }

  public isPlaylist(item: Item): boolean {
    console.log(item);
    return typeof item.metadata.entries == 'object';
  }

  public getItems() : Item[] {
    return this.items;
  }
}
