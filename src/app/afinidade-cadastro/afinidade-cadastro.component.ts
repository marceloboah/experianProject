import { Component, OnInit } from '@angular/core';
import { Afinidade } from 'src/model/afinidade';
import { AfinidadeCadastroService } from '../service/afinidade-cadastro.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListboxModule } from 'primeng/listbox';
import { SelectItemGroup } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { PanelModule } from 'primeng/panel';


@Component({
  selector: 'app-afinidade-cadastro',
  templateUrl: './afinidade-cadastro.component.html',
  styleUrls: ['./afinidade-cadastro.component.css']
})

export class AfinidadeCadastroComponent implements OnInit {

  displaySaveDialog:any=null;
  afinidadesList: Afinidade[];
  afinidade: Afinidade = {
    id: null,
    regiao: null,
    estados: null
    
  }

  results:any=null;

  uf: any[];
  selectedUF: any[]=null;
  isValid: boolean= true;
  listaEstados: string[]=null;

  constructor(private http: HttpClient, private afinidadeCadastroService: AfinidadeCadastroService, private messageService: MessageService, private confirmationService: ConfirmationService) {
    
  }

  ngOnInit(): void {
   this.displaySaveDialog=true;
   this.populateUF();
  }



  validate(){
    this.isValid=true;
    var valida = this.selectedUF;
    
    
    
    if(this.afinidade.regiao=="" || !this.afinidade.regiao || this.afinidade.regiao==null ){
      this.isValid=false;
      this.messageService.add({severity : 'warn', summary : 'Advertencia!', detail: "Preencha o campo Região!"});
    }
    if(this.selectedUF == undefined || this.selectedUF == null || valida.length == 0 ){
      this.isValid=false;
      this.messageService.add({severity : 'warn', summary : 'Advertencia!', detail: "Selecione uma Estado!"});
    }
    this.save();
  }

  save(){
    if(this.isValid){
      this.afinidadeCadastroService.save(this.afinidade,this.selectedUF).subscribe(
        (result:any) => {
          
          this.messageService.add({severity: 'success', summary:'Resultado', detail: "Item salvo"});
          location.reload();
        },
        error =>{
          console.log(error);
        }
      );
    }   
  }
  
  populateUF(){
    this.uf =[{"uf": "AC"},
    {"uf": "AL"},
    {"uf": "AM"},
    {"uf": "AP"},
    {"uf": "BA"},
    {"uf": "CE"},
    {"uf": "DF"},
    {"uf": "ES"},
    {"uf": "GO"},
    {"uf": "MA"},
    {"uf": "MG"},
    {"uf": "MS"},
    {"uf": "MT"},
    {"uf": "PA"},
    {"uf": "PB"},
    {"uf": "PE"},
    {"uf": "PI"},
    {"uf": "PR"},
    {"uf": "RJ"},
    {"uf": "RN"},
    {"uf": "RO"},
    {"uf": "RR"},
    {"uf": "RS"},
    {"uf": "SC"},
    {"uf": "SE"},
    {"uf": "SP"},
    {"uf": "TO"}];
  }
  
}
