import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbMigrationComponent } from './db-migration.component';

describe('DbMigrationComponent', () => {
  let component: DbMigrationComponent;
  let fixture: ComponentFixture<DbMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbMigrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
