import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],

})
export class HeaderComponent implements OnInit, OnDestroy {
  currentDate: string = '';
  intervalId: any;

  ngOnInit() {
    this.updateDate();
    this.intervalId = setInterval(() => {
      this.updateDate();
    }, 86400000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private updateDate() {
    const now = new Date();
    this.currentDate = now.toLocaleDateString();
  }
}
