import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from './components/users-components/users.component';

import { RouterModule } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UsersService } from './services/users.service';



@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ],
  providers: [UsersService]
})
export class UserModule { }
