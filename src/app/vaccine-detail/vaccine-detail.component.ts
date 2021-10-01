import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route:ActivatedRoute,
    private service:VaccineService
  ) { }

  ngOnInit(): void {
    this.loadVaccine();
  }

  loadVaccine(){
    const manName = this.route.snapshot.paramMap.get('manufacturersName');
    this.service.getByManName(manName)
    .subscribe(
      data => this.vaccine = data,
      error => this.error = error
    )

  }


}
