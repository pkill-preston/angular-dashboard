import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { shadeColor } from '../../helpers/graph';

@Component({
  selector: 'app-round-graph',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './round-graph.component.html',
  styleUrl: './round-graph.component.scss'
})
export class RoundGraphComponent implements OnInit {
  public readonly RATIO: number = 3.74;
  @Input() percentage: number = 0;
  @Input() value: string = '';
  @Input() primaryColor: string = '';
  @Input() icon: string = '';
  @Input() description: string ='';
  ngOnInit(): void {

  }
  shadeInit(color:string, percent: number):string{
    return shadeColor(color, percent);
  }
}
