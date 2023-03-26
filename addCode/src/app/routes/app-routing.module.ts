import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules  } from '@angular/router';


import { ConnectionDataComponent } from '../connection-data/components/connection-data.component';
import { UsersComponent } from '../users/components/users-components/users.component';
import { UserFormComponent } from '../users/components/user-form/user-form.component';
import { EntryCodeComponent } from '../entry-code/components/entry-code.component';



const routes: Routes = [
  {path: '', component: ConnectionDataComponent },
  {path: 'users', component: UsersComponent },
  {path: 'users/:id', component: UsersComponent },
  {path: 'userform', component: UserFormComponent},
  {path: 'userform/:id', component: UserFormComponent},
  {path: 'entrycode', component: EntryCodeComponent}

];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
