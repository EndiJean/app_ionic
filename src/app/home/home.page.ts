import { Component } from '@angular/core';
import { ISalgado } from '../model/ISalgado.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titulo = 'UniFCV Salgados';
  categoria = ['Pizza','Burguer'];

  listaSalgados: ISalgado[] = [
    {
      nome: 'Hambúrguer de costela',
      preco: 23.99,
      imagem: 'https://www.restodonte.com.br/recipePics/9900816.jpg?v114',
      descricao: 'sdafdfsa'
    },
    {
      nome: 'Hambúrguer com cheddar',
      preco: 25.00,
      // eslint-disable-next-line max-len
      imagem: 'https://www.academiadacarnefriboi.com.br/wp-content/uploads/2021/02/4094-hamburguerparaacademia1-1.jpg',
      descricao: 'abcdefghijklmnopqrstuvwxyz'
    },
    {
      nome: 'Hambúrguer americano',
      preco: 19.99,
      // eslint-disable-next-line max-len
      imagem: 'data:image/jpeg;base64,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',
      descricao: 'abcdefghijklmnopqrstuvwxyz'
    }
  ];

  constructor() {}

}