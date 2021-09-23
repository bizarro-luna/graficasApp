import { Component, OnInit } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {


   // Doughnut
   public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','Others'];
   public doughnutChartData: MultiDataSet = [
     [350, 450, 100,150]
     //[50, 150, 120],
     //[250, 130, 70],
   ];
   public doughnutChartType: ChartType = 'doughnut';


   colors:Color[]=[
     {
       backgroundColor:[
         '#F52363','#0C0187','#099E80'
       ]
     }
   ]


  constructor() { }

  ngOnInit(): void {
  }



}
