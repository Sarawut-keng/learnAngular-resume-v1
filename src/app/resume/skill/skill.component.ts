import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { skillClass } from './skill-class';
import { subSkill } from './skill-class';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skill!: skillClass[];
  soft!: subSkill[];
  hard!: subSkill[];

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.skill = this.backend.getSkill();
    this.soft = this.skill[0].skill
    this.hard = this.skill[1].skill
  }

}
