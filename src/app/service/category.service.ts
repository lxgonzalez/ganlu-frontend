import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MonthYearDTO} from "../model/MonthYearDTO";
import {CategoryDTO} from "../model/CategoryDTO";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  protected url = 'http://localhost:8080/category'

  constructor(
    protected http: HttpClient,
  ) { }

  getCategory(){
    return this.http.get<CategoryDTO[]>(`${this.url}`)
  }

}
