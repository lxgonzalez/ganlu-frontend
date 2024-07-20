import {Component, OnInit, signal, Signal} from '@angular/core';
import {FinanceService} from "../../service/finance.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MonthYearDTO} from "../../model/MonthYearDTO";
import {MatSelectModule} from '@angular/material/select';
import {MonthlyDTO} from "../../model/MonthlyDTO";
import {MatButton} from "@angular/material/button";
import {AccountComponent} from "../account/account.component";
import {MatGridListModule} from '@angular/material/grid-list';
import {DistributionComponent} from "../distribution/distribution.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatButton,
    MatGridListModule,
    AccountComponent,
    DistributionComponent,
    FlexLayoutModule,
    MatCardModule
  ],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css'
})
export class FinanceComponent implements OnInit{
  monthYearList: MonthYearDTO[]
  monthYearSelected: MonthYearDTO
  monthlyFinance: MonthlyDTO

  detailsLength = signal([0,1])
  rowHeight = signal(0);


  constructor(
    private serviceFinance: FinanceService
  ) {
  }

  ngOnInit(): void {
    this.serviceFinance.getMonthYear('1').subscribe(m => this.monthYearList = m);
    this.serviceFinance.findMonthly('1','7','2024').subscribe(
      s => {
        this.monthlyFinance = s
      }
    )
  }

  submitData(){
    this.serviceFinance.findMonthly('1',this.monthYearSelected.monthFinance,this.monthYearSelected.yearFinance).subscribe(
      s => {this.monthlyFinance = s
      }

    )
  }

}
