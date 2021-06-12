import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { BiodataComponent } from './resume/biodata/biodata.component';
import { EducationComponent } from './resume/education/education.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { SkillComponent } from './resume/skill/skill.component';
import { HobbiesComponent } from './resume/hobbies/hobbies.component';
import { LifeLongLearningComponent } from './resume/life-long-learning/life-long-learning.component';
import { ContactComponent } from './resume/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    BiodataComponent,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
    HobbiesComponent,
    LifeLongLearningComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
