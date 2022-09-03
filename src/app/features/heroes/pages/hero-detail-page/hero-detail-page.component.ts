import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
	selector: 'app-hero-detail-page',
	templateUrl: './hero-detail-page.component.html',
	styleUrls: ['./hero-detail-page.component.scss']
})
export class HeroDetailPageComponent implements OnInit {

	hero: Hero;

	constructor(
		private route: ActivatedRoute,
		private heroService: HeroService) { }

	ngOnInit() {
		const heroId = this.route.snapshot.paramMap.get('id');
		this.hero = this.heroService.getHero(Number(heroId));
	}
}
