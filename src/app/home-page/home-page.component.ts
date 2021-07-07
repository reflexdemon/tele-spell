import { SpellService } from './../spell-api/spell.service';
import { SpeechService } from './../ng-speech-api/speech-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, delay } from 'rxjs/operators';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  toSpell = '';
  message = '';
  speakable: string[] = [];
  speechSupported = true;
  voices: SpeechSynthesisVoice[];
  rates: number[];

  inputVoiceFormatter = (v: SpeechSynthesisVoice) => v.name;
  resultVoiceFormatter = (v: SpeechSynthesisVoice) =>
    v.name + ' - (' + v.lang + ')';
  searchVoice: OperatorFunction<string, readonly SpeechSynthesisVoice[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        this.voices
          .filter((voice) => new RegExp(term, 'mi').test(voice.name))
          .slice(0, 10)
      )
    );
  speaker: SpeechSynthesisVoice;
  rate: number = 1;
  constructor(private speech: SpeechService, private spell: SpellService) {
    this.speaker = this.speech.selectedVoice;
    this.rates = this.speech.rates;
    this.voices = this.speech.getVoices();
  }

  ngOnInit(): void {
    this.speechSupported = this.speech.isSupported();

    //Dummy delay
    of('dummy')
      .pipe(delay(1000))
      .subscribe((val) => (this.voices = this.speech.getVoices()));
  }
  speak(): void {
    this.message = this.speakable.join(', ');
    let voiceSelected = this.speaker; //this.voices.filter(v => v == this.speaker).pop();
    this.speech.speak(this.message, this.rate, voiceSelected);
  }
  getSpeakable(): void {
    this.speakable = this.spell.getSpellable(this.toSpell);
  }
  stop(): void {
    this.speech.stop();
  }
}
