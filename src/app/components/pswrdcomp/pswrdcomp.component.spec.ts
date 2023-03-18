import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PswrdcompComponent } from './pswrdcomp.component';

describe('PswrdcompComponent', () => {
  let component: PswrdcompComponent;
  let fixture: ComponentFixture<PswrdcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PswrdcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PswrdcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
