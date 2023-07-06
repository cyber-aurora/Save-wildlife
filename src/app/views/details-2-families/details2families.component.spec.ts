import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Details2familiesComponent } from './details2families.component';

describe('Details2familiesComponent', () => {
  let component: Details2familiesComponent;
  let fixture: ComponentFixture<Details2familiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Details2familiesComponent]
    });
    fixture = TestBed.createComponent(Details2familiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
