import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Address } from 'src/app/models/address';
import { Contact } from 'src/app/models/contact';
import { Email } from 'src/app/models/email';
import { Phone } from 'src/app/models/phone';
import { ApiContactServiceService } from 'src/app/services/api-contact-service.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  phoneColumns: string[] = [
    'phone_number',
  ];
  emailColumns: string[] = [
    'email',
  ];
  addressColumns: string[] = [
    'address'
  ];
  dataSourcePhone = new MatTableDataSource<Phone>();
  dataSourceEmail = new MatTableDataSource<Email>();
  dataSourceAddress = new MatTableDataSource<Address>();
  contact: Contact = {
    id: 0,
    first_name: '',
    last_name: '',
    notes: '',
    birth_date: '',
    web_page: '',
    company: ''
  };

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiContactService: ApiContactServiceService
  ) { }

  ngOnInit(): void {
    this.apiContactService.getContactDetails(this.data.id).subscribe({
      next: (res: any) => {
        this.dataSourcePhone.data = [];
        this.dataSourceEmail.data = [];
        this.dataSourceAddress.data = [];
        if(res && res.data){
          this.dataSourcePhone.data = res.data.phones;
          this.dataSourceEmail.data = res.data.emails;
          this.dataSourceAddress.data = res.data.addresses;
          this.contact = res.data.contact;
        }
      }
    });
  }
}
