import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  variable = 0
  constructor() { }

  ngOnInit(): void {
    this.variable = 1;
  }

}
