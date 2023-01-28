import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Buchungen } from '../Domain/buchungen';
import { DatenbankService } from '../DI/datenbank.service';



 @Component({
  selector: 'app-buchungsuebersicht',
  templateUrl: './buchungsuebersicht.component.html',
  styleUrls: ['./buchungsuebersicht.component.scss']
})
export class BuchungsuebersichtComponent  implements OnInit {
  public liste: Buchungen[] =  [new Buchungen(), new Buchungen()];

  constructor(public daten: DatenbankService){


  }
  ngOnInit(): void {
    this.liste= this.daten.listeBuchungen;

  }
  setListe(){

    this.daten.setListeBuchungen(JSON.parse(JSON.stringify(this.liste)));
   }

 
}


