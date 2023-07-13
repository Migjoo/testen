import { Component, OnInit } from '@angular/core';
import { DatenbankService } from '../DI/datenbank.service';
import { Rechnung } from '../Domain/rechnung';
import { Kalkulation } from '../Domain/kalkulation';

@Component({
  selector: 'app-kalkulation',
  templateUrl: './kalkulation.component.html',
  styleUrls: ['./kalkulation.component.scss']
})
export class KalkulationComponent implements OnInit {
  p=1;
  constructor(public daten: DatenbankService) { }
  listeKalkulation: Kalkulation[]=[];
    ngOnInit(): void {
      this.daten.getListeKalkulation().then(() => {
        this.listeKalkulation = this.daten.listeKalkulation;
    
      });
  }
  nextPage(){
    this.p++;
    }
    previousPage(){
    this.p--;
    }
    get pageCount() {
      return Math.ceil(this.listeKalkulation.length / 2);
    }
}
