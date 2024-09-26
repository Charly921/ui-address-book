import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiEmailServiceService } from 'src/app/services/api-email-service.service';

@Component({
  selector: 'app-add-email',
  templateUrl: './add-email.component.html',
  styleUrls: ['./add-email.component.css']
})
export class AddEmailComponent implements OnInit {

  public emailForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private apiEmailService: ApiEmailServiceService
  ) { }

  ngOnInit(): void {
    this.sForm();
  }

  sForm() {
    this.emailForm = this.fb.group({
      contact_id: [this.data.id, [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    });
  }

  submitData = () => {
    this.apiEmailService.addEmail(this.emailForm.value).subscribe(res => {});
  }
}
