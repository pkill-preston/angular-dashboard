import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NgClass } from '@angular/common';
import { Item, LoggerService } from '../../services/logger/logger.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [NgClass, MatListModule, MatIconModule, MatCardModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  providers: [],
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements AfterViewInit, OnInit {
  public items:Item[] = [];
  private readonly loggerService = inject(LoggerService);
  router = inject(Router);

  ngOnInit(): void {
    this.items = this.loggerService.getAllItems()
  }
  ngAfterViewInit(): void {
    let path = this.router.url
    console.log(path)
  }
}
