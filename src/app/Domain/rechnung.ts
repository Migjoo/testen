import { Bucher } from "./bucher";
import { Kombiticket } from "./kombiticket";
import { Leistung } from "./leistung";



export class Rechnung {
    constructor(
        public datum: Date = new Date(),
        public bearbeiter: string = "",
        public kunde: string = "",
        public anschriftKunde: string = "",
        public anbieter: Bucher,
        public erstelltAm: Date = new Date(),
        public zahlungsziel: Date = new Date(),
        public anzahlung: number = 0,
        public kombiticket: Kombiticket,
        public leistungen: Leistung[] = [],
        public personenAnzahl: number = 0,
        public restzahlung: number = 0,
        public ek: number = 0,
        public gewinn: number = 0,
        public mwst: number = 19,
        public nettoGewinn: number = 0,
        public ID: string = "",
        public rechnungsnummer: string = "",
        public erledigt: boolean = false,
        public ticketArt: string = "Reservierung",
    ) { }
}