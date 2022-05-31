import { Component, OnInit } from '@angular/core';
import { ScoreListaService } from '../service/score-lista.service';
import { ScoreList } from 'src/model/score-list';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-score-lista',
  templateUrl: './score-lista.component.html',
  styleUrls: ['./score-lista.component.css']
})
export class ScoreListaComponent implements OnInit {

  cols: any[];
  scoreList: ScoreList[];
  score: ScoreList = {
    id: null,
    scoreDescricao: null,
    inicial: null,
    final: null
  }
  selectedScore: ScoreList = {
    id: null,
    scoreDescricao: null,
    inicial: null,
    final: null
  }

  constructor(private scoreListaService: ScoreListaService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.cols = [
      {field: "scoreDescricao", header: "Score Descrição"},
      {field: "inicial", header: "Inicial"},
      {field: "final", header: "Final"}
    ];
    this.getAll();
  }


  getAll() {
    
    this.scoreListaService.getAll().subscribe(
      (result: any)=>{
        if(result==null){
          this.messageService.add({severity : 'warn', summary : 'Advertencia!', detail: "Não existem dados na banco de dados para esta lista!"});
          return;
        }
        let scoreList: ScoreList[] = [];
        for (var index = 0; index < result.length; index++) {
          var score = result[index] as ScoreList;
          scoreList[index]  = score;
          
        }
        this.scoreList  = scoreList;
        
          
      },
      error =>{
        console.log(error);
      }

    )
   
  }
}
