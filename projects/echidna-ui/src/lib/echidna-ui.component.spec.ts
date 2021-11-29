import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchidnaUiComponent } from './echidna-ui.component';

describe('EchidnaUiComponent', () => {
  let component: EchidnaUiComponent;
  let fixture: ComponentFixture<EchidnaUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchidnaUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchidnaUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
