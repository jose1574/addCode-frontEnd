import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from '../dtos/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  users: any;

  constructor(private http: HttpClient) {}

  findUsers(): Observable<any> {
   return this.http.get<UserDto[]>('http://localhost:3000/users')
  }

  async findOneUser(id: string) {
    return await this.http.get<UserDto[]>(`http://localhost:3000/users/${id}`)
  }

  loginUser(username: string, password: string) {
    return this.http.post('http://localhost:3000/users/login', { username, password })
  }
}
