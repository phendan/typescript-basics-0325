// Type Alias
type X = number;
type Y = number;

// Tuple Type
type Dimensions = [X, Y];

// Type Union
type VideoTypes =
    | { extension: 'mp4'; mimeType: 'video/mp4' }
    | { extension: 'webm'; mimeType: 'video/webm' }
    | { extension: 'avi'; mimeType: 'video/x-msvideo' };

const videoType: VideoTypes = { extension: 'mp4', mimeType: 'video/mp4' };

type Video = VideoTypes & {
    resolution: Dimensions;
    /** FileSize in MB */
    fileSize: number;
    download(): boolean;
};

const video: Video = {
    extension: 'avi',
    mimeType: 'video/x-msvideo',
    resolution: [200, 400],
    fileSize: 125,
    download: () => false
};
