import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaptureRoutingModule } from './capture-routing.module';
import { CaptureComponent } from './capture/capture.component';


@NgModule({
  declarations: [CaptureComponent],
  imports: [
    CommonModule,
    CaptureRoutingModule
  ]
})
export class CaptureModule { }
