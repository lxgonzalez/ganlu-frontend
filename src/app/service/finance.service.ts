import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MonthlyDTO} from "../model/MonthlyDTO";
import {MonthYearDTO} from "../model/MonthYearDTO";

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  protected url = 'http://localhost:8080/monthly'

  constructor(
    protected http: HttpClient,
  ) { }

  findMonthly(memberId: string, month:string,year:string){
    return this.http.get<MonthlyDTO>(`${this.url}/${memberId}/${month}/${year}`)
  }

  getMonthYear(memberId: string){
    return this.http.get<MonthYearDTO[]>(`${this.url}/monthYearFinance/${memberId}`)
  }
}
