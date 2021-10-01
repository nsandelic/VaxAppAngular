import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccineDetailComponent } from './vaccine-detail/vaccine-detail.component';
import { VaccineComponent } from './vaccine/vaccine.component';

const routes: Routes = [
  {path: 'vaccines', component: VaccineComponent},
  {path: 'detail/:manufacturersName', component: VaccineDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
