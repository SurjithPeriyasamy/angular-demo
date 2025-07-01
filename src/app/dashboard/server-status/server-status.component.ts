import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);
  constructor() {
    effect((onCleanUp) => {
      console.log(this.currentStatus());
    });
  }
  ngOnInit() {
    console.log('onInit');

    const interval = setInterval(() => {
      const rn = Math.random();
      if (rn < 0.3) {
        this.currentStatus.set('online');
      } else if (rn < 0.7) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
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
