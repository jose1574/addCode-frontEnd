import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { ConnectionDataModule } from './connection-data/connection-data.module';
import { UserModule } from './users/users.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ConnectionDataModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ CommonModule ]
})
export class AppModule { }
