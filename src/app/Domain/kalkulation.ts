import { Rechnung } from "./rechnung";

export class Kalkulation {
    ID: string;
    rechnung: Rechnung;
    Leistung1?: string;
    EKLeistung1?: number;
    Leistung2?: string;
    EKLeistung2?: number;
    Leistung3?: string;
    EKLeistung3?: number;
    Leistung4?: string;
    EKLeistung4?: number;
    Leistung5?: string;
    EKLeistung5?: number;
    Leistung7?: string;
    EKLeistung7?: number;
    
    constructor(ID: string, rechnung: Rechnung, Leistung1?: string, EKLeistung1?: number, Leistung2?: string, EKLeistung2?: number, Leistung3?: string, EKLeistung3?: number, Leistung4?: string, EKLeistung4?: number, Leistung5?: string, EKLeistung5?: number, Leistung7?: string, EKLeistung7?: number) {
      this.ID = ID;
      this.rechnung = rechnung;
      this.Leistung1 = Leistung1;
      this.EKLeistung1 = EKLeistung1;
      this.Leistung2 = Leistung2;
      this.EKLeistung2 = EKLeistung2;
      this.Leistung3 = Leistung3;
      this.EKLeistung3 = EKLeistung3;
      this.Leistung4 = Leistung4;
      this.EKLeistung4 = EKLeistung4;
      this.Leistung5 = Leistung5;
      this.EKLeistung5 = EKLeistung5;
      this.Leistung7 = Leistung7;
      this.EKLeistung7 = EKLeistung7;
    }
  }
  