import {Component, computed, input, signal} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MenuItem} from "../../model/MenuItem";
import {MatListItem, MatListItemIcon, MatNavList} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatNavList,
    MatListItem,
    MatIconModule,
    MatListItemIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css'
})
export class CustomSidenavComponent {
  collapsed = input<boolean>(true)

  menuItems = signal<MenuItem[]>([
    {
      icon: 'person',
      label: 'Account',
      route: 'pages/account'
    },
    {
      icon: 'money',
      label: 'Finance',
      route: 'pages/finance'
    }
  ])

  profilePicSize = computed(() => this.collapsed() ? '32':'100')
}
