import { Component, OnInit } from '@angular/core';
import { DatenbankService } from '../DI/datenbank.service';

@Component({
  selector: 'app-datenbankuebersicht',
  templateUrl: './datenbankuebersicht.component.html',
  styleUrls: ['./datenbankuebersicht.component.scss']
})
export class DatenbankuebersichtComponent implements OnInit {

  constructor(public daten: DatenbankService) { }

  ngOnInit(): void {
    this.daten.getListeRechnungen();
  }

}
