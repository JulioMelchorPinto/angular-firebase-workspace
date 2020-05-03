import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesStatsComponent } from './cases-stats.component';

describe('CasesStatsComponent', () => {
  let component: CasesStatsComponent;
  let fixture: ComponentFixture<CasesStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
