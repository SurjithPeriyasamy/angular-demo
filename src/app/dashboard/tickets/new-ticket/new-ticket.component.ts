import {
  AfterViewInit,
  Component,
  ElementRef,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;

  add = output<{ title: string; text: string }>();
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngAfterViewInit() {
    console.log(this.form().nativeElement, 'after');
  }

  onSubmit(enteredTitle: string, enteredText: string) {
    console.log('clicked', enteredTitle, enteredText);
    this.add.emit({ title: enteredTitle, text: enteredText });
    this.form().nativeElement.reset();
  }
}
