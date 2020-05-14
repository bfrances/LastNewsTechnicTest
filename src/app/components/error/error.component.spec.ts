import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('display good error', () => {
    const errorDe: DebugElement = fixture.debugElement;
    const errorDiv: HTMLElement = errorDe.nativeElement;
    component.imgSrc = 'assets/error.png';
    component.message = 'Error message';
    fixture.detectChanges();
    const imgDe = errorDe.query(By.css('img'));
    expect(imgDe).toBeTruthy();
    expect(imgDe.attributes.src).toEqual('assets/error.png');
    expect(errorDiv.textContent).toContain(component.message);
  });
});
