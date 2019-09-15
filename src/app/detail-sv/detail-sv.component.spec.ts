import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSVComponent } from './detail-sv.component';

describe('DetailSVComponent', () => {
  let component: DetailSVComponent;
  let fixture: ComponentFixture<DetailSVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
