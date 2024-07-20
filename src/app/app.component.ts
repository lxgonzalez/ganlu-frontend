import {Component, computed, signal, ViewChild} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {CommonModule} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {CustomSidenavComponent} from "./components/custom-sidenav/custom-sidenav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,

    CommonModule,
    RouterModule,
    RouterOutlet,
    RouterLinkActive, CustomSidenavComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="app"
  collapsed = signal(false)
  sideNavWith = computed(()=> this.collapsed()? '60px':'250px')
  constructor(private http: HttpClient) {
  }
}

