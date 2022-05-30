import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { PessoasDetalheComponent } from './pessoas-detalhe/pessoas-detalhe.component';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { ScoreListaComponent } from './score-lista/score-lista.component';
import { AfinidadeCadastroComponent } from './afinidade-cadastro/afinidade-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas', pathMatch: 'full' },
  { path: 'pessoas', component: PessoasListaComponent },
  { path: 'pessoa/:id', component: PessoasDetalheComponent },
  { path: 'pessoas/cadastro', component: PessoasCadastroComponent },
  { path: 'scores', component: ScoreListaComponent },
  { path: 'afinidades/cadastro', component: AfinidadeCadastroComponent },
  { path: '**', redirectTo: 'pessoas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
