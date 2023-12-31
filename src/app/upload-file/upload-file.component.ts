import { Component } from '@angular/core';
import { BASE_URL } from '../constants';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
})
export class UploadFileComponent {
  file: File | undefined = undefined;
  message: string = '';

  constructor() {}

  handleFileSelection(e: any) {
    this.message = '';
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
        this.message = 'Upload successful!!';

        (document.getElementById('file') as HTMLInputElement).value = '';
      })
      .catch((error) => console.error(error));
  }
}
