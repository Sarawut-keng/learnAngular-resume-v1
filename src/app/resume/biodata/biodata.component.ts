import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { bioData } from './bioClass';

@Component({
  selector: 'app-biodata',
  templateUrl: './biodata.component.html',
  styleUrls: ['./biodata.component.css']
})
export class BiodataComponent implements OnInit {

  biodata!: bioData;


  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.biodata = this.backendService.getBioData();
  }

}
