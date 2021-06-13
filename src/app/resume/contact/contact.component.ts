import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { Contact } from './contact-class';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact!: Contact;

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.contact = this.backend.getContact();
  }

}
