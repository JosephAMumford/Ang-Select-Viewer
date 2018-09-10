import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACodeViewerComponent } from './a-code-viewer.component';

describe('ACodeViewerComponent', () => {
  let component: ACodeViewerComponent;
  let fixture: ComponentFixture<ACodeViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACodeViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACodeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
