import { Component, ViewChild, ElementRef, AfterViewInit , OnInit} from '@angular/core';
import { IButtonGroupEventArgs } from 'igniteui-angular';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DatenbankService } from '../DI/datenbank.service';
import { Kombiticket } from '../Domain/kombiticket';
import { Bucher } from '../Domain/bucher';

interface kombi {
  id: string;
  name: string;
}
interface Food {
  value: string;
  viewValue: string;
}
interface Zahlung {
  value: string;
  viewValue: string;
}
interface buc{
  id: string;
  name: string;
}
@Component({
  selector: 'app-neue-buchung',
  templateUrl: './neue-buchung.component.html',
  styleUrls: ['./neue-buchung.component.scss'],
})
export class NeueBuchungComponent   implements OnInit{
  auswahlBucher="";
  sender:boolean=false;
  @ViewChild('nachname') nachname!: ElementRef;
  @ViewChild('vorname') vorname!: ElementRef;
  @ViewChild('nn') nn!: ElementRef;
  @ViewChild('vn') vn!: ElementRef;
  @ViewChild('straße') straße!: ElementRef;
  @ViewChild('nummer') nummer!: ElementRef;
  @ViewChild('plz') plz!: ElementRef;
  @ViewChild('ort') ort!: ElementRef;
  @ViewChild('mail') mail!: ElementRef;
  @ViewChild('tel') tel!: ElementRef;
  @ViewChild('stn') stn!: ElementRef;
  @ViewChild('add') add!: ElementRef;
  @ViewChild('te') te!: ElementRef;
  @ViewChild('em') em!: ElementRef;
  @ViewChild('da') da!: ElementRef;
  @ViewChild('uhrz') uhrz!: ElementRef;
  @ViewChild('uhr') uhr!: ElementRef;
  @ViewChild('datum') datum!: ElementRef;
  @ViewChild('anzahl') anzahl!: ElementRef;
  @ViewChild('peanzahl') peanzahl!: ElementRef;
  @ViewChild('auswahlT') auswahlT!: ElementRef;

  constructor(private http: HttpClient, public daten: DatenbankService) {}
  
  
  ngOnInit(): void {
    this.daten.getListeKombiticket().then(() => {
      this.listeKombiticket = this.daten.listeKombitickets;
      for(let i of this.listeKombiticket){
        this.kombitickets.push({id: i.ID, name: i.Kombiticket});
      }
      });
      this.daten.getListeBucher().then(() => {
        this.listeBucher = this.daten.listeBucher;
        for(let i of this.listeBucher){
          this.bucher.push({id: i.ID, name: i.Bucher});
        }
      });
  }

  public kombitickets: kombi[]= [];
  public bucher : buc[]=[];
  public listeBucher: Bucher[]=[];


  auswahlZahlungsart:string ="";
  public auswahl: string = '';
  public listeKombiticket: Kombiticket[]=[];
  public auswahlKombiticket: string= "";

auswahlTicket="";
  foods: Food[] = [
    { value: 'Reservierung', viewValue: 'Reservierung' },
    { value: 'Gutschein', viewValue: 'Gutschein' },
    { value: 'Angebot', viewValue: 'Angebot' },
  ];
  zahlungen: Zahlung[] = [
    { value: 'Anzahlung', viewValue: 'Anzahlung' },
    { value: 'Restzahlung', viewValue: 'Restzahlung' },
    { value: 'Bar vor Ort', viewValue: 'Bar vor Ort' },
    { value: 'Überweisung', viewValue: 'Überweisung' },
  ];

  public linear = false;

  public user: any = {
    fullName: '',
    email: '',
    city: '',
    street: '',
    city2: '',
    street2: '',
    payment: '',
  };
  public paymentTypes: string[] = [
    'PayPal (n@mail.com; 18/02/2021)',
    'Visa (**** **** **** 1234; 12/23)',
    'MasterCard (**** **** **** 5678; 12/24)',
  ];
  public modes: any[] = [
    {
      label: 'Linear',
      linear: true,
      selected: this.linear === true,
      togglable: true,
    },
    {
      label: 'Non Linear',
      linear: false,
      selected: this.linear === false,
      togglable: true,
    },
  ];
  public toggleModes(event: IButtonGroupEventArgs): void {
    this.linear = this.modes[event.index].linear;
  }

  uebersicht(): void {
    this.vn.nativeElement.innerHTML = this.vorname.nativeElement.value;
    this.nn.nativeElement.innerHTML = this.nachname.nativeElement.value;
    this.da.nativeElement.innerHTML = this.datum.nativeElement.value + ' ' + this.uhr.nativeElement.value;;
    this.stn.nativeElement.innerHTML = this.straße.nativeElement.value + ' ' + this.nummer.nativeElement.value;
    this.add.nativeElement.innerHTML = this.plz.nativeElement.value + ' ' + this.ort.nativeElement.value;
    this.te.nativeElement.innerHTML = this.tel.nativeElement.value;
    this.em.nativeElement.innerHTML = this.mail.nativeElement.value;
    this.peanzahl.nativeElement.innerHTML = this.anzahl.nativeElement.value;
  }





  emailSenden(): void {
    let email= this.em.nativeElement.innerHTML;
    let vorname= this.vn.nativeElement.innerHTML;
    let nachname= this.nn.nativeElement.innerHTML;
    let strasse = this.straße.nativeElement.value;
    let datum= this.da.nativeElement.innerHTML;
    let tel= this.te.nativeElement.innerHTML;  
    let nummer= this.nummer.nativeElement.value;
    let plz= this.plz.nativeElement.value;
    let ort= this.ort.nativeElement.value;
    let anzahl= this.peanzahl.nativeElement.innerHTML;
    
    const data = {
      "vorname": vorname,
      "nachname": nachname,
      "strasse": strasse,
      "hausnummer": nummer,
      "plz": plz,
      "stadt": ort,
      "telefon": tel,
      "email": email,
      "ticket": {
          "kombiticketID": this.auswahlKombiticket,
          "datum": datum,
          "personsNumber": anzahl,
          "ticketArt": this.auswahlTicket,
          "zahlungsart": this.auswahlZahlungsart
      },
      "anbieter": "Siweris",
      "bearbeiter": "Julian Gegner",
      "privatKunde": "true",
      "anzahlung": "false" 
  };
   this.daten.sendeMail(data);
  }
offen(){
  this.sender= true;
  this.daten.getListeKombiticket().then(() => {
    this.listeKombiticket = this.daten.listeKombitickets;
   
    });
}



  title = 'gustavo';
}
