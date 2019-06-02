import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../classes/vehicles';
import { Vehicle } from '../classes/vehicle';
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
      (vehicles: Vehicles[]) => {
        this.vehicles = vehicles;
        console.log(vehicles);
      }
    );
  }

  showVehicle(id: string) {
    console.log('showVehicle');
    console.log(id);
    this.dataService.getVehicleById(id)
    .subscribe(
      (vehicle: Vehicle[]) => {
        this.vehicle = vehicle;
        console.log(vehicle);
      }
    );
  }

}
