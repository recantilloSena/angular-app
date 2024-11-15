import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaDetailComponent } from './sena-detail.component';

describe('SenaDetailComponent', () => {
  let component: SenaDetailComponent;
  let fixture: ComponentFixture<SenaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenaDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
