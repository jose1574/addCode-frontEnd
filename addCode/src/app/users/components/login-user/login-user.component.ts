import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class UserFormComponent {

  password: any;
  showPassword = false;
  showLoginErrors = false;
  showHide = 'mostrar';
  user: any;

  constructor(
    private routeParams: ActivatedRoute,
    private route: Router,
    private userServices: UsersService
  ) {}

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    if (this.showHide === 'mostrar') {
      this.showHide = 'ocultar';
    } else {
      this.showHide = 'mostrar';
    }
  }

  get code() {
    return this.routeParams.snapshot.params['id'];
  }

  get name() {
    return this.routeParams.snapshot.params['name'];
  }

  async loginUser(id: string, password: string) {
    this.userServices.loginUser(id, password).subscribe({
      next: (value) => {
        if(value === true ) {
          this.route.navigate(['entrycode'])
        }else{
          this.showLoginErrors = true;
        }
      },
      error:  (err) => { console.error('ocurrio un error: ', err);
       },
    })
  }
}
