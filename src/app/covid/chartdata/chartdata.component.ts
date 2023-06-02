import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Cases, Vaccines } from '../models/covid.model';
import { CovidService } from '../covid.service';


@Component({
  selector: 'app-chartdata',
  templateUrl: './chartdata.component.html',
  styleUrls: ['./chartdata.component.scss']
})
export class ChartdataComponent implements OnInit{

  dataSource: Cases | undefined;
  dataSource2: Vaccines | undefined;
  
  countries = [
    "Hungary",
    "France", 
    "Slovakia", 
    "Slovenia", 
    "Austria", 
    "Romania"
  ];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'column',
        data: [1, 2, 3, 4, 5],
      },
    ],
  };

  constructor(private covidService: CovidService) {}
  
  ngOnInit(): void {
    
  }

  getDatas(country: string){
    this.covidService.getCases(country).subscribe(
      (data: Cases)=>{console.log(data)
        this.dataSource = data; 
      },
      (err)=>{console.log(err)}
    );

    this.covidService.getVaccines(country).subscribe(
      (data: Vaccines)=>{console.log(data)
        this.dataSource2 = data;
      },
      (err)=>{console.log(err)}
    );
  }
}
