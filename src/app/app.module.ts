import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VisualizationsComponent } from './visualizations/visualizations.component';
import { TemperatureComponent } from './visualizations/temperature/temperature.component';

import { D3Service } from 'd3-ng2-service';

@NgModule({
  declarations: [
    AppComponent,
    VisualizationsComponent,
    TemperatureComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
