import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConnectionDataService {
  constructor(private http: HttpClient) {}

  saveHost(data: string) {
    const result = this.http.post('http://localhost:3002', data).pipe(
      tap((data) => data),
      catchError((error) => error)
    );
    return result;
  }
}


