import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  label = input.required<string>();
  // @HostBinding('class') className = 'control';  >>>>>listening event from host is recommended
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }
  // constructor(private el: ElementRef) {}
  // private el = inject(ElementRef);
  // onClick() {
  //   console.log(this.el);
  // }
}
