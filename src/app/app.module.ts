import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {DevExtremeModule } from 'devextreme-angular';
import { ArticleService } from './service/aticle.service';
import { ConnectionComponent } from './admin.page/connection/connection.component';
import { CrudPageComponent } from './admin.page/crud.page/crud.page.component';
import { HomeComponent } from './home/home/home.component';
import { ContactFormComponent } from './contact.form/contact.form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    CrudPageComponent,
    HomeComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DevExtremeModule,
    BrowserModule, FormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
