/* eslint-disable max-len */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISalgado } from '../model/ISalgado.model';
import { DadosService } from '../services/dados.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public pathImgs   = '../../assets/img/';
  titulo = 'UniFCV Salgados';

  public categorias = [
    { codigo: 1, nome: 'Pizzas'    },
    { codigo: 2, nome: 'Burguers'  },
    { codigo: 3, nome: 'Assados'   },
    { codigo: 4, nome: 'Cachorrão' }
  ];

  public slideOpts = {
    slidesPerView: 2
  };

  listaSalgados: ISalgado[] = [
    {
      codigo: 1,
      nome: 'Frango com catupiry',
      preco: 49.90,
      imagem: 'piz-1-2.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 1 ,
      visibled: false
    },
    {
      codigo: 2,
      nome: 'Strogonoff de frango',
      preco: 55.90,
      imagem: 'piz-2-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 1 ,
      visibled: false
    },
    {
      codigo: 3,
      nome: 'Strogonoff de carne',
      preco: 55.90,
      imagem: 'piz-3-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 1 ,
      visibled: false
    },
    {
      codigo: 4,
      nome: 'Quatro queijos',
      preco: 40.90,
      imagem: 'piz-4-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 1 ,
      visibled: false
    },
    {
      codigo: 5,
      nome: 'Hambúrguer de costela',
      preco: 23.99,
      imagem: 'ham-1-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 2,
      visibled: false
    },
    {
      codigo: 6,
      nome: 'Hambúrguer com cheddar',
      preco: 25.00,
      imagem: 'ham-2-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 2,
      visibled: false
    },
    {
      codigo: 7,
      nome: 'Hambúrguer americano',
      preco: 19.99,
      imagem: 'ham-3-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 2,
      visibled: false
    },
    {
      codigo: 8,
      nome: 'Croissant 3 queijos',
      preco: 9.99,
      imagem: 'croi-1-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 3,
      visibled: false
    },
    {
      codigo: 10,
      nome: 'Croissant frango',
      preco: 9.99,
      imagem: 'croi-2-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 3,
      visibled: false
    },
    {
      codigo: 11,
      nome: 'Croissant presunto e queijo',
      preco: 9.99,
      imagem: 'croi-3-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 3,
      visibled: false
    },
    {
      codigo: 12,
      nome: 'Coxinha de frango',
      preco: 5.90,
      imagem: 'cox-1-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 3,
      visibled: false
    },
    {
      codigo: 13,
      nome: 'Esfirra de carne',
      preco: 6.90,
      imagem: 'esf-1-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 3,
      visibled: false
    },
    {
      codigo: 14,
      nome: 'Simples',
      preco: 10.00,
      imagem: 'dog-1-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 4,
      visibled: false
    },
    {
      codigo: 15,
      nome: 'Duplo',
      preco: 12.00,
      imagem: 'dog-2-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 4,
      visibled: false
    },
    {
      codigo: 16,
      nome: 'Cachorrão de frango',
      preco: 18.00,
      imagem: 'dog-3-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 4,
      visibled: false
    },
    {
      codigo: 17,
      nome: 'Cachorrão de calabresa',
      preco: 18.00,
      imagem: 'dog-4-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 4,
      visibled: false
    },
    {
      codigo: 18,
      nome: 'Cachorrão de bacon',
      preco: 18.00,
      imagem: 'dog-5-1.jpg',
      descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      categoria: 4,
      visibled: false
    },

  ];

  public selected = 1;

  constructor(
    public dadosService: DadosService,
    public route: Router,
    private navCtrl: NavController) {
      this.setSelected(1);
    }

  exibirSalgado(salgado: ISalgado){
    this.dadosService.guardarDados('salgado', salgado);
    this.route.navigateByUrl('/dados-salgado');
  };

  public setSelected(codigoCategoria) {
    this.selected = codigoCategoria;

    this.listaSalgados.map(el => el.visibled = false);

    this.listaSalgados
    .filter(el => el.categoria === this.selected)
    .map(el => el.visibled = true);
  }

  public formataValor(valor) {
    let retorno = '';
    const formatar = Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    retorno = formatar.format(valor);
    retorno = 'R$ ' + retorno;

    return retorno;
  }

}
