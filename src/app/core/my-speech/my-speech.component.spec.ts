import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySpeechComponent } from './my-speech.component';

describe('MySpeechComponent', () => {
  let component: MySpeechComponent;
  let fixture: ComponentFixture<MySpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySpeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
