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
  listeRechnungen: Rechnung[]=[];

  listeBuchungen: Buchungen[] = [
    new Buchungen(),
    new Buchungen(),
    new Buchungen(),
    new Buchungen(),
    new Buchungen()
  ];


  constructor(public http: HttpClient) { }

getListeRechnungen(): Promise<Rechnung[]> {
  console.log("start");
  return new Promise((resolve, reject) => {
    this.http.get<Rechnung[]>('http://localhost:3000/Rechnung', {
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
    .subscribe(response => {
      console.log("Rechnung");
      console.log(response);
      this.listeRechnungen=response;
      console.log(this.listeRechnungen);
    resolve(this.listeRechnungen);
    }, error => {
      reject("Klappt nicht -> KombiticketListe");
    });
  });

}

  getBuchungen(){
    return this.listeBuchungen;
  }
  setListeBuchungen(liste: Buchungen[]){
    this.listeBuchungen= [new Buchungen()];
  this.listeBuchungen = liste;
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
