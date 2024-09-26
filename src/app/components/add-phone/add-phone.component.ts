import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiPhoneServiceService } from 'src/app/services/api-phone-service.service';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})
export class AddPhoneComponent implements OnInit {

  public phoneForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private apiPhoneService: ApiPhoneServiceService
  ) { }

  ngOnInit(): void {
    this.sForm();
  }

  sForm() {
    this.phoneForm = this.fb.group({
      contact_id: [this.data.id, [Validators.required]],
      phone_number: ['', [Validators.required]],
    });
  }

  submitData = () => {
    this.apiPhoneService.addPhone(this.phoneForm.value).subscribe(res => {});
  }
}
