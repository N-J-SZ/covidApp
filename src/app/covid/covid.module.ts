import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabledataComponent } from './tabledata/tabledata.component';
import { ChartdataComponent } from './chartdata/chartdata.component';
import { CovidRoutingModule } from './covid-routing.module';



@NgModule({
  declarations: [
    TabledataComponent,
    ChartdataComponent
  ],
  imports: [
    CommonModule,
    CovidRoutingModule
  ],
  exports: [
    TabledataComponent,
    ChartdataComponent
  ]
})
export class CovidModule { }
