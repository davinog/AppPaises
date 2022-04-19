import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `
    .table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
      background-color: #d7d8d9;
    }

    .small-flag{
      width:50px;
    }

  `
  ]
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Country[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}