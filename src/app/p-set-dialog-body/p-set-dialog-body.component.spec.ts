import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSetDialogBodyComponent } from './p-set-dialog-body.component';

describe('PSetDialogBodyComponent', () => {
  let component: PSetDialogBodyComponent;
  let fixture: ComponentFixture<PSetDialogBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSetDialogBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSetDialogBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
