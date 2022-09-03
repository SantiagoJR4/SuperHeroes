import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroDetailPageComponent } from './pages/hero-detail-page/hero-detail-page.component';

const routes: Routes = [
	{ path: '', component: HeroesComponent },
	{ path: ':id', component: HeroDetailPageComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HeroesRoutingModule { }
