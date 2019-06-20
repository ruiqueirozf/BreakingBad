/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GridresultadoComponent } from './gridresultado.component';

describe('GridresultadoComponent', () => {
  let component: GridresultadoComponent;
  let fixture: ComponentFixture<GridresultadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridresultadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridresultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
