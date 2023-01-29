import { Component, OnInit } from '@angular/core';
import { DatenbankService } from '../DI/datenbank.service';

@Component({
  selector: 'app-rechnungssuchen',
  templateUrl: './rechnungssuchen.component.html',
  styleUrls: ['./rechnungssuchen.component.scss']
})
export class RechnungssuchenComponent implements OnInit {

  constructor(public daten: DatenbankService) { }

  ngOnInit(): void {
  } 
  peter(){
    this.daten.getListeBucher();
  }

}
