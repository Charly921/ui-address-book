import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from 'src/app/models/contact';
import { ApiContactServiceService } from 'src/app/services/api-contact-service.service';
import { EditContactComponent } from '../edit-contact/edit-contact.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { AddPhoneComponent } from '../add-phone/add-phone.component';
import { AddEmailComponent } from '../add-email/add-email.component';
import { AddAddressComponent } from '../add-address/add-address.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements /* AfterViewInit, */ OnInit {
  displayedColumns: string[] = [
    'id',
    'first_name',
    'last_name',
    'birth_date',
    'notes',
    'web_page',
    'company',
    'action'
  ];
  dataSource = new MatTableDataSource<Contact>();
  @ViewChild(MatPaginator, {static: false}) paginator!: MatPaginator;

  constructor(private apiContactService: ApiContactServiceService, public dialog: MatDialog
  ) {  }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(){
    this.apiContactService.getAllContacts().subscribe({
      next: (res: any) => {
        this.dataSource.data = [];
        if(res && res.data){
          this.dataSource.data = res.data;
        }
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  searchContacts(value: string){
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }


  openEditDialog(id: number) {
    const dialogRef = this.dialog.open(EditContactComponent, {
      data: {
        id
      },
      /* width: '100%', */
      maxWidth: '98%'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getContacts();
      }
    });
  }

  openDeleteDialog(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: "¿Confirma que desea eliminar este contacto?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.apiContactService.deleteContact(id).subscribe(res => {
          this.getContacts();
        });
      }
    });
  }

  openDetailsDialog(id: number){
    const dialogRef = this.dialog.open(ContactDetailsComponent, {
      data: {
        id
      },
      /* width: '100%', */
      maxWidth: '98%'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getContacts();
      }
    });
  }

  openPhonesDialog(id: number){
    const dialogRef = this.dialog.open(AddPhoneComponent, {
      data: {
        id
      },
      /* width: '100%', */
      maxWidth: '98%'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getContacts();
      }
    });
  }

  openEmailsDialog(id: number){
    const dialogRef = this.dialog.open(AddEmailComponent, {
      data: {
        id
      },
      /* width: '100%', */
      maxWidth: '98%'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getContacts();
      }
    });
  }

  openAddressesDialog(id: number){
    const dialogRef = this.dialog.open(AddAddressComponent, {
      data: {
        id
      },
      /* width: '100%', */
      maxWidth: '98%'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getContacts();
      }
    });
  }
}
