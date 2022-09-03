import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroDetailPageComponent } from './pages/hero-detail-page/hero-detail-page.component';


@NgModule({
	declarations: [
		HeroesComponent,
		HeroCardComponent,
		HeroDetailPageComponent,
	],
	imports: [
		CommonModule,
		HeroesRoutingModule
	]
})
export class HeroesModule { }
