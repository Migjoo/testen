export class Leistungen {
    UhrzeitVon: Date;
    UhrzeitBis: Date;
    Preis: number;
    MwSt: number;
    EkPreis: number;
    constructor(UhrzeitVon = new Date(), UhrzeitBis = new Date(), Preis = 0, MwSt = 0, EkPreis = 0) {
        this.UhrzeitVon = UhrzeitVon;
        this.UhrzeitBis = UhrzeitBis;
        this.Preis = Preis;
        this.MwSt = MwSt;
        this.EkPreis = EkPreis;
    }
}