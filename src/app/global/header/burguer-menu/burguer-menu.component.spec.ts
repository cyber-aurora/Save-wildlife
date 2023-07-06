import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerMenuComponent } from './burguer-menu.component';

describe('BurguerMenuComponent', () => {
  let component: BurguerMenuComponent;
  let fixture: ComponentFixture<BurguerMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurguerMenuComponent]
    });
    fixture = TestBed.createComponent(BurguerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
