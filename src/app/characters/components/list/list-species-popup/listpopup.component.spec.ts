import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpopupComponent } from './listpopup.component';

describe('ListpopupComponent', () => {
  let component: ListpopupComponent;
  let fixture: ComponentFixture<ListpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListpopupComponent]
    });
    fixture = TestBed.createComponent(ListpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
