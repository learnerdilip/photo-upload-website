import { Component } from '@angular/core';
import { BASE_URL } from '../constants';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
})
export class UploadFileComponent {
  file: File | undefined = undefined;

  constructor() {}

  handleFileSelection(e: any) {
    this.file = e.target.files[0];
  }

  handleFileUpload() {
    if (!this.file) {
      return;
    }

    let data = new FormData();
    data.append('file', this.file);

    fetch(`${BASE_URL}/image`, { method: 'POST', body: data })
      .then((response) => response.json())
      .then((data) => {
        this.file = undefined;
      })
      .catch((error) => console.error(error));
  }
}
