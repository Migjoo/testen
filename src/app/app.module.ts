import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KopfComponent } from './kopf/kopf.component';
import { FusszeileComponent } from './fusszeile/fusszeile.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { NeueBuchungComponent } from './neue-buchung/neue-buchung.component';
import { BuchungsuebersichtComponent } from './buchungsuebersicht/buchungsuebersicht.component';
import { BuchungfindenComponent } from './buchungfinden/buchungfinden.component';
import { BuchungBearbeitenComponent } from './buchung-bearbeiten/buchung-bearbeiten.component';
import { BuchungStornierenComponent } from './buchung-stornieren/buchung-stornieren.component';
import { HttpClientModule } from '@angular/common/http';

const meineRouten: Routes = [
{path: "neueBuchung", component: NeueBuchungComponent},// Slashes setzt der automatisch
{path: "finden", component: BuchungfindenComponent},
{path: "uebersicht", component: BuchungsuebersichtComponent},
{path: "bearbeiten", component: BuchungBearbeitenComponent},
{path: "stornieren", component: BuchungStornierenComponent},
{path: "", component: StartseiteComponent},
];//Array von Routen

@NgModule({
  declarations: [
    AppComponent,
    KopfComponent,
    FusszeileComponent,
    StartseiteComponent,
    NeueBuchungComponent,
    BuchungsuebersichtComponent,
    BuchungfindenComponent,
    BuchungBearbeitenComponent,
    BuchungStornierenComponent
  ],
  imports: [
    RouterModule.forRoot(meineRouten),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
