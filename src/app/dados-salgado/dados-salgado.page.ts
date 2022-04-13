import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ISalgado } from '../model/ISalgado.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados-salgado',
  templateUrl: './dados-salgado.page.html',
  styleUrls: ['./dados-salgado.page.scss'],
})
export class DadosSalgadoPage implements OnInit {

  public pathImgs   = '../../assets/img/';
  salgado: ISalgado;
  public qtd = 1;
  public valor = 0;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.salgado = this.dadosService.pegarDados('salgado');
    console.log('Dado enviado', this.salgado);
    this.valorInicial();
  }

  valorInicial(){
    this.valor = this.salgado.preco;
  }

  somar(){
    this.qtd++;
    this.valor = this.salgado.preco * this.qtd;
  }

  subtrair(){
    if(this.qtd > 1){
      this.qtd--;
      this.valor = this.salgado.preco * this.qtd;
    }
 }

 public formataValor(valor) {
  let retorno = '';
  const formatar = Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  retorno = formatar.format(valor);
  retorno = 'R$ ' + retorno;

  return retorno;
}

}
