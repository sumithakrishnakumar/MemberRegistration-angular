import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogElementsComponent } from '../dialog-elements/dialog-elements.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  
  // constructor(public dialog: MatDialog) {}

  // openDialog() {
  //   this.dialog.open(DialogElementsComponent);
  // }
username:any;
password:any;

  ngOnInit(): void {
  }
}

