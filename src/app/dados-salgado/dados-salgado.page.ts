import { Component, OnInit } from '@angular/core';
import { ISalgado } from '../model/ISalgado.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados-salgado',
  templateUrl: './dados-salgado.page.html',
  styleUrls: ['./dados-salgado.page.scss'],
})
export class DadosSalgadoPage implements OnInit {

  salgado: ISalgado;
  
  public qtd = 1;
  public valor = 0;

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.salgado = this.dadosService.pegarDados('salgado')
    console.log('Dado enviado', this.salgado);
    this.valorInicial();
  }

  valorInicial(){
    this.valor = this.salgado.preco;
  }

  somar(){
    this.qtd+=1;
    this.valor = this.salgado.preco * this.qtd;
  }

  subtrair(){
    this.qtd-=1;
    this.valor = this.salgado.preco * this.qtd
    if (this.qtd < 1) {
      this.qtd = 1
      this.valorInicial();
    }
  }

}
