import { Injectable } from '@angular/core';
import { Buchungen } from '../Domain/buchungen';
import { Rechnung } from '../Domain/rechnung';

@Injectable({
  providedIn: 'root'
})
export class DatenbankService {

  listeBuchungen: Buchungen[] = [
    new Buchungen(),
    new Buchungen(),
    new Buchungen(),
    new Buchungen(),
    new Buchungen()
  ];
  listeRechnungen: Rechnung[]=
  [new Rechnung(), new Rechnung(), new Rechnung];

  constructor() { }
  getBuchungen(){
    return this.listeBuchungen;
  }
  setListeBuchungen(liste: Buchungen[]){
    this.listeBuchungen= [new Buchungen()];
  this.listeBuchungen = liste;
  }
  getRechnungen(){
    return this.listeRechnungen;
  }
  setListeRechnungen(liste: Rechnung[]){
  this.listeRechnungen= liste;
  }
}
