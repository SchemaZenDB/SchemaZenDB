import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaDbComponent } from './schema-db.component';

describe('SchemaDbComponent', () => {
  let component: SchemaDbComponent;
  let fixture: ComponentFixture<SchemaDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchemaDbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchemaDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
