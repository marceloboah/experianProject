import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreListaComponent } from './score-lista.component';

describe('ScoreListaComponent', () => {
  let component: ScoreListaComponent;
  let fixture: ComponentFixture<ScoreListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
