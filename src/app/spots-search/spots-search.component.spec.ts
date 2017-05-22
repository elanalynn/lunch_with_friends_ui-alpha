import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotsSearchComponent } from './spots-search.component';

describe('SpotsSearchComponent', () => {
  let component: SpotsSearchComponent;
  let fixture: ComponentFixture<SpotsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
