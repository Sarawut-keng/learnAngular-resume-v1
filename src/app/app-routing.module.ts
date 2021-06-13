import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiodataComponent } from './resume/biodata/biodata.component';
import { EducationComponent } from './resume/education/education.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { SkillComponent } from './resume/skill/skill.component';
import { HobbiesComponent } from './resume/hobbies/hobbies.component';
import { LifeLongLearningComponent } from './resume/life-long-learning/life-long-learning.component';
import { ContactComponent } from './resume/contact/contact.component';
import { MainComponent } from './resume/main/main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent
  },
  {
    path: "home",
    component: MainComponent
  },
  {
    path: "Biodata",
    component: BiodataComponent
  },
  {
    path: "Education",
    component: EducationComponent
  },
  {
    path: "Experience",
    component: ExperienceComponent
  },
  {
    path: "Skill",
    component: SkillComponent
  },
  {
    path: "Hobbies",
    component: HobbiesComponent
  },
  {
    path: "Life-Long-Learning",
    component: LifeLongLearningComponent
  },
  {
    path: "Contact",
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
