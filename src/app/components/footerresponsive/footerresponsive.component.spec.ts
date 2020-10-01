import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterResponsive } from './footerresponsive.component';

describe('FooterresponsiveComponent', () => {
  let component: FooterResponsive;
  let fixture: ComponentFixture<FooterResponsive>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterResponsive ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterResponsive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
