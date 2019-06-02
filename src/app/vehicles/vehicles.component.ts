import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../classes/vehicles';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  vehicles: object;
  vehicle: object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getVehicles()
    .subscribe(
      data => {
        this.vehicles = data;
        console.log(data);
      }
    );
  }

}
