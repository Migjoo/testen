export class Leistungstraeger {
    private ID: string;
    private Leistungstraeger: string;
    private Anschrift: string;
    private PLZ: string;
    private Wohnort: string;
    private Tel_1: string;
    private Tel_2: string;
    private Mail: string;
    private Fax: string;
  
    constructor(
      ID: string,
      Leistungstraeger: string,
      Anschrift: string,
      PLZ: string,
      Wohnort: string,
      Tel_1: string,
      Tel_2: string,
      Mail: string,
      Fax: string
    ) {
      this.ID = ID;
      this.Leistungstraeger = Leistungstraeger;
      this.Anschrift = Anschrift;
      this.PLZ = PLZ;
      this.Wohnort = Wohnort;
      this.Tel_1 = Tel_1;
      this.Tel_2 = Tel_2;
      this.Mail = Mail;
      this.Fax = Fax;
    }
  }
  