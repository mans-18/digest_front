import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngutilsModule } from '../shared/angutils.module';
import { AngmatModule } from '../shared/angmat.module';

import { MainformsRoutingModule } from './mainforms-routing.module';
import { EventFormModalComponent } from './event-form-modal/event-form-modal.component';
import { EventFormDetailComponent } from './event-form-detail/event-form-detail.component';
import { KollegeFormModalComponent } from './kollege-form-modal/kollege-form-modal.component';
import { PersonaFormDetailComponent } from './persona-form-detail/persona-form-detail.component';
import { PersonaFormModalComponent } from './persona-form-modal/persona-form-modal.component';


@NgModule({
  declarations: [
    EventFormModalComponent,
    EventFormDetailComponent,
    KollegeFormModalComponent,
    PersonaFormDetailComponent,
    PersonaFormModalComponent,
    
  ],
  imports: [
    CommonModule,
    MainformsRoutingModule,
    AngutilsModule,
    AngmatModule,
  ],
  exports: [
    EventFormModalComponent
  ]
})
export class MainformsModule { }
