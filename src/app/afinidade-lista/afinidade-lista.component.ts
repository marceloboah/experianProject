import { Component, OnInit } from '@angular/core';
import { AfinidadeListaService } from '../service/afinidade-lista.service';
import { Afinidade } from 'src/model/afinidade';


interface AfinidadeDTO {
  id: number;
  regiao: string;
  estados: string[];
}

@Component({
  selector: 'app-afinidade-lista',
  templateUrl: './afinidade-lista.component.html',
  styleUrls: ['./afinidade-lista.component.css']
})
export class AfinidadeListaComponent implements OnInit {

  cols: any[];
  afinidadesList: Afinidade[];
  afinidade: Afinidade = {
    id: null,
    regiao: null,
    estados: null
  }
  selectedAfinidade:any=null;
  listinhaUF:any[]=null;
  constructor(private afinidadeListaService: AfinidadeListaService) { }

  ngOnInit(): void {
    this.cols = [
      {field: "regiao", header: "Região"},
      {field: "estados", header: "Estados"}
    ];
    this.getListAfinidades();
  }

  getListAfinidades(){
    
        this.afinidadeListaService.getListAfinidades().subscribe(
          (result: any)=>{
            var afinidadesList: AfinidadeDTO[] = [];
            
            for (var index = 0; index < result.length; index++) {
              var afinidade = result[index] as AfinidadeDTO;
              afinidadesList[index]  = afinidade;
              var listaEstados:any=[];
              for (var index2 = 0; index2 < afinidade.estados.length; index2++) {
                var element = afinidade.estados[index2];
                listaEstados.push(element['estado']);
              }
              afinidadesList[index].estados=listaEstados;
            }
            
            this.afinidadesList  = afinidadesList;

          },
          error =>{
            console.log(error);
          }
    
        )
  }
}
