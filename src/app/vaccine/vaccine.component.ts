import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
    this.vaccineService.getVaccineSpring()
      .subscribe( vaccines => 
        this.vaccines = vaccines,
        
        );
      
  }

  deleteVaccine(researchName: String): void {
    this.vaccineService.deleteVaccine(researchName)
      .subscribe(vaccine => {this.vaccines.pop();
  })
}


  addVaccine( researchName: string, manufacturersName: string, vaccineType: string, requiredDosageS: string, availableDosageCountS: string): void {
    researchName = researchName.trim();
    manufacturersName = manufacturersName.trim();
    vaccineType = vaccineType.trim();
    const requiredDosage: number = +requiredDosageS;
    const availableDosageCount: number = +availableDosageCountS;
    
  
   
    if( !researchName || !manufacturersName || !vaccineType || !requiredDosage  || !availableDosageCount )
      return console.log("Wrong input");

      const vax = { researchName, manufacturersName, vaccineType, requiredDosage, availableDosageCount} as Vaccine;

    

    this.vaccineService.addVaccine(vax)
      .subscribe(newVax => this.vaccines.push(newVax));
      //this.getVaccines();
     // window.location.reload(); -> temp solution: page refresh
  }

  onSelect(vaccine: Vaccine): void {
    this.selectedVaccine = vaccine;
  }



}
