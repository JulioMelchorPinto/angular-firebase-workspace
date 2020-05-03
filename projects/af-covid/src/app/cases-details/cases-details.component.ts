import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Cases } from '../models/cases';

@Component({
  selector: 'app-cases-details',
  templateUrl: './cases-details.component.html',
  styleUrls: ['./cases-details.component.scss']
})
export class CasesDetailsComponent implements OnInit {
  
  cases: Cases = { id: '', name: '', gender: '', age: null, address: '', city: '', country: '', status: '', updated: null };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  getCasesDetails(id: string) {
    return this.api.getCasesById(id);
  }

  deleteCases(id: any) {
    this.isLoadingResults = true;
    this.api.deleteCases(id);
  }


  ngOnInit(): void {
    this.getCasesDetails(this.route.snapshot.params.id);
  }

}
