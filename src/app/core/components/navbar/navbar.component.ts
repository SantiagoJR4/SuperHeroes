import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { HeroService } from '@features/heroes/services/hero.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	constructor(private router: Router,
		private heroService: HeroService) { }

	ngOnInit(): void {
	}

	public buscarHeroe(search: NgForm): void {
		this.heroService.seleccionHeroes(search.value.heroName);

		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		this.router.onSameUrlNavigation = 'reload';

		this.router.navigate(['']).then(() =>
			this.heroService.seleccionHeroes('')
		);
	}
}
