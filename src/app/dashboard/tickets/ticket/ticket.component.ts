import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticket = input.required<Ticket>();
  isDataVisible = signal(false);
  completedTicketId = output<string>();
  onToggleDetails() {
    this.isDataVisible.update((prev) => !prev);
  }
  onMarkAsCompleted() {
    this.completedTicketId.emit(this.ticket().id);
  }
}
