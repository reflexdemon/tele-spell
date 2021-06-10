import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpeechService {
  //This class was inspired by https://www.bennadel.com/blog/3955-having-fun-with-the-speechsynthesis-api-in-angular-11-0-5.htm
  public voices: SpeechSynthesisVoice[];
  public rates: number[];

  public selectedVoice: SpeechSynthesisVoice | null;
  public selectedRate: number;

  constructor() {
    this.rates = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
    this.selectedRate = 1;

    //It is a first best attempt
    this.voices = speechSynthesis.getVoices();
    this.selectedVoice = this.voices[0] || null;
  }

  public getVoices(): SpeechSynthesisVoice[] {
    //Doing it again if first best attempt did not work
    this.voices = speechSynthesis.getVoices();
    this.selectedVoice = this.voices[0] || null;
    return this.voices;
  }

  // Stop any current speech synthesis.
  public stop(): void {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  }

  // Synthesize speech from the current text for the currently-selected voice.
  public speak(
    text: string,
    selectedRate?: number,
    selectedVoice?: SpeechSynthesisVoice | null
  ): void {
    if (!text) {
      return;
    }
    let rate = selectedRate || this.selectedRate;
    let voice = selectedVoice || this.selectedVoice;

    this.stop();
    this.synthesizeSpeechFromText(voice, rate, text);
  }

  public isSupported(): boolean {
    // Check to see if the browser supports the functionality.
    return 'speechSynthesis' in window;
  }

  // ---
  // PRIVATE METHODS.
  // ---
  // Perform the low-level speech synthesis for the given voice, rate, and text.
  private synthesizeSpeechFromText(
    voice: SpeechSynthesisVoice | null,
    rate: number,
    text: string
  ): void {
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice || this.voices[0];
    utterance.rate = rate;

    speechSynthesis.speak(utterance);
  }
}
