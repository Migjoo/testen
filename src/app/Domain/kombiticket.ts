export class Kombiticket {
    ID: string;
    Kombiticket: string;
    VK: string;
    Leistung1: string;
    Leistung2: string;
    Leistung3: string;
    Leistung4: string;
    Leistung5: string;
    Leistung7: string;
    constructor(ID: string = "Karl", Kombiticket: string = "Karl", VK: string = "Karl", Leistung1: string = "Karl", Leistung2: string = "Karl", Leistung3: string = "Karl", Leistung4: string = "Karl", Leistung5: string = "Karl", Leistung7: string = "Karl") {
        this.ID = ID;
        this.Kombiticket = Kombiticket;
        this.VK = VK;
        this.Leistung1 = Leistung1;
        this.Leistung2 = Leistung2;
        this.Leistung3 = Leistung3;
        this.Leistung4 = Leistung4;
        this.Leistung5 = Leistung5;
        this.Leistung7 = Leistung7;
    }
}
