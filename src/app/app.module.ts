import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BackendService } from './services/backend.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiodataComponent } from './resume/biodata/biodata.component';
import { EducationComponent } from './resume/education/education.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { SkillComponent } from './resume/skill/skill.component';
import { HobbiesComponent } from './resume/hobbies/hobbies.component';
import { LifeLongLearningComponent } from './resume/life-long-learning/life-long-learning.component';
import { ContactComponent } from './resume/contact/contact.component';
import { MainComponent } from './resume/main/main.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent, 
    BiodataComponent,
    EducationComponent,
    ExperienceComponent,
    SkillComponent,
    HobbiesComponent,
    LifeLongLearningComponent,
    ContactComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
