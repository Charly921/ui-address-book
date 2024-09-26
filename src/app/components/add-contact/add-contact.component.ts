import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ApiContactServiceService } from 'src/app/services/api-contact-service.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  public contactForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiContactService: ApiContactServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sForm();
  }

  sForm() {
    this.contactForm = this.fb.group({
      //id: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      notes: [''],
      birth_date: ['', Validators.required],
      web_page: [''],
      company: ['']
    });
  }

  submitData() {
    this.apiContactService.addContact(this.contactForm.value).subscribe(res  => {
      this.router.navigate(['/dashboard']);
    });
  }
}
