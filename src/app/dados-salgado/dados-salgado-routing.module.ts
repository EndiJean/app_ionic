import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosSalgadoPage } from './dados-salgado.page';

const routes: Routes = [
  {
    path: '',
    component: DadosSalgadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosSalgadoPageRoutingModule {}
