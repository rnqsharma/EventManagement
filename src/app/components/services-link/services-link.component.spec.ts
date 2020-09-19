import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLinkComponent } from './services-link.component';

describe('ServicesLinkComponent', () => {
  let component: ServicesLinkComponent;
  let fixture: ComponentFixture<ServicesLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
