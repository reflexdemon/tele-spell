import { SpeechService } from './../ng-speech-api/speech-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  toSpell = 'Venkateswara Venkatraman Prasanna';
  message = ''
  speechSupported = true;
  
  constructor(
    private speech: SpeechService
  ) { }

  ngOnInit(): void {
    this.toSpell = 'Venkateswara Venkatraman Prasanna';
    this.message = 'V as Victory'
    this.speechSupported = this.speech.isSupported();
  }
  speak(): void {
    this.speech.speak(this.message);
  }

}
