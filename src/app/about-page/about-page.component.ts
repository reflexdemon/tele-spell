import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
  variable = 0;
  constructor() { }

  ngOnInit(): void {
    this.variable = 1;
  }

}
