
import { Component } from '@angular/core';
import { IButtonGroupEventArgs } from 'igniteui-angular';
import {FormControl} from '@angular/forms';

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}
interface Food {
  value: string;
  viewValue: string;
}
interface Zahlung {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-neue-buchung',
  templateUrl: './neue-buchung.component.html',
  styleUrls: ['./neue-buchung.component.scss']
})
export class NeueBuchungComponent{
  pokemonControl = new FormControl('');



  pokemonGroups: PokemonGroup[] = [
    {
      name: 'kombitickets',
      pokemon: [
        {value:  "Kombiticket Treis", viewValue:  "Kombiticket Treis"},
        {value: "Kombiticket Klotten", viewValue: "Kombiticket Klotten"},
        {value: "Kombiticket Ellenz", viewValue: "Kombiticket Ellenz"},
        {value: "Kombiticket Bullay", viewValue:  "Kombiticket Bullay"},
        {value: "Kombiticket Lieser", viewValue: "Kombiticket Lieser"},
        {value: "Kombiticket Kröv", viewValue: "Kombiticket Kröv"},
        {value: "Kombiticket Enkirch", viewValue: "Kombiticket Enkirch"},
        {value: "Kombiticket Koblenz-Winningen Fries", viewValue: "Kombiticket Koblenz-Winningen Fries"},
        {value: "Kombiticket Koblenz-Winningen Knebel", viewValue: "Kombiticket Koblenz-Winningen Knebel"},
      ],
    },
    {
      name: '"Mit dem Kanu"',
      pokemon: [
        {value: "Mit dem Kanu zum Winzer Cochem", viewValue: "Mit dem Kanu zum Winzer Cochem"},
        {value: "Mit dem Kanu zum Winzer Traben-Trarbach", viewValue: "Mit dem Kanu zum Winzer Traben-Trarbach"},
      ],
    },
    {
      name: 'Fahrrad-Picknick-Schifftour',
      pokemon: [
        {value: "Fahrrad-Picknick-Schifftour Cochem KD (Normale Räder)", viewValue: "Fahrrad-Picknick-Schifftour Cochem KD (Normale Räder)"},
        {value: "Fahrrad-Picknick-Schifftour Cochem KD (E-Bikes)", viewValue: "Fahrrad-Picknick-Schifftour Cochem KD (E-Bikes)"},
        {value: "Fahrrad-Picknick-Schifftour Cochem SW (Normale Räder)", viewValue: "Fahrrad-Picknick-Schifftour Cochem SW (Normale Räder)"},
        {value: "Fahrrad-Picknick-Schifftour Cochem SW (E-Bikes)", viewValue: "Fahrrad-Picknick-Schifftour Cochem SW (E-Bikes)"},
        {value: "Fahrrad-Picknick-Schifftour Trabe-Trarbach (E-Bikes)", viewValue: "Fahrrad-Picknick-Schifftour Trabe-Trarbach (E-Bikes)"},
        {value: "Fahrrad-Picknick-Schifftour Bernkastel-Kues (Normale Räder)", viewValue: "Fahrrad-Picknick-Schifftour Bernkastel-Kues (Normale Räder)"},
        {value: "Fahrrad-Picknick-Schifftour Bernkastel-Kues (E-Bikes)", viewValue: "Fahrrad-Picknick-Schifftour Bernkastel-Kues (E-Bikes)"}

      ],
    },
    {
      name: 'Wein-Tickets',
      pokemon: [
        {value: "Weinbergswanderung Klotten", viewValue: "Weinbergswanderung Klotten"},
        {value: "Weinbergswanderung Ernst", viewValue: "Weinbergswanderung Ernst"},
        {value: "Weinerlebniswanderung Bruttig", viewValue: "Weinerlebniswanderung Bruttig"},
      ],
    },
    {
      name: 'Segway',
      pokemon: [
        {value: "Segway Tour Cochem", viewValue: "Segway Tour Cochem"},
        {value: "Segway Tour Klotten", viewValue: "Segway Tour Klotten"},
      ],
    },
    
  ]
  foods: Food[] = [
    {value: 'Reservierung', viewValue: 'Reservierung'},
    {value: 'Gutschein', viewValue: 'Gutschein'},
    {value: 'Angebot', viewValue: 'Angebot'},
  ];
  zahlungen: Zahlung[] = [
    {value: 'Anzahlung', viewValue: 'Anzahlung'},
    {value: 'Restzahlung', viewValue: 'Restzahlung'},
    {value: 'Bar vor Ort', viewValue: 'Bar vor Ort'},
    {value: 'Überweisung', viewValue: 'Überweisung'},
  ];;



  public linear = false;
 
  public user: any = {
      fullName: '',
      email: '',
      city: '',
      street: '',
      city2: '',
      street2: '',
      payment: ''
  };
  public paymentTypes: string[] = [
    'PayPal (n@mail.com; 18/02/2021)',
    'Visa (**** **** **** 1234; 12/23)',
    'MasterCard (**** **** **** 5678; 12/24)'
];
public modes: any[] = [
  {
      label: 'Linear', linear: true,
      selected: this.linear === true, togglable: true
  },
  {
      label: 'Non Linear', linear: false,
      selected: this.linear === false, togglable: true
  }
];
public toggleModes(event: IButtonGroupEventArgs): void {
this.linear = this.modes[event.index].linear;
}


title = 'gustavo';


}
