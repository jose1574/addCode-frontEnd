import { Injectable } from '@angular/core';
import { usersModel } from './users-model/user.model';


import { UserDto } from '../dtos/user.dto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private user;

  constructor() {
    this.user = usersModel;
   }

  getUsers() {
    return this.user;
  }


  authenticateUser(users: UserDto[], code: number, password: string): boolean {
    for (let user of users) {
        if (user.code === code && user.password === password) {
            return true;
        }
    }
    return false;
}

}
