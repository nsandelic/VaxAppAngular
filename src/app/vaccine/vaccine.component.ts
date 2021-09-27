import { Component, OnInit } from '@angular/core';
import { Vaccine } from '../vaccine';
import { VaccineService } from '../vaccine.service';


@Component({
  selector: 'app-vaccine',
  templateUrl: './vaccine.component.html',
  styleUrls: ['./vaccine.component.css']
})
export class VaccineComponent implements OnInit {

  vaccines: Vaccine[];
  selectedVaccine: Vaccine;

  constructor(private vaccineService: VaccineService) { }

  ngOnInit(): void {
    this.getVaccines();
  }

  getVaccines(): void {
    this.vaccineService.getVaccines()
      .subscribe(vaccines => this.vaccines = vaccines);
  }

  onSelect(vaccine: Vaccine): void {
    this.selectedVaccine = vaccine;
  }



}
