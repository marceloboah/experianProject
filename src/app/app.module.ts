import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
//import { PersonaComponent } from './persona/persona.component';
import { HttpClientModule } from '@angular/common/http';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';
import { PessoasDetalheComponent } from './pessoas-detalhe/pessoas-detalhe.component';
import { PessoasCadastroComponent } from './pessoas-cadastro/pessoas-cadastro.component';
import { ScoreListaComponent } from './score-lista/score-lista.component';
import { AfinidadeCadastroComponent } from './afinidade-cadastro/afinidade-cadastro.component';
import {DropdownModule} from 'primeng/dropdown'; 
import { InputNumberModule } from "primeng/inputnumber";

@NgModule({
  declarations: [
    AppComponent,
    //PersonaComponent,
    PessoasListaComponent,
    PessoasDetalheComponent,
    PessoasCadastroComponent,
    ScoreListaComponent,
    AfinidadeCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    PanelModule,
    MenubarModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    Ng2SearchPipeModule,
    DropdownModule,
    InputNumberModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
