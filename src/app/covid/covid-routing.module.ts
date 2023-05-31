import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabledataComponent } from './tabledata/tabledata.component';
import { ChartdataComponent } from './chartdata/chartdata.component';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';

const routes: Routes = [
  {
    path: 'table',
    component: TabledataComponent
  },
  {
    path: 'chart',
    component: ChartdataComponent
  },
  {
    path: 'notallowed',
    component: NotAllowedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidRoutingModule { }
