import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  hayError: boolean = false;
  paises: Country[] = [];
  termino: string = '';

  constructor(private paisService: PaisService) { }
  

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(termino)
      .subscribe((resp: Country[]) => {
        
        console.log(resp);
        this.paises = resp;

      }, (err) => {

        this.hayError=true;
        this.paises = [];  //al recibir un error limpiamos los paises para que no se muestren

      });
    }
}

