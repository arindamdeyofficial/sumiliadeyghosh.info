import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { CareerobjectiveComponent } from './careerobjective/careerobjective.component';
import { ExperienceComponent } from './experience/experience.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { LanguageComponent } from './language/language.component';
import { HobbyComponent } from './hobby/hobby.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    CareerobjectiveComponent,
    ExperienceComponent,
    CertificatesComponent,
    LanguageComponent,
    HobbyComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
