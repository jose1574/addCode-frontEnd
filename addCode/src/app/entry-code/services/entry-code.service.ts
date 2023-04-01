import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CodeDto } from '../dtos/code.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntryCodeService {
  constructor(private http: HttpClient) {}

  //retorna un producto con cualquier de sus códigos
  // async findOneProduct(code: string): Observable<any>  {
  //   return this.http.get(`http://localhost:3000/products-codes/${code}`).subscribe({
  //     next: value => {
  //       console.log('esto es lo que tengo desde findOnde: ', value);
  //       return value

  //     },
  //     error: err => err,
  //   })
  // }

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
