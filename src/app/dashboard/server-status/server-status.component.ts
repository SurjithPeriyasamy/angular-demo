import {
  Component,
  DestroyRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);
  constructor() {}
  ngOnInit() {
    console.log('onInit');

    const interval = setInterval(() => {
      const rn = Math.random();
      if (rn < 0.3) {
        this.currentStatus = 'online';
      } else if (rn < 0.7) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log('view init');
  }

  // ngOnDestroy() {
  //   clearInterval(this.interval);
  // }
}
