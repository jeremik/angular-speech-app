import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MySpeechComponent } from './my-speech/my-speech.component';
import { AllSpeechListComponent } from './all-speech-list/all-speech-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [MySpeechComponent, AllSpeechListComponent],
  exports: [MySpeechComponent, AllSpeechListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CoreModule { }
