import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { expClass } from './expclass';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  exp!: expClass[];

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.exp = this.backend.getExperience();
  }

}
