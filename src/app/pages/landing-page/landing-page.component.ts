import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RoundGraphComponent } from '../../components/round-graph/round-graph.component';
import { PropertyCardComponent } from '../../components/property-card/property-card.component';
import { PropertiesService } from '../../services/actions/propertiesService/properties.service';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Property } from '../../services/actions/propertiesService/properties.service';
import { Graph, GraphsServiceService } from '../../services/actions/graphsService/graphs-service.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterOutlet, PropertyCardComponent, RoundGraphComponent, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})

export class LandingPageComponent implements OnInit {
  value: string  = '';
  public propertyList: Property[] = []
  public graphsList: Graph[] = []
  ngOnInit(){
    this.properties.getProperties(1,7).subscribe({
      next: ((item : Property[])=>{
        this.propertyList = item
      })
    })
    this.graphs.getGraphSettings().subscribe({
      next: ((item: Graph[]) => {
        this.graphsList = item;
      })
    })
  }
  graphs = inject(GraphsServiceService)
  properties = inject(PropertiesService)
  router = inject(Router)
}