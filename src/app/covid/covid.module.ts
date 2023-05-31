import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabledataComponent } from './tabledata/tabledata.component';
import { ChartdataComponent } from './chartdata/chartdata.component';
import { CovidRoutingModule } from './covid-routing.module';
import { MatTableModule } from '@angular/material/table'; 
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TabledataComponent,
    ChartdataComponent,
    NotAllowedComponent
  ],
  imports: [
    CommonModule,
    CovidRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    TabledataComponent,
    ChartdataComponent
  ]
})
export class CovidModule { }
