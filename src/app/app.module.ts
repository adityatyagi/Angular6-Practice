import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AutofillComponent } from './components/autofill/autofill.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

// for reactive forms
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';

// for template-driven forms
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
    AutofillComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
