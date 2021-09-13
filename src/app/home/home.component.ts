import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  template:'<app-register></app-register>',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId:any;


  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.userId=params.get('userId') //+ string to number
})
  }

  ngOnInit(): void {
    console.log(history.state)

  }

 

}
function styleUrls(arg0: { selector: string; templateUrl: {}; }, arg1: { './home.component.html': any; }, arg2: { '<app-register></app-register>': any; }, styleUrls: any, arg4: string[]) {
  throw new Error('Function not implemented.');
}

