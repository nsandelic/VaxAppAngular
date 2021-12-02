import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForbiddenPageComponent } from './forbidden-page/forbidden-page.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { VaccineComponent } from './vaccine/vaccine.component';

const routes: Routes = [
  {path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'vaccines', component: VaccineComponent, canActivate: [AuthGuard] },
  {path: 'detail/:manufacturersName', component: VaccineDetailComponent, canActivate: [AdminAuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'forbidden', component: ForbiddenPageComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
