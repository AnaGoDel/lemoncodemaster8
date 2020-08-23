import { PictureInfo } from 'common/components';

export const mapPicturesListFromApiToViewModel = (picturesList: PictureInfo[]) => {
    return picturesList.map(picture => mapPictureFromApiToViewModel(picture));
}

const mapPictureFromApiToViewModel = (picture: PictureInfo) => {
    return {
        ...picture,
        selected: false
    };
}