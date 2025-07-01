import {
  Component,
  contentChild,
  ContentChild,
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
  // }  host Listener
  // constructor(private el: ElementRef) {}
  // private el = inject(ElementRef);

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  // >;

  private control =
    contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
      'input'
    );
  onClick() {
    console.log(this.control());
  }
}

// @Component({
//   selector: 'app-control',
//   standalone: true,
//   imports: [],
//   templateUrl: './control.component.html',
//   styleUrl: './control.component.css',
//   encapsulation: ViewEncapsulation.None,
// })
// export class ControlComponent {
//   label = input.required<string>();
//   // @HostBinding('class') className = 'control';  >>>>>listening event from host is recommended
//   // @HostListener('click') onClick() {
//   //   console.log('clicked');
//   // }  host Listener
//   // constructor(private el: ElementRef) {}
//   // private el = inject(ElementRef);
// }
