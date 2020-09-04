import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetSelectorComponent } from './preset-selector.component';

describe('PresetSelectorComponent', () => {
  let component: PresetSelectorComponent;
  let fixture: ComponentFixture<PresetSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
