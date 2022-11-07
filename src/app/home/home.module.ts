import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngutilsModule } from '../shared/angutils.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ModalExComponent } from './hometree/modalEx.component';
import { ThemesComponent } from './themes/themes.component';
import { TeamComponent } from './team/team.component';
import { ProductsComponent } from './products/products.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AppointmentComponent } from './appointment/appointment.component';



@NgModule({
  declarations: [
    HomeComponent,
    ModalExComponent,
    ThemesComponent,
    TeamComponent,
    ProductsComponent,
    InsuranceComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngutilsModule,
  ]
})
export class HomeModule { }
