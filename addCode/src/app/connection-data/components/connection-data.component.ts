import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ConnectionDataService } from '../services/connection-data.service';
@Component({
  selector: 'app-connection-data',
  templateUrl: './connection-data.component.html',
  styleUrls: ['./connection-data.component.css'],
})
export class ConnectionDataComponent {
  dataConnectionForm: FormGroup;
  alertNotConnection: boolean;

  constructor(
    private connectionService: ConnectionDataService,
    private router: Router
     ) {
    this.dataConnectionForm = new FormGroup({
      host: new FormControl('', [Validators.required]),
    });

    this.alertNotConnection = false;
  }

   saveHost() {
    const data = this.dataConnectionForm.value.host;

    return  this.connectionService.saveHost(data).subscribe({
     next: (data) => {
        console.log('se guardaron correctamente estos datos: ', data);
        this.router.navigateByUrl('users');
        data;
      },
      error: error => {
        console.error('no se pudo guardar la dirección del host', error);
        this.alertNotConnection= true;
        error;
      }
    });
  }
  showAlert() {
    this.alertNotConnection = false;
  }
}
