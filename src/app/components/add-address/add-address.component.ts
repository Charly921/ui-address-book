import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiAddressServiceService } from 'src/app/services/api-address-service.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  public addressForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private apiAddressService: ApiAddressServiceService
  ) { }

  ngOnInit(): void {
    this.sForm();
  }

  sForm() {
    this.addressForm = this.fb.group({
      contact_id: [this.data.id, [Validators.required]],
      street: ['', [Validators.required]],
      colony: ['', [Validators.required]],
      number: [''],
      city: [''],
    });
  }

  submitData = () => {
    this.apiAddressService.addAddress(this.addressForm.value).subscribe(res => {});
  }
}
