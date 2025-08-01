import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(event: { title: string; text: string }) {
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: event.title,
      request: event.text,
      status: 'open',
    };

    this.tickets.push(ticket);
  }
  onCompleteTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => ({
      ...ticket,
      status: ticket.id === id ? 'closed' : 'open',
    }));
  }
}
