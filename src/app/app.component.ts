import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { TopBarComponent } from './layouts/top-bar/top-bar.component';
import { RoundGraphComponent } from './components/round-graph/round-graph.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SideBarComponent, TopBarComponent, RoundGraphComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'here';
}
