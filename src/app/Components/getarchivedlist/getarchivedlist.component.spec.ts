import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetarchivedlistComponent } from './getarchivedlist.component';

describe('GetarchivedlistComponent', () => {
  let component: GetarchivedlistComponent;
  let fixture: ComponentFixture<GetarchivedlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetarchivedlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetarchivedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
