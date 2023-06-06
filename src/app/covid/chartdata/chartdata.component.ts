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

  data: number[] = [9721559, 2058847, 47367, 0, 16530488, 6419996, 10110492];
  updateFlag = false;

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions!: Highcharts.Options;
    
  constructor(private covidService: CovidService) {}
  
  ngOnInit(): void {
    this.chartOptions = {
    
      title: {
          text: 'Megbetegedési/Oltási adatok'
      },
      subtitle: {
          text: 'Source: https://europe-central2-webuni-js-covid-exam.cloudfunctions.net'
      },
      xAxis: {
          categories: [
              'Népesség',
              'Igazolt fertőzések száma',
              'Elhalálozások száma',
              'Gyógyult esetek száma',
              'Regisztrált oltások száma',
              'Oltottak száma',
              'Oltatlanok száma'
          ]
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Fő'
          }
      },
      series: [
        {
          name: 'Adatok',
          colorByPoint: true,
          type: 'column',
          data: this.data,
        },
      ],
    }
  }

  getDatas(country: string){
    this.covidService.getCases(country).subscribe(
      (data: Cases)=>{
        this.dataSource = data; 
      },
      (err)=>{console.log(err)}
    );

    this.covidService.getVaccines(country).subscribe(
      (data: Vaccines)=>{
        this.dataSource2! = data;
        
        this.chartOptions.series![0] = {
          type: 'column',
          data: [
            this.dataSource!.population, 
            this.dataSource!.confirmed,
            this.dataSource!.deaths,  
            this.dataSource!.recovered, 
            this.dataSource2!.administered, 
            this.dataSource2!.people_vaccinated,  
            this.dataSource!.population - this.dataSource2!.people_vaccinated
          ]
        }
        this.updateFlag = true;
      },
      (err)=>{console.log(err)}
        
    );
  }
}
