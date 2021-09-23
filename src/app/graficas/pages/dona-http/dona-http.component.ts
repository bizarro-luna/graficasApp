import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {



  // Doughnut
  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales','Others'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100,150]
    //[50, 150, 120],
    //[250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';



  constructor(private graficasService:GraficasService) { }

  ngOnInit(): void {
    
    /*this.graficasService.getUsuariosRedes()
    .subscribe( data=> {
        console.log(data);
        const labels=Object.keys(data);
        const valores=Object.values(data);
        this.doughnutChartLabels=labels;
        this.doughnutChartData.push(valores);
    });*/

    this.graficasService.getUsuariosRedesSociales()
    .subscribe( ({labels,valores}) => {
      this.doughnutChartLabels=labels;
      this.doughnutChartData.push(valores);
    });
  }

  colors:Color[]=[
    {
      backgroundColor:[
        '#F52363','#0C0187','#099E80','#95D902','#CF7F02'
      ]
    }
  ]

}
