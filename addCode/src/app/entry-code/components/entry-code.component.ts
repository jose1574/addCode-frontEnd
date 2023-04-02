import { Component } from '@angular/core';
import { EntryCodeService } from '../services/entry-code.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-entry-code',
  templateUrl: './entry-code.component.html',
  styleUrls: ['./entry-code.component.css'],
})
export class EntryCodeComponent {

  product = ''
  inputUser: any;

  constructor(
    private entryCodeService: EntryCodeService
    ) {}

    showProduct(nameProduct: string) {
      this.product = nameProduct
      setTimeout(() => {
        this.product = ''
      }, 5000)
    }

  get codeOfProduct() {
    let code = this.inputUser.slice(2, -6);
    code = parseInt(code);
    return JSON.stringify(code);
  }

  saveCode() {
    return this.entryCodeService.findOneProduct(this.codeOfProduct).pipe(
      switchMap((product) => {
        this.showProduct(product.description)
        console.log('este es el producto que estoy recibiendo: ', product)

        return this.entryCodeService.saveCode(product.code, this.inputUser);
      })
    ).subscribe({
      next: () => {
        this.inputUser= ''
        console.log('los datos se guardaron correctamente ')},
      error: err => console.error('ocurrió un error al intentar guardar los datos', err)
    })
  }
}

// codigo para el ejemplo
// "2700550005507"
