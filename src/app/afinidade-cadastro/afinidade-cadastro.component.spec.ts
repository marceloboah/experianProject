import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfinidadeCadastroComponent } from './afinidade-cadastro.component';

describe('AfinidadeCadastroComponent', () => {
  let component: AfinidadeCadastroComponent;
  let fixture: ComponentFixture<AfinidadeCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfinidadeCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfinidadeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
