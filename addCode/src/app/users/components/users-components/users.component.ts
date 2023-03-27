import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { throwError} from'rxjs';

import { UserDto } from '../../dtos/user.dto';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: '../users-components/users.component.html',
  styleUrls: ['../users-components/users.component.css']
})
export class UsersComponent implements OnInit {
  page: number = 1;
  users: UserDto[];

  constructor(private userServices: UsersService, private route: ActivatedRoute) {
    this.users=[]
  }


  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userServices.getUsers().subscribe({
      next: (users) => {this.users = users},
      error: (error: any) => {throwError(() => new error('error al buscar los usuarios'))}
    })
  }
}
