import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechFormComponent } from './speech-form/speech-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SpeechFormComponent],
  exports: [SpeechFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
