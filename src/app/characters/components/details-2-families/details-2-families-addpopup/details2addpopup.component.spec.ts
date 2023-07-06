import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Details2addpopupComponent } from './details2addpopup.component';

describe('Details2addpopupComponent', () => {
  let component: Details2addpopupComponent;
  let fixture: ComponentFixture<Details2addpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Details2addpopupComponent]
    });
    fixture = TestBed.createComponent(Details2addpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
