import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatenbankService } from '../DI/datenbank.service';
import { Rechnung } from '../Domain/rechnung';

@Component({
  selector: 'app-rechnungen',
  templateUrl: './rechnungen.component.html',
  styleUrls: ['./rechnungen.component.scss']
})
export class RechnungenComponent implements OnInit {
  @ViewChild("filterNr") filterVariable!: ElementRef;
  @ViewChild("filterNa") filterNachname!: ElementRef;

liste : Rechnung []=[];
p=1;
listeMitFilter: Rechnung[]=[];
sql ="";
statusOptions = [
  {value: 'Reservierung', viewValue: 'Reservierung'},
  {value: 'Gutschein', viewValue: 'Gutschein'},
  {value: 'Angebot', viewValue: 'Angebot'}
];


  constructor(public daten: DatenbankService) { 

  }


  ngOnInit(): void {
    this.daten.getListeRechnungen().then(() => {
      this.liste = this.daten.listeRechnungen;
      this.listeMitFilter= this.liste;
    });
  console.log(this.liste + "huist"+ this.listeMitFilter);
  
  }
setRechnungen(){
 // this.liste.push(new Rechnung());
//  this.daten.setListeRechnungen(this.liste);
}
nextPage(){
  this.p++;
  }
  previousPage(){
  this.p--;
  }
  filtern() {
    let test = this.filterVariable.nativeElement.value;
    let zwischenspeicher: Rechnung[] = [];
  for(let i of this.liste) {
    if(i.ID.includes(test) || i.kunde.includes(test)) {
     zwischenspeicher.push(i);
   }
  }
 this.listeMitFilter = zwischenspeicher;
  }


  get pageCount() {
    return Math.ceil(this.listeMitFilter.length / 10);
  }
  bearbeite(i: Rechnung){
    console.log(i);
   this.daten.rechnungUpdate(i.ID, i);
  }
  erledigt(i: Rechnung){
  console.log(!i.erledigt);
    this.daten.rechnungErledigt(i.ID, !i.erledigt);
  }




  pdf(i: Rechnung){
    this.daten.rechnungPDF(i.ID).then((res)=>{
      console.log(res);
      window.open(res, '_blank');
    });
  }
}
