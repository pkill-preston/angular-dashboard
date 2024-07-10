import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { ApiService } from "../../api.service";

export type Graph = {
  description: string,
  value: number,
  primaryColor: string
}

@Injectable({
  providedIn: 'root'
})

export class GraphsServiceService {
  constructor() { }

  getGraphSettings(): Observable<Graph[]>{
    return this.client.get('/graphs')
  }
  client = inject(ApiService)
}
