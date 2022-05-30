import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TokenService } from '../service/token.service';
import { Token } from 'src/model/token';
import { PessoasListaService } from '../service/pessoas-lista.service';
import { PessoasList } from 'src/model/pessoas-list';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import {ConfirmationService} from 'primeng/api';
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
        label : "Novo",
        icon: 'pi pi-fw pi-plus',
        command : ()=> this.deletar()
      },
      {
        label : "Editar",
        icon: 'pi pi-fw pi-pencil',
        command : ()=> this.deletar()
      },
      {
        label : "Excluir",
        icon: 'pi pi-fw pi-times',
        command : ()=> this.deletar()
      }
    ]
    this.getAll();
    
  }
  
  getToken(){
    this.tokenService.getToken();
  }
  deletar(){

  }

  getAll() {
    
    this.pessoasListaService.getAll().subscribe(
      (result: any)=>{
        let personas: PessoasList[] = [];
        for (var index = 0; index < result.length; index++) {
          var persona = result[index] as PessoasList;
          personas[index]  = persona;
          
        }
        this.pessoasList  = personas;
          console.log("vai obj");
          console.log(this.pessoasList);
      },
      error =>{
        console.log(error);
      }

    )
    

   
  }

  detalhesPessoa(pessoas:any){
    console.log("detalhesPessoa"+pessoas.id);
    this.router.navigate(["/pessoa/"+pessoas.id]);
  }


}
