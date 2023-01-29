import { Injectable } from '@angular/core';
import { Buchungen } from '../Domain/buchungen';
import { Rechnung } from '../Domain/rechnung';
import { HttpClient } from '@angular/common/http';
import { Kombiticket } from '../Domain/kombiticket';

@Injectable({
  providedIn: 'root'
})
export class DatenbankService {
  listeKombitickets: Kombiticket[]=[];

  listeBuchungen: Buchungen[] = [
    new Buchungen(),
    new Buchungen(),
    new Buchungen(),
    new Buchungen(),
    new Buchungen()
  ];
  listeRechnungen: Rechnung[]=
  [new Rechnung(), new Rechnung(), new Rechnung];

  constructor(public http: HttpClient) { }
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
  getListeKombiticket(): Promise<Kombiticket[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Kombiticket[]>('http://localhost:3000/kombiticket', {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .subscribe(response => {
        this.listeKombitickets = response;
        resolve(this.listeKombitickets);
      }, error => {
        reject("Klappt nicht -> KombiticketListe");
      });
    });
  }
  

}
