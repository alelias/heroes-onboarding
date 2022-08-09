import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalPollComponent } from './modal-poll.component';
import { ModalPollRountingModule } from './modal-poll-rounting.module';



@NgModule({
  declarations: [
    ModalPollComponent
  ],
  imports: [
    CommonModule,
    ModalPollRountingModule
  ]
})
export class ModalPollModule { }
