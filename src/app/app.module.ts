import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KopfComponent } from './kopf/kopf.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { NeueBuchungComponent } from './neue-buchung/neue-buchung.component';
import { BuchungsuebersichtComponent } from './buchungsuebersicht/buchungsuebersicht.component';
import { BuchungfindenComponent } from './buchungfinden/buchungfinden.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxStepperModule, IgxButtonModule, IgxButtonGroupModule } from "igniteui-angular";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RechnungenComponent } from './rechnungen/rechnungen.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { KalkulationComponent } from './kalkulation/kalkulation.component';
import { RechnungssuchenComponent } from './rechnungssuchen/rechnungssuchen.component';
import { DatenbankuebersichtComponent } from './datenbankuebersicht/datenbankuebersicht.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NonAuthGuard } from './non-auth.guard';


const meineRouten: Routes = [
  { path: "neueBuchung", component: NeueBuchungComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [NonAuthGuard] }, // Verwenden Sie NonAuthGuard für die Login-Seite
  { path: "finden", component: BuchungfindenComponent, canActivate: [AuthGuard] },
  { path: "uebersicht", component: BuchungsuebersichtComponent, canActivate: [AuthGuard] },
  { path: "", component: StartseiteComponent, canActivate: [AuthGuard] },
  { path: "startseite", component: StartseiteComponent, canActivate: [AuthGuard] },
  { path: "rg", component: RechnungenComponent, canActivate: [AuthGuard] },
  { path: "kalk", component: KalkulationComponent, canActivate: [AuthGuard] },
  { path: "daten", component: DatenbankuebersichtComponent, canActivate: [AuthGuard] },
];
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    KopfComponent,
    StartseiteComponent,
    NeueBuchungComponent,
    BuchungsuebersichtComponent,
    BuchungfindenComponent,
    RechnungenComponent,
    KalkulationComponent,
    RechnungssuchenComponent,
    DatenbankuebersichtComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(meineRouten),
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    MatTabsModule,
    MatTreeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatRippleModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    IgxStepperModule, IgxButtonModule, IgxButtonGroupModule ,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
