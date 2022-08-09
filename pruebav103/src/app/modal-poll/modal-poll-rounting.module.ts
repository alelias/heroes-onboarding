import { NgModule } from '@angular/core';
import { ModalPollComponent } from './modal-poll.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'modal-poll',
    component: ModalPollComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ModalPollRountingModule { }
