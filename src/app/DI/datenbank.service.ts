import { Injectable } from '@angular/core';
import { Buchungen } from '../Domain/buchungen';
import { Rechnung } from '../Domain/rechnung';
import { HttpClient } from '@angular/common/http';
import { Kombiticket } from '../Domain/kombiticket';
import { Leistung } from '../Domain/leistung';
import { Bucher } from '../Domain/bucher';

@Injectable({
  providedIn: 'root'
})
export class DatenbankService {
  listeKombitickets: Kombiticket[]=[];
  listeLeistungen: Leistung[]=[];
  listeBucher: Bucher[]=[];

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
        console.log("!das");
        console.log(response);
        this.listeKombitickets = response;
        resolve(this.listeKombitickets);
      }, error => {
        reject("Klappt nicht -> KombiticketListe");
      });
    });
  }

  getListeBucher(): Promise<Bucher[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Bucher[]>('http://localhost:3000/bucher', {
        headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .subscribe(response => {
        this.listeBucher = response;
        resolve(this.listeBucher);
      }, error => {
        reject("Klappt nicht -> BucherListe");
      });
    });
  }
  getListeLeistungen(){
    return new Promise((resolve, reject) => {
      this.http.get<Leistung[]>('http://localhost:3000/leistung', {
      headers: { 'Access-Control-Allow-Origin': '*' },
      })
      .subscribe(response => {
     this.listeLeistungen = response;
     resolve(this.listeLeistungen);
      }, error => {
      reject("Klappt nicht -> LeistungenListe");
      });
      });
  }
  
  sendeMail(data:any){
    this.http
    .post('http://localhost:3000/buchung', data, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
    .subscribe((response) => {
      console.log(response);
    });

  }
  

}
