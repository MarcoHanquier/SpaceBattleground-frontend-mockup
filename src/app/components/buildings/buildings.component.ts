import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BuildService } from 'src/app/services/build.service';
import { OnInit } from '@angular/core';
import { MethodService } from 'src/app/services/method.service';
import { NavbarService } from '../../services/navbar.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss'],
})
export class BuildingsComponent implements OnInit {
  public token!: string;
  public robotFactory = 'robotFactory';
  public laboratory = 'laboratory';
  public shipyard = 'shipyard';
  public terraformer = 'terraformer';

  public robotFactoryName!: string;
  public laboratoryName!: string;
  public shipyardName!: string;
  public terraformerName!: string;

  public robotFactoryLevel!: number;
  public laboratoryLevel!: number;
  public shipyardLevel!: number;
  public terraformerLevel!: number;
  constructor(public dialog: MatDialog, public buildService: BuildService) {}

  openBuildingDetail(buildingID: number) {
    this.buildService.buildingName = this.buildService.buildingList[buildingID].name;
    this.buildService.buildingNameSrc = this.buildService.buildingList[buildingID].nameSrc;
    this.buildService.buildingType = this.buildService.buildingList[buildingID].type;
    this.buildService.buildingDescription = this.buildService.buildingList[buildingID].description;
    this.buildService.buildingLevel = this.buildService.buildingList[buildingID].level;
    this.buildService.buildingIronPrice = this.buildService.buildingList[buildingID].ironPrice;
    this.buildService.buildingDiamondPrice = this.buildService.buildingList[buildingID].diamondPrice;
    this.buildService.buildingHydrogenPrice = this.buildService.buildingList[buildingID].hydrogenPrice;
    this.buildService.buildingID = buildingID;

    const dialogRef = this.dialog.open(buildingDetail);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }



  levelInUI(level : number) {
    return this.buildService.buildingList[level].level;
  }

  ngOnInit(): void {
    this.buildService.robotFactoryLevel = this.buildService.buildingList[0].level;
    this.buildService.laboratoryLevel = this.buildService.buildingList[1].level;
    this.buildService.shipyardLevel = this.buildService.buildingList[2].level;
    this.buildService.terraformerLevel = this.buildService.buildingList[3].level;
  }
}

@Component({
  selector: 'buildingDetail',
  templateUrl: 'buildingDetail.html',
  styleUrls: ['buildingDetail.scss'],
})
export class buildingDetail {
  constructor(public dialog: MatDialog, public router: Router, private buildService: BuildService) {}

  public buildingName!: string;
  public buildingNameSrc!: string;
  public buildingIsBuild!: Boolean;
  public buildingType!: string;
  public buildingLevel!: number;
  public buildingDescription!: string;
  public buildingCapacity!: string;
  public buildingIronPrice!: number;
  public buildingDiamondPrice!: number;
  public buildingHydrogenePrice!: number;
  public buildingEnergyPrice!: number;
  public token!: string;

  openBuildingBuild() {
    const dialogRef = this.dialog.open(buildingBuild);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openBuildingDestroy() {
    const dialogRef = this.dialog.open(buildingDestroy);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  toShipyard() {
    this.router.navigate(['/', 'shipyard']);
  }

  ngOnInit(): void {
    this.buildingName = this.buildService.buildingName;
    this.buildingType = this.buildService.buildingType;
    this.buildingLevel = this.buildService.buildingLevel;
    this.buildingDescription = this.buildService.buildingDescription;
    this.buildingIronPrice = this.buildService.buildingIronPrice;
    this.buildingDiamondPrice = this.buildService.buildingDiamondPrice;
    this.buildingHydrogenePrice = this.buildService.buildingHydrogenPrice;
    this.buildingEnergyPrice = this.buildService.buildingEnergyPrice;
    this.buildingNameSrc = this.buildService.buildingNameSrc;
    this.buildingIsBuild = this.buildService.buildingIsBuild;
  }
}

@Component({
  selector: 'buildingBuild',
  templateUrl: 'buildingBuild.html',
  styleUrls: ['buildingBuild.scss'],
})
export class buildingBuild implements OnInit {
  constructor(
    public dialog: MatDialog,
    public router: Router,
    private buildService: BuildService,
    private methodService: MethodService,
    private navbarService: NavbarService
  ) {}
  public buildingName!: string;
  public buildingNameSrc!: string;
  public buildingIsBuild!: Boolean;
  public buildingType!: string;
  public buildingLevel!: number;
  public buildingDescription!: string;
  public buildingCapacity!: string;
  public buildingIronPrice!: number;
  public buildingDiamondPrice!: number;
  public buildingHydrogenePrice!: number;
  public buildingEnergyPrice!: number;
  public token!: string;
  public ironPlayer!: number;
  public diamondPlayer!: number;
  public hydrogenePlayer!: number;
  public energyPlayer!: number;

  openErrorMessage() {
    const dialogRef = this.dialog.open(errorMessage);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  buildBuilding() {
    //     this.buildService.eMessage = 'ressources';
    //     this.openErrorMessage();
    this.buildService.buildingList[this.buildService.buildingID].level =
      this.buildService.buildingList[this.buildService.buildingID].level + 1;
  }

  ngOnInit() {
    this.token = localStorage.getItem('x-token') ?? '';
    this.buildingName = this.buildService.buildingName;
    this.buildingType = this.buildService.buildingType;
    this.buildingLevel = this.buildService.buildingLevel;
    this.buildingDescription = this.buildService.buildingDescription;
    this.buildingIronPrice = this.buildService.buildingIronPrice;
    this.buildingDiamondPrice = this.buildService.buildingDiamondPrice;
    this.buildingHydrogenePrice = this.buildService.buildingHydrogenPrice;
    this.buildingEnergyPrice = this.buildService.buildingEnergyPrice;
    this.buildingNameSrc = this.buildService.buildingNameSrc;
    this.buildingIsBuild = this.buildService.buildingIsBuild;
    console.log(this.buildingIsBuild, ' dans ng On init de building Build');
    let ressources = JSON.parse(localStorage.getItem('ressources') ?? '');
    this.ironPlayer = ressources.data.iron.quantity;
    this.diamondPlayer = ressources.data.diamond.quantity;
    this.hydrogenePlayer = ressources.data.hydrogene.quantity;
    this.energyPlayer = ressources.data.energy.quantity;
  }
}

@Component({
  selector: 'buildingDestroy',
  templateUrl: 'buildingDestroy.html',
  styleUrls: ['buildingDestroy.scss'],
})
export class buildingDestroy {
  constructor(private buildService: BuildService) {}

  public buildingNameSrc!: string;
  public buildingName!: string;

  destroyBuilding() {
    this.buildService.buildingList[this.buildService.buildingID].level = 0;
  }

  ngOnInit() {
    this.buildingNameSrc = this.buildService.buildingNameSrc;
    this.buildingName = this.buildService.buildingName;
  }
}

@Component({
  selector: 'errorMessage',
  templateUrl: 'errorMessage.html',
  styleUrls: ['errorMessage.scss'],
})
export class errorMessage {
  public eMessage!: string;
  constructor(private buildService: BuildService) {}

  ngOnInit() {
    this.eMessage = this.buildService.eMessage;
  }
}
