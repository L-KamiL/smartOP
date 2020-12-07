import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeonInformationComponent } from './surgeon-information.component';

describe('SurgeonInformationComponent', () => {
  let component: SurgeonInformationComponent;
  let fixture: ComponentFixture<SurgeonInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgeonInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeonInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
