import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from './components/users-components/users.component';

import { RouterModule } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ]
})
export class UserModule { }
