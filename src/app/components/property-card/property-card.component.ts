import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [MatButton, MatChipsModule, MatIcon, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.scss'
})
export class PropertyCardComponent {
  @Input() title: string = '';
  @Input() shortDescription: string = '';
  @Input() location: string = '';
  @Input() bedroomCount: number = 0;
  @Input() propertyType: string = '';
}
