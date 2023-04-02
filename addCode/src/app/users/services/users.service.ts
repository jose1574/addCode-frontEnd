import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

import { UserDto } from '../dtos/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: any;
  private apiServerLocal: any;

  constructor(private http: HttpClient) {}

  getNameHost():Observable<any> {
    console.log('aqui');
   return this.http.get('http://localhost:3002').pipe(
      tap(host => this.apiServerLocal = host )
    )
  }

  findUsers(): Observable<any> {
    return this.http.get<UserDto[]>(`http://${this.apiServerLocal}:3000/users`);
  }

  async findOneUser(id: string) {
    return await this.http.get<UserDto[]>(`http://${this.apiServerLocal}:3000/users/${id}`);
  }

  loginUser(username: string, password: string) {
    return this.http.post(`http://${this.apiServerLocal}:3000/users/login`, {
      username,
      password,
    });
  }
}
