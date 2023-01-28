import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatenbankService } from '../DI/datenbank.service';
import { Rechnung } from '../Domain/rechnung';

@Component({
  selector: 'app-rechnungen',
  templateUrl: './rechnungen.component.html',
  styleUrls: ['./rechnungen.component.scss']
})
export class RechnungenComponent implements OnInit {
  @ViewChild("filter") filterVariable!: ElementRef; 

liste : Rechnung [];
p=1;
zwischenspeicher: string= ""; 

  constructor(public daten: DatenbankService) { 
    this.liste= [new Rechnung()];
  }

  ngOnInit(): void {
    this.liste = this.daten.getRechnungen();
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
  filtern(){
    let test =  this.filterVariable.nativeElement.value;
    let zwischenspeicher: Rechnung[];
    for(let i of this.liste){
      if(i.Rechnungsnummer == test){
        
      }
    }
  }
}
