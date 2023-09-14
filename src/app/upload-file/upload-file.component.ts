import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
})
export class UploadFileComponent {
  handleFileSelection(e: any) {
    console.log(e.target.files[0]);
  }
}
