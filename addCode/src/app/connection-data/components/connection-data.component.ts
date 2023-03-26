import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connection-data',
  templateUrl: './connection-data.component.html',
  styleUrls: ['./connection-data.component.css'],
})
export class ConnectionDataComponent {
  dataConnectionForm: FormGroup;
  alertNotConnection: boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.dataConnectionForm = new FormGroup({
      host: new FormControl('', [Validators.required]),
    });

    this.alertNotConnection = false;
  }

  saveHost() {
    const data = this.dataConnectionForm.value.host;
    const result = this.http.post('http://localhost:3002', data).subscribe({
      next: (Response) => {
        console.log('esta es la respuesta del servidor: ', Response);
        this.router.navigateByUrl('users');
      },
      error: (error) => {
        this.alertNotConnection = true;
        console.error('error devuelo del servidor: ', error);
      },
    });
    return result;
  }

  showAlert() {
    this.alertNotConnection = false;
  }
}
