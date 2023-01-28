export class Rechnung {
    vorname: string;
    nachname: string;
    adresse: string;
    plzUndWohnort: string;
    bearbeiter: string; 
    zahlungsziel: Date;
    Rechnungsnummer: string; 
    Reisetermin: Date;
    Rechnungsdatum: Date;
    Reiseziel: string; 
    Personenzahl: number;
    gesamt: number;
    rest: number; 

    constructor(vorname:string ="Vorname XY",       
    nachname: string = "Nachname XY",
    adresse: string = "Adresse XY",
    plzUndWohnort: string = "PLZ und Wohnort XY",
    bearbeiter: string = "Bearbeiter XY",
    zahlungsziel: Date = new Date(),
    Rechnungsnummer: string = "Rechnungsnummer XY",
    Reisetermin: Date = new Date(),
    Rechnungsdatum: Date = new Date(),
    Reiseziel: string = "Reiseziel XY",
    Personenzahl: number = 0,
    gesamt: number = 0,
    rest: number = 0)
    {
        this.vorname = vorname;
        this.nachname = nachname;
        this.adresse = adresse;
        this.plzUndWohnort = plzUndWohnort;
        this.bearbeiter = bearbeiter;
        this.zahlungsziel = zahlungsziel;
        this.Rechnungsnummer = Rechnungsnummer;
        this.Reisetermin = Reisetermin;
        this.Rechnungsdatum = Rechnungsdatum;
        this.Reiseziel = Reiseziel;
        this.Personenzahl = Personenzahl;
        this.gesamt = gesamt;
        this.rest = rest;

    }


    
}
