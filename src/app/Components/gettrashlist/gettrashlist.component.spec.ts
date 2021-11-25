import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettrashlistComponent } from './gettrashlist.component';

describe('GettrashlistComponent', () => {
  let component: GettrashlistComponent;
  let fixture: ComponentFixture<GettrashlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettrashlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettrashlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
