import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

ngOnInit():void {
this.openAbout();
}

openAbout(){
  const dialogRef = this.dialog.open(about);
  dialogRef.afterClosed().subscribe((result) => {
    console.log(`Dialog result: ${result}`);
  })
}


}



@Component({
  selector: 'about',
  templateUrl: 'about.html',
  styleUrls: ['about.scss'],
})
export class about {
  constructor(public dialog: MatDialog) {}
}
