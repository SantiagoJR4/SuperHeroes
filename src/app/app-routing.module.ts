import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './core/pages/about-page/about-page.component';

const routes: Routes = [
	{ path: 'heroes', loadChildren: () => import('./features/heroes/heroes.module').then(m => m.HeroesModule) },
	{ path: 'about', component: AboutPageComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
