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

liste : Rechnung [];
p=1;
listeMitFilter: Rechnung[]=[];

  constructor(public daten: DatenbankService) { 
    this.liste= [new Rechnung()];
  }
  filterMitNachname(){
    let test = this.filterNachname.nativeElement.value;
    let zwischenspeicher: Rechnung[] = [];
    for(let i of this.liste) {
      if(i.nachname == test) {
        zwischenspeicher.push(i);
      }
    }
    this.listeMitFilter = zwischenspeicher;
  }

  ngOnInit(): void {
    this.liste = this.daten.getRechnungen();
    this.listeMitFilter= this.liste;
  
  }
setRechnungen(){
  this.liste.push(new Rechnung());
  this.daten.setListeRechnungen(this.liste);
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
      if(i.Rechnungsnummer == test) {
        zwischenspeicher.push(i);
      }
    }
    this.listeMitFilter = zwischenspeicher;
  }
 
}
