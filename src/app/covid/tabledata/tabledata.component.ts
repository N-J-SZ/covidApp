import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CovidService } from '../covid.service';
import { Cases, Vaccines } from '../models/covid.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})

export class TabledataComponent implements OnInit {
 
  countries = [
    "Hungary",
    "France", 
    "Slovakia", 
    "Slovenia", 
    "Austria", 
    "Romania"
  ];

  constructor(private covidService: CovidService) {}

  displayedColumns: string[] = [ "Name", "Value" ];
  dataSource: Cases | undefined;
  dataSource2: Vaccines | undefined;

  ngOnInit(): void {}

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
