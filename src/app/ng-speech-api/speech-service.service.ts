import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  //This class was inspired by https://www.bennadel.com/blog/3955-having-fun-with-the-speechsynthesis-api-in-angular-11-0-5.htm
  public voices: SpeechSynthesisVoice[];
  public rates: number[];

  public selectedVoice: SpeechSynthesisVoice | null;
  public selectedRate: number;

  constructor() { 
    this.voices = speechSynthesis.getVoices();
    this.rates = [ .25, .5, .75, 1, 1.25, 1.5, 1.75, 2 ];
    this.selectedRate = 1;
    this.selectedVoice = ( this.voices[ 0 ] || null );
    // The voices aren't immediately available (or so it seems). As such, if no
		// voices came back, let's assume they haven't loaded yet and we need to wait for
		// the "voiceschanged" event to fire before we can access them.
		if ( ! this.voices.length ) {
			speechSynthesis.addEventListener(
				'voiceschanged',
				() => {
					this.voices = speechSynthesis.getVoices();
          this.selectedVoice = ( this.voices[ 0 ] || null );
				}
			);
		}
  }

  // Stop any current speech synthesis.
	public stop() : void {
		if ( speechSynthesis.speaking ) {
			speechSynthesis.cancel();
		}
	}

  // Synthesize speech from the current text for the currently-selected voice.
	public speak(text: string,
               selectedRate?: number,
               selectedVoice?: SpeechSynthesisVoice | null) : void {
		if ( ! text ) {
			return;
		}
    let rate = selectedRate || this.selectedRate;
    let voice = selectedVoice || this.selectedVoice;

		this.stop();
		this.synthesizeSpeechFromText( voice, rate, text );

	}

  public isSupported(): boolean {
    // Check to see if the browser supports the functionality.
    return ('speechSynthesis' in window);
  }

 // ---
	// PRIVATE METHODS.
	// ---
	// Perform the low-level speech synthesis for the given voice, rate, and text.
	private synthesizeSpeechFromText(
		voice: SpeechSynthesisVoice | null,
		rate: number,
		text: string
		) : void {

		var utterance = new SpeechSynthesisUtterance( text );
		utterance.voice = voice ||  this.voices[ 0 ] ;
		utterance.rate = rate;

		speechSynthesis.speak( utterance );

	}
}
