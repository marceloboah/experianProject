import { Component, OnInit } from '@angular/core';
import { filter, pairwise } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { PessoasDetalheService } from '../service/pessoas-detalhe.service';
import { PessoasDetalhe } from 'src/model/pessoas-detalhe';

@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})


export class PessoasDetalheComponent implements OnInit {
  pessoas: PessoasDetalhe = {
    id: null,
    nome: null,
    idade: null,
    cidade: null,
    telefone: null,
    estado: null,
    scoreDescricao: null,
    estados: null
  }
  lastRoute:any = null;
  previousUrl: string;
  displaySaveDialog: boolean= true;
  constructor(public router: Router, private pessoasDetalheService: PessoasDetalheService) {
    router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.previousUrl = event.url;   
    });
   }
  
  ngOnInit(): void {

    this.getPessoasByPathId(this.previousUrl);
    this.displaySaveDialog = true;
  }


  getPessoasByPathId(path:any){
    this.pessoasDetalheService.getPessoasByPathId(path).subscribe(data =>  {
        this.pessoas=data;
        console.log(data)
      });
  }


}
