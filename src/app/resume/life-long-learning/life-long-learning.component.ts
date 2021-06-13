import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { lifeClass } from './life-long-class';

@Component({
  selector: 'app-life-long-learning',
  templateUrl: './life-long-learning.component.html',
  styleUrls: ['./life-long-learning.component.css']
})
export class LifeLongLearningComponent implements OnInit {

  lifeLong!: lifeClass;

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.lifeLong = this.backend.getLifeLong()
  }

}
