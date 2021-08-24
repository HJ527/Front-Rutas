import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSubComponent } from './agregar-sub.component';

describe('AgregarSubComponent', () => {
  let component: AgregarSubComponent;
  let fixture: ComponentFixture<AgregarSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
