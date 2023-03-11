import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, OnInit, ViewChild,  ElementRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Buchungen } from '../Domain/buchungen';
import { DatenbankService } from '../DI/datenbank.service';
import { Kombiticket } from '../Domain/kombiticket';
import { Leistung } from '../Domain/leistung';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 @Component({
  selector: 'app-buchungsuebersicht',
  templateUrl: './buchungsuebersicht.component.html',
  styleUrls: ['./buchungsuebersicht.component.scss']
})
export class BuchungsuebersichtComponent  implements OnInit {
  customerForm: FormGroup;
  constructor(public daten: DatenbankService, private formBuilder: FormBuilder){
    this.customerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: [''],
      zipCode: [''],
      street: [''],
      houseNumber: [''],
      services: [[]],
      comboTicket: [''],
      date: [''],
      time: [''],
    });

  }
  listeKombiticket: Kombiticket[]=[];
  listeLeistungen: Leistung[]=[];
  ngOnInit(): void {
    this.daten.getListeKombiticket().then(() => {
      this.listeKombiticket = this.daten.listeKombitickets;
     
      });
    
      this.daten.getListeLeistungen().then(() => {
        this.listeLeistungen = this.daten.listeLeistungen;
      });
   
  }
  onSubmit() {
    const email = 'Migjomatic@gmail.com';
    const subject = 'Kundenanfrage';
    const services = this.customerForm.get('services')?.value?.map((service:any) => service.Leistung)?.join('\n- ');

    const comboTicket = this.customerForm.get('comboTicket')?.value;
    const date = this.customerForm.get('date')?.value;
    const time = this.customerForm.get('time')?.value;
    const noServicesMessage = 'Keine Leistungen dazugebucht.';
    const servicesList = services ? `- ${services}` : noServicesMessage;
    const body = `Guten Tag, ich bitte um ein Angebot für folgende Dienstleistungen: 
      ${servicesList} ${comboTicket ? '- Kombiticket: ' + comboTicket.Kombiticket : ''} ${date ? '- Wunschdatum: ' + date : ''} ${time ? '- Wunschzeit: ' + time : ''}
      Ich würde mich über eine schnelle Rückmeldung freuen.
    
      Mit freundlichen Grüßen,
      ${this.customerForm.get('firstName')?.value ?? ''} ${this.customerForm.get('lastName')?.value ?? ''}`;
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

  
  
  
  
  
  test(){
    console.log(this.customerForm);
  }
   }
  
 



