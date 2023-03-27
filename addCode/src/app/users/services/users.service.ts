import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserDto } from '../dtos/user.dto';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /*contenedor para usuarios devueltos de la consulta a la tabla
users de la base de datos*/

  users: any;

  // private user;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
   return this.http.get<UserDto[]>('http://localhost:3000/users')
  }
}
