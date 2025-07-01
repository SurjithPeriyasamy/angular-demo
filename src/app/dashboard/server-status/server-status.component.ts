import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {}
  private interval?: ReturnType<typeof setInterval>;
  ngOnInit() {
    console.log('onInit');

    setInterval(() => {
      const rn = Math.random();
      if (rn < 0.3) {
        this.currentStatus = 'online';
      } else if (rn < 0.7) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngAfterViewInit() {
    console.log('view init');
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
