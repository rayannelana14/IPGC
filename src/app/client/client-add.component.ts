import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  templateUrl: './client-add.component.html'
})

export class ClientAddComponent implements OnInit {
  pageTitle = 'Cadastro de Clientes';
  errorMessage = '';
  clientForm: FormGroup;
  client: ClientAddComponent;
  ngZone: NgZone;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService){
  }



  ngOnInit(): void {
    this.createClient()
  }

  createClient() {
    this.clientForm = this.fb.group({
      name: [''],
      telefone: [''],
      email: ['']
    })
  }

  submitForm() {
    this.clientService.createClient(this.clientForm.value).subscribe(res => {
      console.log('Client added!')
      this.router.navigate(['/clients']);
    })
  }


}
