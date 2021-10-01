import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccineComponent,
    VaccineDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
