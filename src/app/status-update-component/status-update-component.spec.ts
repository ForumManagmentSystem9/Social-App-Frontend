import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusUpdateComponent } from './status-update-component';

describe('StatusUpdateComponent', () => {
  let component: StatusUpdateComponent;
  let fixture: ComponentFixture<StatusUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusUpdateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
