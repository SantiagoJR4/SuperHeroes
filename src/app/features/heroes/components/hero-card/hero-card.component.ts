import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';

@Component({
	selector: 'app-hero-card',
	templateUrl: './hero-card.component.html',
	styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

	@Input() heroId: number;
	hero: Hero;

	constructor(private heroService: HeroService) { }

	ngOnInit(): void {
		this.hero = this.heroService.getHero(this.heroId);
	}

}
