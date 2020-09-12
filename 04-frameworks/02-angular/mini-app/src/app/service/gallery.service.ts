import { Injectable } from '@angular/core';
import { PictureEntity } from '../model/pictureEntity';
import { Title } from '@angular/platform-browser';
import { concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {
  picturesList: PictureEntity[] = [];
  picture: PictureEntity = {
    id: 0,
    src: '',
    title: '',
  };

  constructor() { }

  getAllPictures(): PictureEntity[] {
    const baseUrl = 'assets/pic_';
    const picturesTitles = [
      'Torre Eiffel, Paris', 'Statue of Liberty, NYC', 'Opera, Sydney', 'Colisseum, Rome',
      'Alhambra, Granada', 'Pyramides, Egypt', 'Chichen Itza, Yucatan', 'Petra, Jordania'];

    for (let i = 1; i < picturesTitles.length + 1; i++) {
      this.picture.id = i;
      this.picture.src = baseUrl.concat(i.toString() + '.jpg');
      this.picture.title = picturesTitles[i];
      this.picturesList.push(this.picture);
      this.picture = {
        id: 0,
        src: '',
        title: '',
      };
    }
    return this.picturesList;
  }
}
