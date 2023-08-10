import { Injectable } from '@angular/core';

export interface Buildings {
  data: {
    ironMine: Building;
    diamondMine: Building;
    hydrogeneMine: Building;
    energyMine: Building;

    laboratory: Building;
    robotFactory: Building;
    shipyard: Building;
    drill: Building;
  };
}

export interface Building {
  name: string;
  type: string;
  description: string;
  level: number;
  ironPrice: number;
  diamondPrice: number;
  hydrogenePrice: number;
  energyPrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class BuildService {
  constructor() {}

  public buildingName = '';
  public buildingNameSrc = '';
  public buildingIsBuild!: Boolean;
  public buildingType = '';
  public buildingLevel = 0;
  public buildingDescription = '';
  public buildingCapacity = 0;

  public buildingIronPrice = 0;
  public buildingDiamondPrice = 0;
  public buildingHydrogenPrice = 0;
  public buildingEnergyPrice = 0;
  public buildingID = 0;
  public robotFactoryLevel!: number;
  public laboratoryLevel!: number;
  public shipyardLevel!: number;
  public terraformerLevel!: number;
  public eMessage = '';

  public buildingList = [
    {
      id: 0,
      name: 'Usine de robots',
      level: 0,
      description:
        'Construit des robots qui à leur tour accélèrent la vitesse de construction des bâtiments et des vaisseaux',
      type: 'Production',
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'robotFactory',
    },
    {
      id: 1,
      name: 'Laboratoire',
      level: 0,
      description: "Un laboratoire très bien équipé permettant de débloquer l'accès aux recherches",
      type: 'Production',
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'laboratory',
    },
    {
      id: 2,
      name: 'Chantier spatial',
      level: 0,
      description: "Partez dans l'espace ! Débloque le chantier spatial.",
      type: 'Production',
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'shipyard',
    },
    {
      id: 3,
      name: 'Terraformeur',
      level: 0,
      description: "Rend la planète habitable, permettant d'augmenter sa capacité",
      type: 'Production',
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'terraformer',
    },

    {
      id: 4,
      name: 'Mine de fer',
      level: 0,
      description: 'Une mine permettant de récolter du fer',
      type: 'Récolte',
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'robotFactory',
    },
    {
      id: 5,
      name: "Extracteur d'Hydrogène",
      level: 0,
      description: "Un extracteur permettant d'obtenir de l'hydrogène à partir de n'importe quelle atmosphère",
      type: 'Récolte',
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'robotFactory',
    },
    {
      id: 6,
      name: 'Mine de Diamant',
      level: 0,
      description: 'Une mine permettant de récolter du diamant',
      type: 'Récolte',
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'robotFactory',
    },
    {
      id: 7,
      name: 'Centrale électrique',
      level: 0,
      description: "Produit de l'énergie grâce au soleil",
      type: 'Récolte',
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'robotFactory',
    },

    {
      id: 8,
      name: 'Hangar de fer',
      level: 0,
      description: 'Permet de stocker plus de fer',
      type: 'Récolte',
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'robotFactory',
    },
    {
      id: 9,
      name: "Hangar d'hydrogène",
      level: 0,
      description: "Permet de stocker plus d'hydrogène",
      type: 'Récolte',
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'robotFactory',
    },
    {
      id: 10,
      name: 'Hangar de diamants',
      level: 0,
      description: 'Permet de stocker plus de diamant',
      type: 'Récolte',
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'robotFactory',
    },
    {
      id: 11,
      name: 'Foreuse',
      level: 0,
      description: "Permet d'augmenter la production de fer, hydrogène et diamant de x %",
      type: 'Récolte',
      ironPrice: 200,
      hydrogenPrice: 200,
      diamondPrice: 200,
      nameSrc: 'robotFactory',
    },
  ];

  checkBuildingInfo(token: string) {
    return fetch('http://localhost:8080/building', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-token': token,
      },
    });
  }

  buildBuilding(token: string) {
    return fetch('http://localhost:8080/buildings/{name}', {
      method: 'PUT',
      headers: {
        'x-token': token,
      },
      // body: JSON.stringify({

      //   level : )
    });
  }

  buildShip(token: string) {
    return fetch('http://localhost:8080/shipyard/build', {
      method: 'POST',
      headers: {
        'x-token': token,
      },
    });
  }
}
