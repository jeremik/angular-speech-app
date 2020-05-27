import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/service/speech.service';

@Component({
  selector: 'app-all-speech-list',
  templateUrl: './all-speech-list.component.html',
  styleUrls: ['./all-speech-list.component.scss']
})
export class AllSpeechListComponent implements OnInit {
  public speechList = [];
  public searchKey: string;
  public selectedSpeech: any;

  constructor(private speechService: SpeechService) { }

  ngOnInit() {
    this.getAllSpeech();
  }

  public getAllSpeech() {
    this.speechList = this.speechService.speechList;
  }

  public search(): void {
    const list = this.speechService.speechList;
    const search = new RegExp(this.searchKey , 'i'); // prepare a regex object
    const result = list.filter(speech => search.test(speech.title));
    this.speechList = result;
  }

  public showSpeech(index) {
    this.selectedSpeech = this.speechList[index];
  }

  public setUpdateSpeechList(data) {
    this.selectedSpeech = null;
    this.speechList = data;
  }

}
