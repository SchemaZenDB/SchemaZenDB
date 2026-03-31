import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudDbMgmtComponent } from './cloud-db-mgmt.component';

describe('CloudDbMgmtComponent', () => {
  let component: CloudDbMgmtComponent;
  let fixture: ComponentFixture<CloudDbMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudDbMgmtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudDbMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
