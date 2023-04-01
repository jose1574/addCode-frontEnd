import { Component, OnInit } from '@angular/core';
import { throwError, filter, tap, map } from 'rxjs';

import { UserDto } from '../../dtos/user.dto';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: '../users-components/users.component.html',
  styleUrls: ['../users-components/users.component.css'],
})
export class UsersComponent implements OnInit {
  page: number = 1;
  users!: UserDto[];

  constructor(private userServices: UsersService) {
    this.users = [];
  }

  async ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    let users$ = this.userServices
      .findUsers()
      .pipe(map((users) => users.filter((user: UserDto) => user.code !== 0)));

    users$.subscribe({
      next: (users) => {
        this.users = users;
      },
      error: (error) => {
        throwError(() => new error('error al buscar los usuarios'));
      },
    });
  }
}
