import { Component, OnInit } from '@angular/core';
import { PessoasCadastroService } from '../service/pessoas-cadastro.service';
import { PessoasCadastro } from 'src/model/pessoas-cadastro';
import { Afinidade } from 'src/model/afinidade';
import { DropdownModule } from 'primeng/dropdown'; 
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { InputNumberModule } from "primeng/inputnumber";
import { Router } from '@angular/router';

interface AfinidadeDTO {
  id: number;
  regiao: string;
  estados: string[];
}

@Component({
  selector: 'app-pessoas-cadastro',
  templateUrl: './pessoas-cadastro.component.html',
  styleUrls: ['./pessoas-cadastro.component.css']
})
export class PessoasCadastroComponent implements OnInit {

  pessoasList: PessoasCadastro[];
  pessoas: PessoasCadastro = {
    id: null,
    nome: null,
    telefone: null,
    idade: null,
    cidade: null,
    estado: null,
    score: null,
    regiao: null
  }
  afinidadesList: Afinidade[];
  afinidade: Afinidade = {
    id: null,
    regiao: null,
    estados: null
    
  }
  employes:any=null;
  ufList:any=null;
  selectedRegiao:any=null;
  selectedUF:any=null;
  displaySaveDialog: boolean= true;
  isValid: boolean= true;
  constructor(private pessoasCadastroService: PessoasCadastroService, private router: Router, private messageService: MessageService, private confirmationService: ConfirmationService) {   }
  
  ngOnInit(): void {
    this.getListAfinidades();
    
  }

  validate(){
    this.isValid=true;
    if(this.pessoas.nome=="" || !this.pessoas.nome || this.pessoas.nome==null ){
      this.isValid=false;
      this.messageService.add({severity : 'warn', summary : 'Advertencia!', detail: "Preencha o campo Nome!"});
    }
    if(this.pessoas.telefone=="" || !this.pessoas.telefone || this.pessoas.telefone==null ){
      this.isValid=false;
      this.messageService.add({severity : 'warn', summary : 'Advertencia!', detail: "Preencha o campo Telefone!"});
    }
    if(this.pessoas.idade=="" || !this.pessoas.idade || this.pessoas.idade==null){
      this.isValid=false;
      this.messageService.add({severity : 'warn', summary : 'Advertencia!', detail: "Preencha o campo Idade!"});
    }
    if(this.selectedRegiao=="" || !this.selectedRegiao ){
      this.isValid=false;
      this.messageService.add({severity : 'warn', summary : 'Advertencia!', detail: "Selecione uma Região!"});
    }else{
      this.pessoas.regiao=this.selectedRegiao.regiao;
    }
    if(this.selectedUF=="" || !this.selectedUF ){
      this.isValid=false;
      this.messageService.add({severity : 'warn', summary : 'Advertencia!', detail: "Selecione uma Estado!"});
    }else{
      this.pessoas.estado=this.selectedUF.estado;
    }
    if(this.pessoas.cidade=="" || !this.pessoas.cidade || this.pessoas.cidade==null){
      this.isValid=false;
      this.messageService.add({severity : 'warn', summary : 'Advertencia!', detail: "Preencha o campo Cidade!"});
    }
    if(this.pessoas.score=="" || !this.pessoas.score || this.pessoas.score==null){
      this.isValid=false;
      this.messageService.add({severity : 'warn', summary : 'Advertencia!', detail: "Preencha o campo Score!"});
    }else{
      var numberValue: number = +this.pessoas.score;
      if(numberValue>=1001){
        this.isValid=false;
        this.messageService.add({severity : 'warn', summary : 'Advertencia!', detail: "Score não pode ser maior que 1000!"});
      }
    }
    
    this.save();
    
    
  }



  save(){
    if(this.isValid){
      this.pessoasCadastroService.save(this.pessoas).subscribe(
        (result:any) => {
          this.messageService.add({severity: 'success', summary:'Resultado', detail: "Item salvo"});
          this.router.navigate(["/pessoas"]);
  
        },
        error =>{
          console.log(error);
        }
      );
    }   
  }

  /*verificaValor(event){
    console.log(event.value);
    console.log(this.selectedUF.estado);
  }*/
  configuraComboEstados(event){
    this.ufList=this.selectedRegiao.estados;
  }

  getListAfinidades(){

    this.pessoasCadastroService.getListAfinidades().subscribe(
      (result: any)=>{
        var afinidadesList: AfinidadeDTO[] = [];
        for (var index = 0; index < result.length; index++) {
          var afinidade = result[index] as AfinidadeDTO;
          afinidadesList[index]  = afinidade;
          
        }
        this.afinidadesList  = afinidadesList;
      },
      error =>{
        console.log(error);
      }

    )
    

  }
  
}
