import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosSalgadoPageRoutingModule } from './dados-salgado-routing.module';

import { DadosSalgadoPage } from './dados-salgado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosSalgadoPageRoutingModule
  ],
  declarations: [DadosSalgadoPage]
})
export class DadosSalgadoPageModule {}
