import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenService } from '../service/token.service';
import { Token } from 'src/model/token';
import { PessoasListaService } from '../service/pessoas-lista.service';
import { PessoasList } from 'src/model/pessoas-list';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.css']
})
export class PessoasListaComponent implements OnInit {

  items: MenuItem[];
  pessoasList: PessoasList[];
  cols: any[];
  testes: any[];
  pessoas: PessoasList = {
    id: null,
    nome: null,
    idade: null,
    cidade: null,
    estado: null,
    scoreDescricao: null,
    estados: null
  }
  selectedPessoas: PessoasList = {
    id: null,
    nome: null,
    idade: null,
    cidade: null,
    estado: null,
    scoreDescricao: null,
    estados: null
  }

  baseUrl:string = "http://localhost:9099"
  baseFront:string = "http://localhost:4200"
  obj:any = null;
  constructor(private http:HttpClient, private tokenService:TokenService, private pessoasListaService: PessoasListaService, private messageService: MessageService, private confirmationService: ConfirmationService, private router: Router) { }

  ngOnInit(): void {
    
    
    this.cols = [
      {field: "nome", header: "Nome"},
      {field: "idade", header: "Idade"},
      {field: "scoreDescricao", header: "Score Descrição"}
    ];

    this.items = [
      {
        label : "Cadastra Pessoa",
        icon: 'pi pi-fw pi-plus',
        command : ()=> this.openCadastraPessoa()
      },
      {
        label : "Lista Score",
        icon: 'pi pi-fw pi-list',
        command : ()=> this.openScoreList()
      },
      {
        label : "Cadastra Afinidade",
        icon: 'pi pi-fw pi-plus',
        command : ()=> this.openCadastraAfinidade()
      }
    ]
    this.getAll();
    
  }
  
  getToken(){
    this.tokenService.getToken();
  }
  openCadastraPessoa(){
    this.router.navigate(["/pessoas/cadastro"]);
  }
  openScoreList(){
    this.router.navigate(["/scores"]);
  }
  openCadastraAfinidade(){
    this.router.navigate(["/afinidades/cadastro"]);
  }
      

  getAll() {
    
    this.pessoasListaService.getAll().subscribe(
      (result: any)=>{
        if(result==null){
          this.messageService.add({severity : 'warn', summary : 'Advertencia!', detail: "Não existem dados na banco de dados para esta lista!"});
          return;
        }
        let pessoasList: PessoasList[] = [];
        for (var index = 0; index < result.length; index++) {
          var pessoa = result[index] as PessoasList;
          pessoasList[index]  = pessoa;
          
        }
        this.pessoasList  = pessoasList;
        
          
      },
      error =>{
        console.log(error);
      }

    )
   
  }

  detalhesPessoa(pessoas:any){
    this.router.navigate(["/pessoa/"+pessoas.id]);
  }


}
