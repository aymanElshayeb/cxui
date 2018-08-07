import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlppageComponent } from './plppage.component';

describe('PlppageComponent', () => {
  let component: PlppageComponent;
  let fixture: ComponentFixture<PlppageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlppageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlppageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
