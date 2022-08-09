import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoDeHeroesComponent } from './listado-de-heroes.component';
import { ListadoDeHeroesRountingModule } from './listado-de-heroes-rounting.module';



@NgModule({
  declarations: [
    ListadoDeHeroesComponent
  ],
  imports: [
    CommonModule,
    ListadoDeHeroesRountingModule
  ]
})
export class ListadoDeHeroesModule { }
