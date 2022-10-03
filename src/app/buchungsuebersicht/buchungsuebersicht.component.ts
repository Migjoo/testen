import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buchungsuebersicht',
  templateUrl: './buchungsuebersicht.component.html',
  styleUrls: ['./buchungsuebersicht.component.scss']
})
export class BuchungsuebersichtComponent implements OnInit {
  private httpClient: HttpClient;

  constructor(http: HttpClient) {
    this.httpClient = http;
  }

  ngOnInit(): void {
  }
  test(): void{
  var joergen: Observable<String> =   this.httpClient.get('assets\\RoutinginAngular.txt', { responseType: 'text' });
  console.log(joergen.subscribe(data => console.log(data)));
}
}
