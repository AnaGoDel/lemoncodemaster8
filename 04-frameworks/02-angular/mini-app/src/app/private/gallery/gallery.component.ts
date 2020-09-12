import { Component, OnInit } from '@angular/core';
import { PictureEntity } from 'src/app/model/pictureEntity';
import { GalleryService } from 'src/app/service/gallery.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  pictureList: PictureEntity[];
  picture: PictureEntity;
  selectedPic: PictureEntity;
  selectedPicIndex = 0;
  selectedPicWidth: number;
  rowStart = 0;
  isPlaying = false;
  subs: Subscription;

  constructor(private service: GalleryService) {
    this.pictureList = service.getAllPictures();
    this.picture = {
      id: 0,
      src: '',
      title: '',
    };
    this.selectedPic = this.pictureList[0];
    this.selectedPicWidth = 200;
  }

  ngOnInit(): void {
  }

  isSelectedPicture = (el) => el.id === this.selectedPic.id;

  select(picture: PictureEntity): void {
    this.selectedPic = picture;
    this.selectedPicIndex = this.pictureList.findIndex(el => this.isSelectedPicture(el));
  }

  zoom_in(): void {
    this.selectedPicWidth += 20;
  }

  zoom_out(): void {
    this.selectedPicWidth -= 20;
  }

  nextPic(): void {
    if (this.selectedPicIndex !== this.pictureList.length - 1) {
      this.selectedPic = this.pictureList[this.selectedPicIndex + 1];
      this.selectedPicIndex = this.selectedPicIndex + 1;
    } else {
      this.selectedPicIndex = 0;
      this.selectedPic = this.pictureList[this.selectedPicIndex];
    }
  }

  previousPic(): void {
    this.selectedPic = this.pictureList[this.selectedPicIndex - 1];
    this.selectedPicIndex = this.selectedPicIndex - 1;
  }

  play(): void {
    this.isPlaying = true;
    const timer = interval(2000);
    this.subs = timer.subscribe(val => {
      this.nextPic();
    });
  }

  stop(): void {
    this.isPlaying = false;
    this.subs.unsubscribe();
  }

  previousRow(): void {
    if (this.rowStart > 0) {
      this.rowStart -= 3;
    } else {
      this.rowStart = 0;
    }
  }

  nextRow(): void {
    if (this.rowStart + 3 < this.pictureList.length - 1) {
      this.rowStart += 3;
    } else {
      this.rowStart = 0;
    }
  }
}
