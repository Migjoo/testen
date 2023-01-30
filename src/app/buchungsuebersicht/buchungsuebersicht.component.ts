import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, OnInit, ViewChild,  ElementRef} from '@angular/core';
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
  p=1;
  @ViewChild("datumF") filterVariable!: ElementRef;
  public liste: Buchungen[] =  [new Buchungen(), new Buchungen()];
  public listeAnzeige: Buchungen[]=[];

  constructor(public daten: DatenbankService){


  }
  ngOnInit(): void {
    this.liste= this.daten.listeBuchungen;
    this.listeAnzeige=this.liste;

  }
  setListe(){
    this.daten.setListeBuchungen(JSON.parse(JSON.stringify(this.liste)));
   }
   filterDatum(){
    let test = this.filterVariable.nativeElement.value;
    let zwischenspeicher: Buchungen[] = [];
    for(let i of this.liste) {
      
      if(i.tag.includes(test) || i.nameAktion.includes(test) ) {
        zwischenspeicher.push(i);
      }
    }
    this.listeAnzeige = zwischenspeicher;
   }
   nextPage(){
    this.p++;
    }
    previousPage(){
    this.p--;
    }
   }
  
 



