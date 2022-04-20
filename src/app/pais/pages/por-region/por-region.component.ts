import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['africa', 'america', 'asia', 'europe', 'oceania' ];
  regionActiva: string = '';

  constructor() { }

  activarRegion( region: string){
    this.regionActiva = region;
  }

  ngOnInit(): void {
  }

}
