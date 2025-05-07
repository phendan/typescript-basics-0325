// Type Alias
export type X = number;
type Y = number;

// Tuple Type
type Dimensions = [X, Y];

// Type Union
type VideoTypes =
    | { extension: 'mp4'; mimeType: 'video/mp4' }
    | { extension: 'webm'; mimeType: 'video/webm' }
    | { extension: 'avi'; mimeType: 'video/x-msvideo' };

const videoType: VideoTypes = { extension: 'mp4', mimeType: 'video/mp4' };

// Type Intersection
type Video = VideoTypes & {
    resolution: Dimensions;
    /** FileSize in MB */
    fileSize: number;
    download(): boolean;
};

export const video: Video = {
    extension: 'avi',
    mimeType: 'video/x-msvideo',
    resolution: [200, 400],
    fileSize: 125,
    download: () => false
};

interface UserInterface {
    name: string;
}

class User implements UserInterface {
    public name = 'philip';
}

// class Admin extends User {

// }

type UserList = User[];

const userOne = new User();

const userList: UserList = [userOne];
