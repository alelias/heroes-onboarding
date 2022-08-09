import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroProfileComponent } from './hero-profile.component';
import { ModalPollComponent } from './modal-poll/modal-poll.component';

const routes: Routes = [
  {
    path: '',
    component: HeroProfileComponent
  },
  {
    path: 'modal',
    component: ModalPollComponent
  },
]


@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HeroProfileRoutingModule { }
