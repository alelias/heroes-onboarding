import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroProfileRoutingModule } from './hero-profile-routing.module';
import { ModalPollComponent } from './modal-poll/modal-poll.component';
import { CapitalizePipe } from './capitalize.pipe';



@NgModule({
  declarations: [
    HeroProfileComponent,
    ModalPollComponent
  ],
  imports: [
    CommonModule,
    HeroProfileRoutingModule,
  ]
})
export class HeroProfileModule { }
