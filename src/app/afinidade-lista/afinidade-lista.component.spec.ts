import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfinidadeListaComponent } from './afinidade-lista.component';

describe('AfinidadeListaComponent', () => {
  let component: AfinidadeListaComponent;
  let fixture: ComponentFixture<AfinidadeListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfinidadeListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfinidadeListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
