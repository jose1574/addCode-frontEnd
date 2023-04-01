import { Component, OnInit } from '@angular/core';
import { throwError, map, Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

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
  imagen: any;
  constructor(
    private userServices: UsersService,
    private sanitizer: DomSanitizer
  ) {
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
        let newListUsers: UserDto[] = [];
        users.map(async (user: UserDto) => {
          user.image = this.getImage(user.image.data);
          newListUsers.push(user);
        });
        this.users = newListUsers;
        console.log(this.users);
      },
      error: (error) => {
        throwError(() => new error('error al buscar los usuarios'));
      },
    });
  }

  getImage(image: any) {
    let uint8Array = new Uint8Array(image);
    let blob = new Blob([uint8Array], { type: 'image/png' });
    const objectURL = URL.createObjectURL(blob);
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
}
