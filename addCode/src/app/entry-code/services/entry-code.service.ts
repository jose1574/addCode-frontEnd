import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CodeDto } from '../dtos/code.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntryCodeService {
  apiServerLocal!: string;
  constructor(private http: HttpClient) {
    this.http.get<string>('http://localhost:3002').subscribe({
      next: (host) => {
        host = JSON.stringify(host)
        return this.apiServerLocal = host;
      }
    })
  }

  findOneProduct(id: string): Observable<any> {
    return this.http.get<CodeDto[]>(
      `http://localhost:3000/products-codes/${id}`
    );
  }

 saveCode(code: string, otherCode: string): Observable<any> {
  console.log('esto es lo que voy a guardar', code, otherCode);

    return this.http.post('http://localhost:3000/products-codes', {code: code,otherCode: otherCode})
  }
}
