import { Component, OnInit } from '@angular/core';
import { DatenbankService } from '../DI/datenbank.service';
import { Rechnung } from '../Domain/rechnung';

@Component({
  selector: 'app-rechnungen',
  templateUrl: './rechnungen.component.html',
  styleUrls: ['./rechnungen.component.scss']
})
export class RechnungenComponent implements OnInit {
liste : Rechnung [];
p=1;
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
}
