import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportBlankComponent } from './transport-blank.component';

describe('TransportBlankComponent', () => {
  let component: TransportBlankComponent;
  let fixture: ComponentFixture<TransportBlankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportBlankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
