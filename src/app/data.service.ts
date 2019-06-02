import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicles } from './classes/vehicles';
import { Vehicle } from './classes/vehicle';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiVehiclesURL = 'https://itg-prd-recruit.appspot.com/api/vehicles/';
  apiVehicleURL = 'https://itg-prd-recruit.appspot.com/api/vehicle/';

  constructor(private httpClient: HttpClient) { }

  public getVehicles() {
    return this.httpClient.get<Vehicles[]>(this.apiVehiclesURL);
  }

  public getVehicleById(id: string) {
    return this.httpClient.get<Vehicle[]>(this.apiVehicleURL + '/$id');
  }
}
