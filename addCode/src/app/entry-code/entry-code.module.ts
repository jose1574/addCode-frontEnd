import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { EntryCodeComponent } from './components/entry-code.component';
import { EntryCodeService } from './services/entry-code.service';




@NgModule({
  declarations: [
    EntryCodeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [EntryCodeService, EntryCodeComponent]
})
export class EntryCodeModule { }
