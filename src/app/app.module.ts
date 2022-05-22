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
    FormComponent
  ],
  imports: [
    BrowserModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
