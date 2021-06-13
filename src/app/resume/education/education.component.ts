import { Component, OnInit } from '@angular/core';
import { eduClass } from './educlass';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education!: eduClass[];
  ppk!: eduClass;
  cmu!: eduClass;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
     this.education = this.backendService.getEducation();
     this.ppk = this.education[0];
     this.cmu = this.education[1];
  }

}
