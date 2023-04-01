import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from './components/users-components/users.component';

import { RouterModule } from '@angular/router';
import { UserFormComponent } from './components/login-user/login-user.component';
import { UsersService } from './services/users.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule
  ],
  providers: [UsersService]
})
export class UserModule { }
