import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiContactServiceService } from 'src/app/services/api-contact-service.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  public contactForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private apiContactService: ApiContactServiceService
  ) { }

  ngOnInit(): void {
    this.sForm();
    this.apiContactService.getContact(this.data.id).subscribe({
      next: (res: any) => {
        if(res && res.data){
          this.contactForm.patchValue(res.data);
        }
      }
    });
  }

  sForm() {
    this.contactForm = this.fb.group({
      id: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      notes: [''],
      birth_date: ['', Validators.required],
      web_page: [''],
      company: ['']
    });
  }

  submitData = () => {
    this.apiContactService.updateContact(this.contactForm.value).subscribe(res => {});
  }
}
