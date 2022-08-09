import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesService } from './heroes.service';
import { HttpClientModule } from '@angular/common/http';
import { ListadoDeHeroesModule } from './listado-de-heroes/listado-de-heroes.module';
import { HeroProfileModule } from './hero-profile/hero-profile.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListadoDeHeroesModule,
    HeroProfileModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
