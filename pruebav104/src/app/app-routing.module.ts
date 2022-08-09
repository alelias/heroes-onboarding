import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoDeHeroesComponent } from './listado-de-heroes/listado-de-heroes.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { ModalPollComponent } from './hero-profile/modal-poll/modal-poll.component';


const routes: Routes = [
  { path: 'listado-heroes', component: ListadoDeHeroesComponent},
  { path: 'heroe/:id', component: HeroProfileComponent},
  { path: 'modal-poll', component: ModalPollComponent},
  { path: '**', redirectTo: '/listado-heroes'}
];


/*
const routes: Routes = [
  {
    path: 'listado-heroes',
    component: ListadoDeHeroesComponent,
    loadChildren: () => import('./listado-de-heroes/listado-de-heroes.module').then(m => m.ListadoDeHeroesModule)
  },
  {
    path: 'modal-poll',
    component: ModalPollComponent,
    loadChildren: () => import('./modal-poll/modal-poll.module').then(m => m.ModalPollModule)
  },
  {  path: '**', redirectTo: 'listado-heroes' },
  
  {
    path: 'heroe/:id',
    component: HeroProfileComponent,
    loadChildren: () => import('./hero-profile/hero-profile.module').then(m => m.HeroProfileModule)
  },
  
]
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
