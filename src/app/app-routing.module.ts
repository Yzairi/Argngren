import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudPageComponent } from './admin.page/crud.page/crud.page.component';
import { HomeComponent } from './home/home/home.component';
import { ContactFormComponent } from './contact.form/contact.form.component';
import { ConnectionComponent } from './admin.page/connection/connection.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: ConnectionComponent,
  },
  {
    path:'crud',
    component:CrudPageComponent
  },
  {
    path: 'contact',
    component: ContactFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
