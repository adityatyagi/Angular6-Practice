import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  urlPDF = 'https://www.tutorialspoint.com/angular2/angular2_tutorial.pdf';

  page: number = 1;
  zoomLevel: number = 1;
  rotationLevel: number = 0;
  totalPages: number;
  isLoaded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // is an event property that returns data about PDF once it is loaded.
  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  // increments the page number
  nextPage() {
    this.page++;
  }

  // decrements the page number
  prevPage() {
    this.page--;
  }

  // zoom in
  zoomIn() {
    if (this.zoomLevel < 1.6) {
      this.zoomLevel += 0.1;
    } else {
      alert('You have reached maximum zoom level!');
    }

  }

  // zoom out
  zoomOut() {
    if (this.zoomLevel > 0.8) {
      this.zoomLevel -= 0.1;
    } else {
      alert('You have reached minimum zoom level!');
    }
  }

  // default size
  setDefaultSize() {
    this.zoomLevel = 1;
  }

  // rotate
  rotate() {
    this.rotationLevel += 90;
  }

  // clear rotation
  rotateDefault() {
    this.rotationLevel = 0;
  }
}
