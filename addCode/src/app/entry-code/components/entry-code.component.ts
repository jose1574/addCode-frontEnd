import { Component } from '@angular/core';
import { EntryCodeService } from '../services/entry-code.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-entry-code',
  templateUrl: './entry-code.component.html',
  styleUrls: ['./entry-code.component.css'],
})
export class EntryCodeComponent {
  inputUser!: any;
  product: string = '';
  alert: boolean = false;

  constructor(private entryCodeService: EntryCodeService) {}

  showProduct(nameProduct: string) {
    this.product = nameProduct;
    setTimeout(() => {
      this.product = '';
    }, 5000);
  }

  showMessage(value: any) {
    if (value == 'alert') {
      this.alert = true;
      this.inputUser = '';
      this.product = '';
      setTimeout(() => {
        this.alert = false;
      }, 5000);
    } else {
      this.alert = false;
      this.showProduct(value);
    }
  }

  get codeOfProduct() {
    let code = this.inputUser.slice(2, -6);
    code = parseInt(code);
    return JSON.stringify(code);
  }

  saveCode() {
    return this.entryCodeService
      .findOneProduct(this.codeOfProduct)
      .pipe(
        switchMap((product) => {
          this.showMessage(product.description);
          return this.entryCodeService.saveCode(product.code, this.inputUser);
        })
      )
      .subscribe({
        next: () => {
          this.inputUser = '';
          console.log('los datos se guardaron correctamente ');
        },
        error: () => {
          this.showMessage('alert');
        },
      });
  }
}
