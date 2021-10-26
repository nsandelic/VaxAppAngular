import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SideEffectService } from '../side-effect.service';
import { SideEffect } from '../sideEffect';
import { Vaccine } from '../vaccine';
import { VaccineService } from '../vaccine.service';

@Component({
  selector: 'app-vaccine-detail',
  templateUrl: './vaccine-detail.component.html',
  styleUrls: ['./vaccine-detail.component.css']
})
export class VaccineDetailComponent implements OnInit {

  vaccine: any;
  error: any;
  
  //@Input() vaccine: Vaccine;
  sideEffects: SideEffect[];
  x: number = 0;

  constructor(
    private route:ActivatedRoute,
    private service:VaccineService,
    private sideEffectService: SideEffectService
  ) { }

  ngOnInit(): void {
    this.loadVaccine();
    this.getSideEffects();
  }

  loadVaccine(){
    const manName = this.route.snapshot.paramMap.get('manufacturersName');
    this.service.getByManName(manName)
    .subscribe(
      data => this.vaccine = data,
      error => this.error = error
    )
  }


  getSideEffects(): void {
    this.sideEffectService.getSideEffects()
      .subscribe( data => 
        this.sideEffects = data
        ); 
  }


}
