import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientAddComponent } from './client-add.component';
import { ClientListComponent } from './client-list.component';
import { ClientListGuard } from './client-list.guard';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild([
        { path: 'clients', component: ClientListComponent },
        { path: 'clients/add', component: ClientAddComponent },
        {
          path: 'clients/:id',
          canActivate: [ClientListGuard],
          component: ClientListComponent
        }
      ]),
    ],
    declarations: [
      ClientAddComponent,
      ClientListComponent
    ]
  })
  export class ClientModule { }