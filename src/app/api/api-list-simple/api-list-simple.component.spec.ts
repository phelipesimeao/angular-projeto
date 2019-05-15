import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiListSimpleComponent } from './api-list-simple.component';

describe('ApiListSimpleComponent', () => {
  let component: ApiListSimpleComponent;
  let fixture: ComponentFixture<ApiListSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiListSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiListSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
