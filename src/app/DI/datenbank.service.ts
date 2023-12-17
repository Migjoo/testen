import { Injectable } from '@angular/core';
import { Buchungen } from '../Domain/buchungen';
import { Rechnung } from '../Domain/rechnung';
import { HttpClient } from '@angular/common/http';
import { Kombiticket } from '../Domain/kombiticket';
import { Leistung } from '../Domain/leistung';
import { Bucher } from '../Domain/bucher';
import { Kalkulation } from '../Domain/kalkulation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatenbankService {
  listeKombitickets: Kombiticket[] = [];
  listeLeistungen: Leistung[] = [];
  listeBucher: Bucher[] = [];
  listeRechnungen: Rechnung[] = [];
  listeKalkulation: Kalkulation[] = [];
  listeBuchungen: Buchungen[] = [
    new Buchungen(),
    new Buchungen(),
    new Buchungen(),
    new Buchungen(),
    new Buchungen()
  ];

  public baseUrl = 'https://booking-matic.crondung.com/api';

  constructor(public http: HttpClient) { }

  getListeRechnungen(): Promise<Rechnung[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Rechnung[]>(`${this.baseUrl}/Rechnung`)
        .subscribe(response => {
          this.listeRechnungen = response;
          resolve(this.listeRechnungen);
        }, error => {
          reject("Fehler -> RechnungListe");
        });
    });
  }

  getListeKalkulation(): Promise<Kalkulation[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Kalkulation[]>(`${this.baseUrl}/Kalkulation`)
        .subscribe(response => {
          this.listeKalkulation = response;
          resolve(this.listeKalkulation);
        }, error => {
          reject("Fehler -> KalkulationListe");
        });
    });
  }

  rechnungErledigt(id: string, erledigt: boolean): Promise<any> {
    const url = `${this.baseUrl}/rechnung/${id}`;
    const body = { erledigt: erledigt };
    return new Promise((resolve, reject) => {
      this.http.put(url, body)
        .subscribe(response => {
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }

  rechnungUpdate(id: string, erledigt: any): Promise<any> {
    const url = `${this.baseUrl}/rechnung/${id}`;
    const body = erledigt;
    return new Promise((resolve, reject) => {
      this.http.put(url, body)
        .subscribe(response => {
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }

  rechnungPDF(id: string): Promise<any> {
    const url = `${this.baseUrl}/rechnung/${id}/pdf`;
    return new Promise((resolve, reject) => {
      this.http.get(url, {
        responseType: 'blob'
      })
        .subscribe(response => {
          console.log(response);
          resolve(response);
        }, error => {
          reject(error);
        });
    });
  }

  getBuchungen() {
    return this.listeBuchungen;
  }

  setListeBuchungen(liste: Buchungen[]) {
    this.listeBuchungen = [new Buchungen()];
    this.listeBuchungen = liste;
  }

  getListeKombiticket(): Promise<Kombiticket[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Kombiticket[]>(`${this.baseUrl}/kombiticket`)
        .subscribe(response => {
          console.log("!das");
          console.log(response);
          this.listeKombitickets = response;
          resolve(this.listeKombitickets);
        }, error => {
          reject("Fehler -> KombiticketListe");
        });
    });
  }

  getListeBucher(): Promise<Bucher[]> {
    return new Promise((resolve, reject) => {
      this.http.get<Bucher[]>(`${this.baseUrl}/bucher`)
        .subscribe(response => {
          this.listeBucher = response;
          resolve(this.listeBucher);
        }, error => {
          reject("Fehler -> BucherListe");
        });
    });
  }

  getListeLeistungen() {
    return new Promise((resolve, reject) => {
      this.http.get<Leistung[]>(`${this.baseUrl}/leistung`)
        .subscribe(response => {
          console.log("leistungen vorhanden");
          this.listeLeistungen = response;
          resolve(this.listeLeistungen);
        }, error => {
          reject("Fehler -> LeistungenListe");
        });
    });
  }

  erstelleBuchung(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/buchung`, data);
  }

  eMailKunde(id: string) {
    this.http.get(`${this.baseUrl}/mail/kunde/rechnung/${id}`).subscribe();
  }

  emailLeistungstraeger(rechnungsId: string, leistungsId: string) {
    this.http.get(`${this.baseUrl}/mail/ltt/${leistungsId}/rechnung/${rechnungsId}`).subscribe();
  }
}
