
import { Component } from '@angular/core';
import { IButtonGroupEventArgs } from 'igniteui-angular';


@Component({
  selector: 'app-neue-buchung',
  templateUrl: './neue-buchung.component.html',
  styleUrls: ['./neue-buchung.component.scss']
})
export class NeueBuchungComponent{
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
