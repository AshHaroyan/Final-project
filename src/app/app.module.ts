import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NurtownComponent } from './Components/nurtown/nurtown.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { ProjectComponent } from './Components/project/project.component';
import { ComponyComponent } from './Components/compony/compony.component';
import { InfoComponent } from './Components/info/info.component';
import { FormComponent } from './Components/form/form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {Routes, RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { HttpComponent } from './http/http.component';
import {HttpClientModule} from "@angular/common/http";



const Routing: Routes =[
  {
    path: 'nurtown',
    component: NurtownComponent
  },
  {
    path: 'gallery',
    component:GalleryComponent
  },
  {
    path: '**',
    component: NurtownComponent
  },


]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NurtownComponent,
    GalleryComponent,
    ProjectComponent,
    ComponyComponent,
    InfoComponent,
    FormComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(Routing),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
