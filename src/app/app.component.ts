import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  active = 0;
  collapse = true;
  fragment: string | null = '';
  private subscriptions: Subscription[] = [];

  links = [
    { title: 'Home', fragment: '' },
    { title: 'About', fragment: 'about' },
  ];

  constructor(public route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.router.navigate([this.links[0].fragment], {});
  }

  toggleCollapse(indexValue: number): void {
    this.collapse = !this.collapse;
    this.active = indexValue;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
