import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AutofillComponent } from './components/autofill/autofill.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// for reactive forms
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';

// for template-driven forms
import { FormsModule } from '@angular/forms';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { HighlightDirective } from './shared/highlight.directive';
import { ForbiddenNameDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedDirective } from './shared/identity-revealed.directive';
import { AlterEgoDirective } from './shared/alter-ego.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { OurHeroesComponent } from './components/our-heroes/our-heroes.component';
import { AttrDirective } from './shared/attr.directive';
import { UnlessDirective } from './shared/unless.directive';
import { FlyingHeroesPipe } from './shared/pipes/flying-heroes.pipe';
import { ObservComponent } from './components/observ/observ.component';
import { AppRoutingModule } from './app-routing.module';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { ReactiveForms2Component } from './components/reactive-forms2/reactive-forms2.component';
import { PersonaliseNhComponent } from './components/personalise-nh/personalise-nh.component';

// Http
import { HttpClientModule } from '@angular/common/http';
import { PrettyPrintPipe } from './shared/pipes/pretty-print.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
    AutofillComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent,
    FormValidationComponent,
    HighlightDirective,
    ForbiddenNameDirective,
    IdentityRevealedDirective,
    AlterEgoDirective,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    OurHeroesComponent,
    AttrDirective,
    UnlessDirective,
    FlyingHeroesPipe,
    ObservComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent,
    ReactiveForms2Component,
    PersonaliseNhComponent,
    PrettyPrintPipe
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
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
