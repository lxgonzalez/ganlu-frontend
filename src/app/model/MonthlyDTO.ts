import {DistributionDTO} from "./DistributionDTO";

export class MonthlyDTO {
  monthFinance: number
  yearFinance: number
  salary: number
  total: number
  idMember: number;
  distributions: DistributionDTO[]
}
