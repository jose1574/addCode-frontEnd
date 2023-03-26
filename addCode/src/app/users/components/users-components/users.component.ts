import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserDto } from '../../dtos/user.dto';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: '../users-components/users.component.html',
  styleUrls: ['../users-components/users.component.css']
})
export class UsersComponent {
  public page: number = 1;
  public users: UserDto[];

  constructor(private userServices: UsersService, private route: ActivatedRoute) {
    this.users = this.userServices.getUsers();
  }

  authenticateUser(code: number) {
    console.log('este es el codigo que recibo: ', code);
  }
}
