import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesPageComponent } from './invoices-page.component';

describe('InvoicesPageComponent', () => {
  let component: InvoicesPageComponent;
  let fixture: ComponentFixture<InvoicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
