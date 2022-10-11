import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSwitcherComponent } from './local-switcher.component';

describe('LocalSwitcherComponent', () => {
  let component: LocalSwitcherComponent;
  let fixture: ComponentFixture<LocalSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalSwitcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
