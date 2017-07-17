import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaveComponent } from './stave.component';

describe('StaveComponent', () => {
  let component: StaveComponent;
  let fixture: ComponentFixture<StaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
