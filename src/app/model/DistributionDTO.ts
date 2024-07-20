import {DistributionDetailDTO} from "./DistributionDetailDTO";

export class DistributionDTO {
  idDistribution: number
  name: string
  description: string
  percentage: number
  total: number
  totalFinal: number
  distributionDetails: DistributionDetailDTO[]
}
