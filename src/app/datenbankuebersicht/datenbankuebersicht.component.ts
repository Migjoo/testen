import { Component, OnInit } from '@angular/core';
import { DatenbankService } from '../DI/datenbank.service';
import { Leistung } from '../Domain/leistung';
import { Bucher } from '../Domain/bucher';

@Component({
  selector: 'app-datenbankuebersicht',
  templateUrl: './datenbankuebersicht.component.html',
  styleUrls: ['./datenbankuebersicht.component.scss']
})
export class DatenbankuebersichtComponent implements OnInit {
  public listeLeistungen: Leistung[]=[];
  public listeBucher: Bucher[]=[];

  constructor(public daten: DatenbankService) { }
bucher = false;
leistung= false;
  ngOnInit(): void {
    this.daten.getListeBucher().then(() => {
      this.listeBucher = this.daten.listeBucher;
      console.log(this.listeBucher);
    });
    this.daten.getListeLeistungen().then(() => {
      this.listeLeistungen = this.daten.listeLeistungen;
    console.log(this.listeLeistungen)
    });

  }

}
