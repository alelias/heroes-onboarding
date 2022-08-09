import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroProfileComponent } from './hero-profile.component';
import { HeroProfileRoutingModule } from './hero-profile-routing.module';



@NgModule({
  declarations: [
    HeroProfileComponent
  ],
  imports: [
    CommonModule,
    HeroProfileRoutingModule
  ]
})
export class HeroProfileModule { }
