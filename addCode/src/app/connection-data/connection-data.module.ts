import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ConnectionDataComponent } from './components/connection-data.component';
import { ConnectionDataService } from './services/connection-data.service';

@NgModule({
  declarations: [ConnectionDataComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [ConnectionDataService],
  exports: [],
})
export class ConnectionDataModule { }
