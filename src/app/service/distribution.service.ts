import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryDTO} from "../model/CategoryDTO";
import {DistributionDetailDTO} from "../model/DistributionDetailDTO";

@Injectable({
  providedIn: 'root'
})
export class DistributionService {

  protected url = 'http://localhost:8080/distribution'

  constructor(
    protected http: HttpClient,
  ) { }

  save(idDistribution: number,data: DistributionDetailDTO){
    return this.http.post(`${this.url}/detail/${idDistribution}`,data)
  }

}
