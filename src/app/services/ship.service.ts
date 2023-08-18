import { Injectable } from '@angular/core';

export interface Ships {
  data: {
    lightShip: Ships;
    mediumShip: Ships;
    heavyShip: Ships;
    scoutShip: Ships;

    cargoShip: Ships;
    heavyCargoShip: Ships;
    recyclerShip: Ships;
    colonisateur: Ships;
  };
}

export interface Ship {
  name: string;
  type: string;

  shipPv: number;
  shipDamage: number;
  shipSpeed: number;
  shipQuantity: number;
  shipCapacity: number;

  ironPrice: number;
  diamondPrice: number;
  hydrogenePrice: number;
  energyPrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class ShipService {
  constructor() {}

  public shipName = '';
  public shipNameSrc = '';
  public shipType = '';
  public shipID = 0;

  public shipPv = 0;
  public shipDamage = 0;
  public shipSpeed = 0;
  public shipQuantity = 0;
  public shipCapacity = 0;
  public shipFuel = 0;

  public shipIronPrice = 0;
  public shipDiamondPrice = 0;
  public shipHydrogenPrice = 0;
  public shipEnergyPrice = 0;
  public eMessage = '';

  public lightShipQuantity!: number;
  public mediumShipQuantity!: number;
  public heavyShipQuantity!: number;
  public scoutShipQuantity!: number;
  public cargoShipQuantity!: number;
  public heavyCargoShipQuantity!: number;
  public recyclerShipQuantity!: number;
  public colonisateurQuantity!: number;


  public shipList = [
    {
      id: 0,
      name: 'Chasseur léger',
      quantity: 47,
      type: 'Combat',
      pv : 100,
      damage : 100,
      speed : 3,
      capacity: 0,
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'lightShip',
    },
    {
      id: 1,
      name: 'Chasseur lourd',
      quantity: 13,
      type: 'Combat',
      pv : 500,
      damage : 100,
      speed : 2,
      capacity: 0,
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'mediumShip',
    },
    {
      id: 2,
      name: 'Destroyer',
      quantity: 2,
      type: 'Combat',
      pv : 3000,
      damage : 500,
      speed : 1,
      capacity: 0,
      ironPrice: 2000,
      hydrogenPrice: 2000,
      diamondPrice: 2000,
      nameSrc: 'heavyShip',
    },
    {
      id: 3,
      name: 'Eclaireur',
      quantity: 45,
      type: 'Combat',
      pv : 50,
      damage : 50,
      speed : 4,
      capacity: 0,
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'scoutShip',
    },

    {
      id: 4,
      name: 'Transporteur léger',
      quantity: 20,
      type: 'Civil',
      pv : 50,
      damage : 10,
      speed : 2,
      capacity: 600,
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'cargoShip',
    },
    {
      id: 5,
      name: "Transporteur lourd",
      quantity: 15,
      type: 'Civil',
      pv : 100,
      damage : 20,
      speed : 1,
      capacity: 1800,
      ironPrice: 2000,
      hydrogenPrice: 2000,
      diamondPrice: 2000,
      nameSrc: 'heavyCargoShip',
    },
    {
      id: 6,
      name: 'Récolteur',
      quantity: 1,
      type: 'Civil',
      pv : 50,
      damage : 10,
      speed : 2,
      capacity: 300,
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'recyclerShip',
    },
    {
      id: 7,
      name: 'Colonisateur',
      quantity: 2,
      type: 'Civil',
      pv : 100,
      damage : 100,
      speed : 3,
      capacity: 0,
      ironPrice: 5000,
      hydrogenPrice: 5000,
      diamondPrice: 5000,
      nameSrc: 'colonisateur',
    },
  ];




  checkShipInfo(token: string) {
    return fetch('http://localhost:8080/ship', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-token': token,
      },
    });
  }
}
