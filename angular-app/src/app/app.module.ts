import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';

import { DispositionCodesService } from './disposition-codes.service';
import { ACodeViewerComponent } from './a-code-viewer/a-code-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeViewerComponent,
    ACodeViewerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [
    DispositionCodesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
