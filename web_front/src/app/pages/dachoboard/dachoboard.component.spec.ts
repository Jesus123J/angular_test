import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DachoboardComponent } from './dachoboard.component';

describe('DachoboardComponent', () => {
  let component: DachoboardComponent;
  let fixture: ComponentFixture<DachoboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DachoboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DachoboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
