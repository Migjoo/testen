import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';


export interface UserData {
  datum: string;
  name: string;
  bucher: string;
  personen: string;
  max: string;
  rest: string;
  web: string;
  js: string;
  md: string;
}

/** Constants used to fill up our data base. */
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
  selector: 'app-buchungsuebersicht',
  templateUrl: './buchungsuebersicht.component.html',
  styleUrls: ['./buchungsuebersicht.component.scss']
})
export class BuchungsuebersichtComponent implements AfterViewInit {
  displayedColumns: string[] = ['datum', 'name','bucher', 'personen', 'max', 'rest', 'web',  'js',  'md', ];
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
    name: name,
    bucher: "",
    personen: "",
    max: "",
    rest: "",
    web: "",
    js: "",
    md: "",
  };
}


