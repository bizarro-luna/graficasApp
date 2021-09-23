import { Component, OnInit } from '@angular/core';


interface MenuItem{
  texto:string;
  ruta:string;
}



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [

    `
    li{
      cursor:pointer;
    }

    `
  ]
})
export class MenuComponent  {

  constructor() { }


  menu:MenuItem[]=[
    {ruta:'./graficas/barra',texto:'Barras'},
    {ruta:'./graficas/barra-doble',texto:'Barras Doble'},
    {ruta:'./graficas/dona',texto:'Grafica Dona'},
    {ruta:'./graficas/dona-http',texto:'Dona HTTP'}
  ];

  

}
