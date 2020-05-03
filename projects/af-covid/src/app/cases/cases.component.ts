import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Cases } from '../models/cases';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  constructor(private casesService: ApiService) { }
  
  displayedColumns: string[] = ['name', 'age', 'gender', 'status'];
  cases: Cases[] = [];
  isLoadingResults = true;

  ngOnInit(): void {
    this.casesService.getCases()
    .subscribe((data: any) => {
      this.cases = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Cases;
      })
    });
  }

  create(cases: Cases){
    this.casesService.addCases(cases);
  }

  update(id: string, cases: Cases) {
    this.casesService.updateCases(id,cases);
  }

  delete(id: string) {
    this.casesService.deleteCases(id);
  }


}
