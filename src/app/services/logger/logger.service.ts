import { Injectable } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';


export type Item = {
  category: string,
  icon: string,
  route: string,
  isActive: boolean,
}

@Injectable({
  providedIn: 'root'
})

export class LoggerService {
  protected itemList: Item[] = [
    { icon: "tab", category: "Dashboard", route: "/dashboard", isActive: false },
    { icon: "domain", category: "Available Units", route: '/domain', isActive: false },
    { icon: "verified_user", category: "Invoices", route: "/invoices", isActive: false },
    { icon: "schedule", category: "Projects", route: '/schedule', isActive: false },
    { icon: "share", category: "Social media", route: "/wip", isActive: false },
    { icon: "dashboard", category: "Integrations", route: "/wip", isActive: false },
    { icon: "bookmark", category: "Documentation", route: "/wip", isActive: false },
    { icon: "settings", category: "Settings", route: "/wip", isActive: false },
    { icon: "help_outline", category: "Help Center", route: "/wip", isActive: false }
  ]
  constructor() { }

  getAllItems(): Item[] {
    provideHttpClient()
    return this.itemList
  }
}
