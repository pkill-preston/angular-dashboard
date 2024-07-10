import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundGraphComponent } from './round-graph.component';

describe('RoundGraphComponent', () => {
  let component: RoundGraphComponent;
  let fixture: ComponentFixture<RoundGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
