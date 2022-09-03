import { Injectable } from '@angular/core';
import heroesJson from '@assets/static/heroes.json';
import { Hero } from '../interfaces/hero';

@Injectable({
	providedIn: 'root'
})
export class HeroService {

	private heroes: Hero[] = heroesJson;
	selectedHeroesIndexes: number[];

	constructor() {
		this.selectedHeroesIndexes = [...Array(this.heroes.length).keys()].map(i => i + 1);
	}

	getHero(id: number): Hero {
		return this.heroes[id - 1];
	}

	getHeroIndex(hero: Hero): any {
		return this.heroes.indexOf(hero);
	}

	seleccionHeroes(name: string) {
		this.selectedHeroesIndexes = this.heroes.filter(
			hero => hero.name.toLocaleLowerCase()
				.includes(name.toLocaleLowerCase())
		).map(hero => hero.id)
	}

	getHeroesIndexes(): number[] {
		return this.selectedHeroesIndexes;
	}
}
