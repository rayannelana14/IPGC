import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  pageTitle = 'Lista de Clientes';
  errorMessage = '';


  filteredClients: Client[] = [];
  clients: Client[] = [];

  @ViewChild("toast") toast: ElementRef;

  constructor(private clientService: ClientService) {

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Clientes: ' + message;
  }

  performFilter(filterBy: string): Client[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.clients.filter((client: Client) =>
      client.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this.clientService.getClients().subscribe({
      next: clients => {
        this.clients = clients;
        this.filteredClients = this.clients;
      },
      error: err => this.errorMessage = err
    });
  }
}
