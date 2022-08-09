import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoDeHeroesComponent } from './listado-de-heroes.component';
import { ListadoDeHeroesRountingModule } from './listado-de-heroes-rounting.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListadoDeHeroesComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ListadoDeHeroesRountingModule,
    FormsModule
  ]
})
export class ListadoDeHeroesModule { }
