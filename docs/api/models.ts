export interface VideoCategory {
    title: string;
    color: string;
    description: string;
    id: string;
    images: Images;
    numVideos: number;
    videos: Video[];
}

export interface Images {
    large: string;
    medium: string;
    mini: string;
    small: string;
}

export interface Video {
    color: string;
    description: string;
    id: string;
    durationSeconds: number;
    images: Images;
    shareUrl: string;
    subtitle: string;
    title: string;
    publishDate: string
    youtubeId: string;
}