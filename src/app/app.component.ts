import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public activeTab = 'mySpeech';

  public setTab(tab) {
    this.activeTab = tab;
  }
}
