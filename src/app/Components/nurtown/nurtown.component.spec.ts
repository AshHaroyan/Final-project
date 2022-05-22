import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurtownComponent } from './nurtown.component';

describe('NurtownComponent', () => {
  let component: NurtownComponent;
  let fixture: ComponentFixture<NurtownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurtownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurtownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
