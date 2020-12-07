import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeonSearchComponent } from './surgeon-search.component';

describe('SurgeonSearchComponent', () => {
  let component: SurgeonSearchComponent;
  let fixture: ComponentFixture<SurgeonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgeonSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
