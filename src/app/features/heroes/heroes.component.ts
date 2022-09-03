import { Component, OnInit } from '@angular/core';
import { Hero } from './interfaces/hero';
import { HeroService } from './services/hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

	heroes: number[];

	constructor(private heroService: HeroService) {
		this.heroes = this.heroService.getHeroesIndexes();
	}

	ngOnInit(): void {
	}

}
