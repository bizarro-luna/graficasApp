import { Component, OnInit } from '@angular/core';
import { ChartOptions,ChartType,ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {


  barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    //scales: { xAxes: [{}], yAxes: [{}] },
    /*plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }*/
  };
  barChartLabels: Label[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  

   barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor:'#B0F08D', hoverBackgroundColor:'#B0F08D' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor:'#018724', hoverBackgroundColor:'#018724' },
    { data: [18, 33, 77, 19, 20, 27, 64], label: 'Series C', backgroundColor:'#099E80', hoverBackgroundColor:'#099E80' }
  ];


  constructor() { }

  ngOnInit(): void {
    
  }

  randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100) ];

      this.barChartData[1].data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100) ];

        this.barChartData[2].data = [
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100),
          Math.round(Math.random() * 100) ];
    
  }

  

}
