import {Component, inject, Input, input} from '@angular/core';
import {DistributionDTO} from "../../model/DistributionDTO";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {FlexModule} from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import {DistributionDialogComponent} from "./distributiondialog/distribution-dialog.component";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-distribution',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatListModule, MatIconModule, MatGridListModule, FlexModule, MatDividerModule,MatDialogModule, DistributionDialogComponent],
  templateUrl: './distribution.component.html',
  styleUrl: './distribution.component.css'
})
export class DistributionComponent {
  distribution = input<DistributionDTO>()
  dialog = inject(MatDialog);

  openDialog(distribution: DistributionDTO): void {
    this.dialog.open(DistributionDialogComponent, {data: distribution})
  }
}
