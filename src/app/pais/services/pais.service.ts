import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {


  private apiUrl: string = 'https://restcountries.com/v2'

  constructor(private http: HttpClient) { }


  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url)
      // .pipe(
      //   // Este metodo captura el error y en en lugar de el pasa un ovservable vacio []
      //   // o lo que se quiera poner dentro del []
      //   // funciona como alternativa a (err) => { this.hayError=true; });
      //   catchError(err => of([]))
      // );

  }



}
