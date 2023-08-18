import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { buildingBuild } from '../buildings/buildings.component';
import { buildingDestroy } from '../buildings/buildings.component';
import { buildingDetail } from '../buildings/buildings.component';
import { BuildService } from 'src/app/services/build.service';

export interface Buildings {
  data: {
    ironMine: Building;
    diamondMine: Building;
    hydrogenMine: Building;
    energyMine: Building;

    ironStockage: Building;
    diamondStockage: Building;
    hydrogenStockage: Building;
    drillingMachine: Building;

    [buildingName: string]: Building;
  };
}

export interface Building {
  name: string;
  type: string;
  description: string;
  level: number;
  ironPrice: number;
  diamondPrice: number;
  hydrogenPrice: number;
  energyPrice: number;
  isBuild: boolean;

  timeToBuild: Date;
  timeToStart: Date;
}

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  constructor(public dialog: MatDialog, public buildService: BuildService) {}
  isBuilt = true;
  public token!: string;
  public ironMine = 'ironMine';
  public diamondMine = 'diamondMine';
  public hydrogenMine = 'hydrogenMine';
  public energyMine = 'energyMine';

  public ironStockage = 'ironStockage';
  public diamondStockage = 'diamondStockage';
  public hydrogenStockage = 'hydrogenStockage';
  public drillingMachine = 'drillingMachine';

  public ironMineLevel!: number;
  public hydrogenMineLevel!: number;
  public diamondMineLevel!: number;
  public energyMineLevel!: number;
  public ironStockageLevel!: number;
  public hydrogenStockageLevel!: number;
  public diamondStockageLevel!: number;
  public drillingMachineLevel!: number;



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

  checkBuildingInfo(token: string) {
    this.buildService.checkBuildingInfo(token).then((response) => {
      if (response.status === 200) {
        response.json().then((body: Buildings) => {
          console.log('mon body ', body);
          localStorage.setItem('buildings', JSON.stringify(body));
        });
      }
    });
  }

  levelInUI(level : number) {
    return this.buildService.buildingList[level].level;
  }

  ngOnInit(): void {
    this.buildService.ironMineLevel = this.buildService.buildingList[4].level;
    this.buildService.hydrogenMineLevel = this.buildService.buildingList[5].level;
    this.buildService.diamondMineLevel = this.buildService.buildingList[6].level;
    this.buildService.energyMineLevel = this.buildService.buildingList[7].level;
    this.buildService.ironStockageLevel = this.buildService.buildingList[8].level;
    this.buildService.hydrogenStockageLevel = this.buildService.buildingList[9].level;
    this.buildService.diamondStockageLevel = this.buildService.buildingList[10].level;
    this.buildService.drillingMachineLevel = this.buildService.buildingList[11].level;
  }
}
@Component({
  selector: 'upgrade',
  templateUrl: 'upgrade.html',
  styleUrls: ['upgrade.scss'],
})
export class Upgrade {
  constructor(public dialog: MatDialog) {}
  isBuilt = true;

  // upgradeBuilding() {
  //   // upgrade building with userID
  // }

  // openBuildingDestroy() {
  //   const dialogRef = this.dialog.open(buildingDestroy);
  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}
