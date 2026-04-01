import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItContractSupplyComponent } from './it-contract-supply.component';

describe('ItContractSupplyComponent', () => {
  let component: ItContractSupplyComponent;
  let fixture: ComponentFixture<ItContractSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItContractSupplyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItContractSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
