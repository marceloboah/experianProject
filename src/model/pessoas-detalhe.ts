export class PessoasDetalhe{
    constructor(public id:number = null, 
        public nome:string = null,
        public idade:string = null,
        public cidade:string = null,
        public telefone:string = null,
        public estado:string = null,
        public scoreDescricao:string = null,
        public estados:string[] = null){
        
    }
}