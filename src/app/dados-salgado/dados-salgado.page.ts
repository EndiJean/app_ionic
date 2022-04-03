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

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.salgado = this.dadosService.pegarDados('salgado')
    console.log('Dado enviado', this.salgado);
  }

}
