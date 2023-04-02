import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CodeDto } from '../dtos/code.dto';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntryCodeService {

  private apiServerLocal: any;

  constructor(private http: HttpClient) {
    this.getNameHost().subscribe()
  }

  getNameHost():Observable<any> {
    return this.http.get<any>(`http://localhost:3002`).pipe(
       tap((host) => this.apiServerLocal = host)
     )
   }

  findOneProduct(id: string): Observable<any> {
    return this.http.get<CodeDto[]>(
      `http://${this.apiServerLocal}:3000/products-codes/${id}`
    );
  }

 saveCode(code: string, otherCode: string): Observable<any> {
    return this.http.post<CodeDto>(`http://${this.apiServerLocal}:3000/products-codes`, {code: code,otherCode: otherCode})
  }
}
