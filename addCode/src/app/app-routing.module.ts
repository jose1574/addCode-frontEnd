import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionDataComponent } from './connection-data/components/connection-data.component';

const routes: Routes = [
  {path: 'connection', component: ConnectionDataComponent }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
