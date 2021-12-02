import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccineComponent } from './vaccine/vaccine.component';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthExpiredInterceptor } from './interceptors/auth-expired.interceptor';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    VaccineComponent,
    VaccineDetailComponent,
    LoginComponent,
    PageNotFoundComponent,
    ForbiddenPageComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
