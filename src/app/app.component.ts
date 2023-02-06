import { Component,ViewChild } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild('side-nav') sideNav!:MatSidenavModule;

  constructor(){}

  clickHandler()
  {
  
  }
}
