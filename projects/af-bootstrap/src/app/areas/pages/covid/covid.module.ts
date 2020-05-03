import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CasesComponent } from './covid/cases/cases.component';
import { AddCasesComponent } from './covid/add-cases/add-cases.component';
import { EditCasesComponent } from './covid/edit-cases/edit-cases.component';
import { CasesStatsComponent } from './covid/cases-stats/cases-stats.component';
import { CasesDetailsComponent } from './covid/cases-details/cases-details.component';

@NgModule({
  declarations: [
    CasesComponent,
    AddCasesComponent,
    EditCasesComponent,
    CasesStatsComponent,
    CasesDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class CovidModule { }
