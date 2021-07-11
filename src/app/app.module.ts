import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AngmatModule } from './shared/angmat.module';
import { AngutilsModule } from './shared/angutils.module';

import { MainModule } from './main/main.module';
import { CalendarModule } from './calendar/calendar.module';
import { MainformsModule } from './mainforms/mainforms.module';
import { CaptureModule } from './capture/capture.module';
import { ReportModule } from './report/report.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AssistantModule } from './assistant/assistant.module';
import { HomeModule } from './home/home.module';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'auth'}
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    AppRoutingModule,
  
    AngmatModule,
    AngutilsModule,

    MainModule,
    CalendarModule,
    CaptureModule,
    ReportModule,
    MainformsModule,
    AssistantModule,
    HomeModule,
  ],

  exports: [],

  providers: [],

  entryComponents: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
