import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-viewer2',
  templateUrl: './pdf-viewer2.component.html',
  styleUrls: ['./pdf-viewer2.component.css']
})
export class PdfViewer2Component implements OnInit {
  pdfName = 'demo.pdf';
  PdfUrl = `http://localhost:4200/ViewerJS/#../src/assets/PDF/${this.pdfName}`;

  trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`${this.PdfUrl}`);
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
