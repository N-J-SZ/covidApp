import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabledataComponent } from './tabledata/tabledata.component';
import { ChartdataComponent } from './chartdata/chartdata.component';

const routes: Routes = [
  {
    path: 'table',
    component: TabledataComponent
  },
  {
    path: 'chart',
    component: ChartdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule { }
