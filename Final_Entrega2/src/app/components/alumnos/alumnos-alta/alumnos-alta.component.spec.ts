import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosAltaComponent } from './alumnos-alta.component';

describe('AlumnosAltaComponent', () => {
  let component: AlumnosAltaComponent;
  let fixture: ComponentFixture<AlumnosAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
