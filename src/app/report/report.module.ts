import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report/report.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { AngmatModule } from '../shared/angmat.module';
import { AngutilsModule } from '../shared/angutils.module';
import { ReportlistComponent } from './reportlist/reportlist.component';

@NgModule({
  declarations: [
    ReportComponent,
    ReportlistComponent,
    ReportFormComponent,
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    AngmatModule,
    AngutilsModule,
  ],
  exports: [
    ReportComponent,
    ReportlistComponent,
    ReportFormComponent,
  ]
})
export class ReportModule { }
