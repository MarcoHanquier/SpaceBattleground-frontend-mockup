import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { PlanetService } from 'src/app/services/planet.service';

export interface Ressources {
  data: {
    iron: Ressource;
    diamond: Ressource;
    hydrogene: Ressource;
    energy: Ressource;
  };
}

export interface Ressource {
  quantity: number;
  maxStock: number;
}

export interface Planets {
  data: {
    planet1: Planet;
    planet2: Planet;
    planet3: Planet;
    planet4: Planet;
    planet5: Planet;
    planet6: Planet;
    planet7: Planet;
    planet8: Planet;
    planet9: Planet;
    planet10: Planet;

    [planetName: string]: Planet;
  };
}

export interface Planet {
  name: string;
  positionX: number;
  positionY: number;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public token!: string;
  public iron: number = 0;
  public diamond!: number | null;
  public hydrogene!: number;
  public energy!: number;
  public currentTime: Date = new Date();
  public spaceHour: number = 32;
  public spaceMinute: number = 0;
  public spaceSecond: number = 0;
  public planetName: string = 'Alzuland';
  public positionX: number = 19;
  public positionY: number = 8;
  public planet1!: string;
  public planet2!: string;
  public planet3!: string;
  public planet4!: string;
  public planet5!: string;
  public planet6!: string;
  public planet7!: string;
  public planet8!: string;
  public planet9!: string;
  public planet10!: string;

  constructor(private router: Router, public navbarService: NavbarService, private planetService: PlanetService) {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1);
  }

  toMessages() {
    this.router.navigate(['/', 'messages']);
  }

  toAccount() {
    this.router.navigate(['/', 'account']);
  }

  checkQuantityRessource(token: string) {
    this.navbarService.checkQuantityRessource(token).then((response) => {
      if (response.status === 200) {
        response.json().then((body: Ressources) => {
          localStorage.setItem('ressources', JSON.stringify(body));
        });
      }
    });
  }

  checkPlanetInfo(token: string) {
    return fetch('http://localhost:8080/planet', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-token': token,
      },
    });
  }

  updatePlanetNameInUI() {
    this.planetName = this.planetService.planetList[this.planetService.planetId].name;
    return this.planetName;
  }

  updatePositionXInUI() {
    this.positionX = this.planetService.planetList[this.planetService.planetId].positionX;
    return this.positionX;
  }

  updatePositionYInUI() {
    this.positionY = this.planetService.planetList[this.planetService.planetId].positionY;
    return this.positionY;
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('x-token') ?? '';
    this.checkQuantityRessource(this.token);
    let ressources: Ressources = JSON.parse(localStorage.getItem('ressources') ?? '');
    this.iron = ressources.data.iron.quantity;
    this.diamond = ressources.data.diamond.quantity;
    this.hydrogene = ressources.data.hydrogene.quantity;
    this.energy = ressources.data.energy.quantity;
    this.planetName = this.planetService.planetName;
  }
}
