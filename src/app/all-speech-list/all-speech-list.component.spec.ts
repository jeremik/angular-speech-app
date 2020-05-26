import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSpeechListComponent } from './all-speech-list.component';

describe('AllSpeechListComponent', () => {
  let component: AllSpeechListComponent;
  let fixture: ComponentFixture<AllSpeechListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSpeechListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSpeechListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
