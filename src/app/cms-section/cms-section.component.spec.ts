import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsSectionComponent } from './cms-section.component';

describe('CmsSectionComponent', () => {
  let component: CmsSectionComponent;
  let fixture: ComponentFixture<CmsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
