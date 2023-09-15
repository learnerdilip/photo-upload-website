import { Component } from '@angular/core';

import { BASE_URL } from '../constants';
import { ImageItem } from '../types';

@Component({
  selector: 'app-paginated-images',
  templateUrl: './paginated-images.component.html',
})
export class PaginatedImagesComponent {
  imageList: ImageItem[] = [];
  currentPage: number = 0;
  lastPage: boolean = false;
  selectedImage: ImageItem | undefined = undefined;

  constructor() {
    this.fetchImages();
  }

  fetchImages(page: number = 0) {
    fetch(`${BASE_URL}/images?page=${this.currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data || !data.length) {
          this.lastPage = true;
        }
        this.imageList = [...data];
      })
      .catch((error) => console.error(error));
  }

  handleBackClick() {
    this.currentPage = this.currentPage - 1;
    this.fetchImages(this.currentPage);
    this.lastPage = false;
  }

  handleNextClick() {
    this.currentPage = this.currentPage + 1;
    this.fetchImages(this.currentPage);
  }

  handleImageClick(image: ImageItem) {
    this.selectedImage = image;
    const modal: any = document.getElementById('imageDetail');
    modal.showModal();
  }
}
