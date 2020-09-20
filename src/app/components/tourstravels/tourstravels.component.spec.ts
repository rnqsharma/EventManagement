import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourstravelsComponent } from './tourstravels.component';

describe('TourstravelsComponent', () => {
  let component: TourstravelsComponent;
  let fixture: ComponentFixture<TourstravelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourstravelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourstravelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
