import { Leistungstraeger } from "./leistungstraeger";
export class Leistung {
    public ID: string;
    public Leistung: string;
    public Leistungsinhalt: string;
    public ID_Leistungstraeger: Leistungstraeger;
    public Uhrzeit_1_Hin: string;
    public Uhrzeit_1_Rueck: string;
    public Uhrzeit_2_Hin: string;
    public Uhrzeit_2_Rueck: string;
    public Preis: number;
    public Versteuerung: number;
    public EK_Preis: number;
    public EK_Preis_letzten_Jahre: number;
  
    constructor(
      ID: string,
      Leistung: string,
      Leistungsinhalt: string,
      ID_Leistungstraeger: Leistungstraeger,
      Uhrzeit_1_Hin: string,
      Uhrzeit_1_Rueck: string,
      Uhrzeit_2_Hin: string,
      Uhrzeit_2_Rueck: string,
      Preis: number,
      Versteuerung: number,
      EK_Preis: number,
      EK_Preis_letzten_Jahre: number
    ) {
      this.ID = ID;
      this.Leistung = Leistung;
      this.Leistungsinhalt = Leistungsinhalt;
      this.ID_Leistungstraeger = ID_Leistungstraeger;
      this.Uhrzeit_1_Hin = Uhrzeit_1_Hin;
      this.Uhrzeit_1_Rueck = Uhrzeit_1_Rueck;
      this.Uhrzeit_2_Hin = Uhrzeit_2_Hin;
      this.Uhrzeit_2_Rueck = Uhrzeit_2_Rueck;
      this.Preis = Preis;
      this.Versteuerung = Versteuerung;
      this.EK_Preis = EK_Preis;
      this.EK_Preis_letzten_Jahre = EK_Preis_letzten_Jahre;
    }
  }
  