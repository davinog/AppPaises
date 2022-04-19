import { Component, } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
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
export class PorPaisComponent {

  termino: string = 'Spain';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar() {
    this.hayError=false;

    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe((resp: Country[]) => {
        
        console.log(resp);
        this.paises = resp;


      }, (err) => {

        this.hayError=true;
        //al recibir un error limpiamos los paises para que no se muestren
        this.paises = [];

      });


  }

}
