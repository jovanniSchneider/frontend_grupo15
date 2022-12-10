import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PymeFormComponent } from './pyme-form.component';

describe('PymeFormComponent', () => {
  let component: PymeFormComponent;
  let fixture: ComponentFixture<PymeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PymeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PymeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
