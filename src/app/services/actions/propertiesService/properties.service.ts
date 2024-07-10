import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from '../../api.service';

export type Property = {
  title: string,
  description: string,
  shortDescription: string,
  location: string,
  bedroomCount: number,
  propertyType: string,
  askingPrice: number,
  contact: string,
  managingAgent: string,
  expectedProfit: string,
  whenAvailable: string,
}

@Injectable({
  providedIn: 'root'
})

export class PropertiesService {


  constructor() {
  }

  getProperties(start: number, end: number): Observable<Property[]>{
    return this.client.get(`/properties?_start=${start}&_end=${end}`)
  }

  getAllProperties(): Observable<Property[]>{
    return this.client.get('/properties')
  }

  client = inject(ApiService)
}
