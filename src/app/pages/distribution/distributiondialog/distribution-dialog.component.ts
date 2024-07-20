import {Component, inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {CategoryDTO} from "../../../model/CategoryDTO";
import {DistributionDTO} from "../../../model/DistributionDTO";
import {CategoryService} from "../../../service/category.service";
import {MatSelectModule} from '@angular/material/select';
import {MatIcon} from "@angular/material/icon";
import {DistributionDetailDTO} from "../../../model/DistributionDetailDTO";
import {DistributionService} from "../../../service/distribution.service";

@Component({
  selector: 'app-distributiondialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatSelectModule, MatIcon],
  templateUrl: './distribution-dialog.component.html',
  styleUrl: './distribution-dialog.component.css'
})
export class DistributionDialogComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private distributionService: DistributionService) {
  }

  categories: CategoryDTO[]
  public dialogRef = inject(MatDialogRef<DistributionDialogComponent>);
  data = inject<DistributionDTO>(MAT_DIALOG_DATA);
  form: FormGroup;

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(m=> this.categories = m)

    this.form = new FormGroup({
      description: new FormControl('',[Validators.required]),
      subtotal: new FormControl('',[Validators.required]),
      category: new FormControl('',[Validators.required]),
    });
  }


  operate(){
    if(this.form.invalid){return}

    let detail = new DistributionDetailDTO()
    let category = new CategoryDTO()
    category.idCategory = this.form.value['category']

    detail.description = this.form.value['description']
    detail.subtotal = this.form.value['subtotal']
    detail.category = category;
    console.log(detail);

    this.distributionService.save(this.data.idDistribution, detail).subscribe();

    // this.consultService.save(consult).subscribe(()=>{
    //   this.snackBar.open('CONSULTA CREADA','INFO',{duration: 2000})
    //
    //   setTimeout(()=>{
    //     this.cleanControls()
    //   }), 20000
    // })
    this.close()
  }

  close(){
    this.dialogRef.close()
}



}
