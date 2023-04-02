import { inject, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { ConnectionDataModule } from './connection-data/connection-data.module';
import { UserModule } from './users/users.module';
import { EntryCodeModule } from './entry-code/entry-code.module';


export function nameHost(service: AppComponent) {
  return service.apiServerLocal;
}

export const API_SERVER_LOCAL = new InjectionToken<string>('kjh')

@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ConnectionDataModule,
    UserModule,
    EntryCodeModule,
  ],
  providers: [
    {provide: API_SERVER_LOCAL, useValue: 'SERVER'}
  ],
  bootstrap: [AppComponent],
  exports: [ CommonModule],
})
export class AppModule { }
