import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IputscompComponent } from './iputscomp.component';

describe('IputscompComponent', () => {
  let component: IputscompComponent;
  let fixture: ComponentFixture<IputscompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IputscompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IputscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
