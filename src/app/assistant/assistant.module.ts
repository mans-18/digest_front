import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistantComponent, AssistantExtraDialogComponent, AssistantStatusDialogComponent } from './assistant/assistant.component';
import { AssistantRoutingModule } from './assistant-routing.module';
import { AngmatModule } from '../shared/angmat.module';
import { AngutilsModule } from '../shared/angutils.module';

@NgModule({
  declarations: [
    AssistantComponent,
    AssistantStatusDialogComponent,
    AssistantExtraDialogComponent,
  ],
  imports: [
    CommonModule,
    AssistantRoutingModule,
    AngutilsModule,
    AngmatModule,
  ]
})
export class AssistantModule { }
