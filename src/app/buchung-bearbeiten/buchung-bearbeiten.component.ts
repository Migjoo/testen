import {OnInit } from '@angular/core';

  import { HttpClient } from '@angular/common/http';
  import {AfterViewInit, Component, ViewChild} from '@angular/core';
  import {MatPaginator} from '@angular/material/paginator';
  import {MatSort} from '@angular/material/sort';
  import {MatTableDataSource} from '@angular/material/table';
  import {MatFormFieldModule} from '@angular/material/form-field';
  
  
  export interface UserData {
    datum: string;
    id: string;
    name: string;
    progress: string;
    fruit: string;
  }
  
  /** Constants used to fill up our data base. */
  const FRUITS: string[] = [
    '800,00 €',
    '945,00 €',
    '350,00 €',
    '450,00 €',
    '600,00 €',
    '680,00 €',
    '330,00 €',
    '289,00 €',
  ];
  const NAMES: string[] = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth',
  ];
  
  /**
   * @title Data table with sorting, pagination, and filtering.
   */
   @Component({
    selector: 'app-buchung-bearbeiten',
    templateUrl: './buchung-bearbeiten.component.html',
    styleUrls: ['./buchung-bearbeiten.component.scss']
  })
  export class BuchungBearbeitenComponent implements AfterViewInit {
    displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
    dataSource: MatTableDataSource<UserData>;
  
    @ViewChild(MatPaginator)
     paginator!: MatPaginator;
    @ViewChild(MatSort)
     sort!: MatSort;
  
    constructor() {
      // Create 100 users
      const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
  
      // Assign the data to the data source for the table to render
      this.dataSource = new MatTableDataSource(users);
    }
      addData(): void {
    
  }

  removeData(): void {
    
  }
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }
  function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}
  
  /** Builds and returns a new User. */
  function createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
  
    return {
      datum: getRandomDate().toISOString(),
      id: (Math.round((Math.random() * (999999 - 10000) + 10000))).toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };

    
  }
