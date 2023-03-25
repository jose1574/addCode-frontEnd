import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ConnectionDataComponent } from './components/connection-data.component';

@NgModule({
  declarations: [ConnectionDataComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  exports: [],
})
export class ConnectionDataModule { }
