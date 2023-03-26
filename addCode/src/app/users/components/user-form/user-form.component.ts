import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  showPassword = false;
  showHide = 'mostrar';

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
    if(this.showHide === 'mostrar') {
      this.showHide = 'ocultar'
    }else{
      this.showHide = 'mostrar'
    }
  }

}
