import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  OnInit,
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
export class ControlComponent implements AfterContentInit, OnInit {
  label = input.required<string>();
  // @HostBinding('class') className = 'control';  >>>>>listening event from host is recommended
  // @HostListener('click') onClick() {
  //   console.log('clicked');
  // }  host Listener
  // constructor(private el: ElementRef) {}
  // private el = inject(ElementRef);

  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  // private control =
  //   contentChild.required<ElementRef<HTMLInputElement | HTMLTextAreaElement>>(
  //     'input'
  //   );

  ngOnInit(): void {
    console.log(this.control);
  }
  ngAfterContentInit() {
    console.log(this.control);
  }
  onClick() {
    console.log(this.control);
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
