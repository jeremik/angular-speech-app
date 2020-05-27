import { Component, OnInit } from '@angular/core';
import { SpeechService } from 'src/app/service/speech.service';

@Component({
  selector: 'app-my-speech',
  templateUrl: './my-speech.component.html',
  styleUrls: ['./my-speech.component.scss']
})
export class MySpeechComponent implements OnInit {

  constructor(private speechService: SpeechService) { }
  public mySpeechList = [];
  public selectedSpeech: any;

  ngOnInit() {
    this.fetchMySpeechList(this.speechService.speechList);
  }

  public showSpeech(index) {
    this.selectedSpeech = this.mySpeechList[index];
  }

  public setUpdateSpeechList(data) {
    this.selectedSpeech = null;
    this.fetchMySpeechList(data);
  }

  private fetchMySpeechList(data): void {
    this.mySpeechList = data.filter( speech => speech.addedBy === 'You');
  }

}
