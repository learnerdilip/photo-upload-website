import { Component } from '@angular/core';

@Component({
  selector: 'app-paginated-images',
  templateUrl: './paginated-images.component.html',
})
export class PaginatedImagesComponent {
  url = "https://picture-upload-lytho-dilip.s3.amazonaws.com/pexels-pixabay-220201.jpg"
  imageList = [this.url,this.url,this.url,this.url,this.url,this.url,this.url,this.url,this.url]
}
