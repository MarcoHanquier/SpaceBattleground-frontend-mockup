import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ShipService } from 'src/app/services/ship.service';

export interface Ships {
  data: {
    lightShip: Ship;
    mediumShip: Ship;
    heavyShip: Ship;
    scoutShip: Ship;

    cargoShip: Ship;
    heavyCargoShip: Ship;
    recyclerShip: Ship;
    colonisateur: Ship;

    [shipName: string]: Ship;
  };
}

export interface Ship {
  name: string;
  type: string;

  pv: number;
  damage: number;
  speed: number;
  quantity: number;
  capacity: number;
  fuel: number;

  ironPrice: number;
  diamondPrice: number;
  hydrogenPrice: number;
  energyPrice: number;
}

@Component({
  selector: 'app-shipyard',
  templateUrl: './shipyard.component.html',
  styleUrls: ['./shipyard.component.scss'],
})
export class ShipyardComponent implements OnInit {
  public token!: string;

  public name!: string;
  public type!: string;

  public ironPrice!: number;
  public diamondPrice!: number;
  public hydrogenPrice!: number;
  public energyPrice!: number;

  public pv!: number;
  public quantity!: number;
  public speed!: number;
  public fuel!: number;
  public capacity!: number;
  public damage!: number;

  public lightShip = 'lightShip';
  public mediumShip = 'mediumShip';
  public heavyShip = 'heavyShip';
  public scoutShip = 'scoutShip';

  public cargoShip = 'cargoShip';
  public heavyCargoShip = 'heavyCargoShip';
  public recyclerShip = 'recyclerShip';
  public colonisateur = 'colonisateur';

  public lightShipQuantity!: number;
  public mediumShipQuantity!: number;
  public heavyShipQuantity!: number;
  public scoutShipQuantity!: number;

  public cargoShipQuantity!: number;
  public heavyCargoShipQuantity!: number;
  public recyclerShipQuantity!: number;
  public colonisateurQuantity!: number;

  constructor(public dialog: MatDialog, public shipService: ShipService) {}

  openShipDetail(shipID: number) {
    this.shipService.shipName = this.shipService.shipList[shipID].name;
    this.shipService.shipType = this.shipService.shipList[shipID].type;

    this.shipService.shipPv = this.shipService.shipList[shipID].pv;
    this.shipService.shipDamage = this.shipService.shipList[shipID].damage;
    this.shipService.shipSpeed = this.shipService.shipList[shipID].speed;
    this.shipService.shipQuantity = this.shipService.shipList[shipID].quantity;
    this.shipService.shipCapacity = this.shipService.shipList[shipID].capacity;

    this.shipService.shipIronPrice = this.shipService.shipList[shipID].ironPrice;
    this.shipService.shipDiamondPrice = this.shipService.shipList[shipID].diamondPrice;
    this.shipService.shipHydrogenPrice = this.shipService.shipList[shipID].hydrogenPrice;

    this.shipService.shipNameSrc = this.shipService.shipList[shipID].nameSrc;
    this.shipService.shipID = shipID;


    const dialogRef = this.dialog.open(shipDetail);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }



  quantityInUI(quantity : number) {
    return this.shipService.shipList[quantity].quantity;
  }

  getShipInfo(token: string) {
    this.shipService.checkShipInfo(token).then((response) => {
      if (response.status === 200) {
        response.json().then((body: Ships) => {
          console.log('mon body ', body);
          localStorage.setItem('ships', JSON.stringify(body));
        });
      }
    });
  }

  ngOnInit(): void {
    this.shipService.lightShipQuantity = this.shipService.shipList[0].quantity;
    this.shipService.mediumShipQuantity = this.shipService.shipList[1].quantity;
    this.shipService.heavyShipQuantity = this.shipService.shipList[2].quantity;
    this.shipService.scoutShipQuantity = this.shipService.shipList[3].quantity;
    this.shipService.cargoShipQuantity = this.shipService.shipList[4].quantity;
    this.shipService.heavyCargoShipQuantity = this.shipService.shipList[5].quantity;
    this.shipService.recyclerShipQuantity = this.shipService.shipList[6].quantity;
    this.shipService.colonisateurQuantity = this.shipService.shipList[7].quantity;
  }
}

@Component({
  selector: 'shipDetail',
  templateUrl: 'shipDetail.html',
  styleUrls: ['shipDetail.scss'],
})
export class shipDetail {
  constructor(public dialog: MatDialog, private shipService: ShipService) {}

  public token!: string;

  public shipName!: string;
  public shipNameSrc!: string;
  public shipType!: string;

  public shipPv!: number;
  public shipCapacity!: number;
  public shipQuantity!: number;
  public shipFuel!: number;
  public shipDamage!: number;
  public shipSpeed!: number;

  public shipIronPrice!: number;
  public shipDiamondPrice!: number;
  public shipHydrogenPrice!: number;
  public shipEnergyPrice!: number;

  public lightShipQuantity!: number;
  public mediumShipQuantity!: number;
  public heavyShipQuantity!: number;
  public scoutShipQuantity!: number;

  public cargoShipQuantity!: number;
  public heavyCargoShipQuantity!: number;
  public recyclerShipQuantity!: number;
  public colonisateurQuantity!: number;


  buildShip() {

    this.shipService.shipList[this.shipService.shipID].quantity =
      this.shipService.shipList[this.shipService.shipID].quantity + 1;
  }

  getShipInfo(token: string) {
    this.shipService.checkShipInfo(token).then((response) => {
      if (response.status === 200) {
        response.json().then((body: Ships) => {
          console.log('mon body ', body);
          localStorage.setItem('ships', JSON.stringify(body));
        });
      }
    });
  }

  ngOnInit(): void {

    this.shipName = this.shipService.shipName;
    this.shipType = this.shipService.shipType;
    this.shipPv = this.shipService.shipPv;
    this.shipCapacity = this.shipService.shipCapacity;
    this.shipQuantity = this.shipService.shipQuantity;
    this.shipFuel = this.shipService.shipFuel;
    this.shipDamage = this.shipService.shipDamage;
    this.shipSpeed = this.shipService.shipSpeed;
    this.shipIronPrice = this.shipService.shipIronPrice;
    this.shipDiamondPrice = this.shipService.shipDiamondPrice;
    this.shipHydrogenPrice = this.shipService.shipHydrogenPrice;
    this.shipEnergyPrice = this.shipService.shipEnergyPrice;
    this.shipNameSrc = this.shipService.shipNameSrc;
  }
}

@Component({
  selector: 'shipBuild',
  templateUrl: 'shipBuild.html',
  styleUrls: ['shipBuild.scss'],
})
export class shipBuild {
  constructor(public dialog: MatDialog) {}
}
