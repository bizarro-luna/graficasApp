import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map,delay}  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http:HttpClient) { }



  getUsuariosRedes(){
    return  this.http.get('http://localhost:3000/grafica');
  }


  getUsuariosRedesSociales(){
    return this.getUsuariosRedes()
    .pipe(
      delay(1500),
      map( data => {
        const labels=Object.keys(data);
        const valores=Object.values(data);
        return {labels,valores};       
      })
    );

  }


}
