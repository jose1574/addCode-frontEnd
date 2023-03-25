import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-connection-data',
  templateUrl: './connection-data.component.html',
  styleUrls: ['./connection-data.component.css'],
})
export class ConnectionDataComponent {

  dataConnectionForm: FormGroup;



  constructor(private http: HttpClient ) {

   this.dataConnectionForm = new FormGroup({
      host: new FormControl('', [Validators.required]),
    });
  }

  saveHost() {
    console.log('esto si funciona')

    console.log(this.dataConnectionForm.value);
     const data = JSON.stringify(this.dataConnectionForm.value)
     console.log('esto es lo que estoy enviando: ',data);


    return this.http.post('http://localhost:3001', data).subscribe(response => {
      console.log(response);
    });
  }
}
