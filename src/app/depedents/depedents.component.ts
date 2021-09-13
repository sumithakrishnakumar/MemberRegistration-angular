import { TextAttribute } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CommonService } from '../register/common.service';

@Component({
  selector: 'app-depedents',
  templateUrl: './depedents.component.html',
  styleUrls: ['./depedents.component.css']
})
export class DepedentsComponent implements OnInit {
  registerdepedentname:any;
  registerdepedent1contact:any;
  registerdepedentpan:any;
  registerdepedentnumber:any;
  registerdepedentrelationship:any;
  ishiddenform:boolean=true;
  depedentname2:any;
  depedentrelation2:any;
  dependent1success:boolean=false;
  dependent2success:boolean=false;
  ishiddenadddependent:boolean=false;
  ishiddenviewdependent:boolean=true;
  ishiddensubmit:boolean=false;
  ishiddenedit:boolean=true;
  dependent1edit:boolean=false;
  editdependent2:boolean=true;
  disabledsubmit:boolean=false;
  editdependent2disabled:boolean=true;
  registerdepedentcontact:any;

  ngOnInit(): void {
  }
  adddependent2(){
    console.log("hide")
this.ishiddenform=false;
  }
  onclosedependent2(){
    this.ishiddenform=true;
  }

  keyPressAlphaspace(event:any) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z\s]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
  constructor(private commonService: CommonService) { }


  onsubmit(){

    
  }

  adddependent1(formObj:any){
    this.dependent1success=true;

console.log(formObj)

this.commonService.addDependent(formObj).subscribe((response:any)=>{
  console.log("user has been added")
  });

  this.ishiddensubmit=true;
  this.ishiddenedit=false;
  setInterval(()=> {
    this.dependent1success = false;
},4000)
}


dependent2successdata(formObj:any){
this.dependent2success=true;
this.commonService.addDependent2(formObj).subscribe((response:any)=>{
  console.log("user has been added")
  });


setInterval(()=> {
  this.dependent2success = false;
  this.ishiddenadddependent=true;
  this.ishiddenviewdependent=false;

},4000)
this.ishiddenform=true;



}
editdependent1(){
  this.dependent1edit = true;
  setInterval(()=> {
    this.dependent1edit = false;
},4000)
}
editdependent2button(){
  this.ishiddenform=false;
}

keyPressNumbers(event:any) {
  var charCode = (event.which) ? event.which : event.keyCode;
  // Only Numbers 0-9
  if ((charCode < 48 || charCode > 57)) {
    event.preventDefault();
    return false;
  } else {
    return true;
  }
}

contactnumber = new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);

  getErrorContact() {
    if (this.contactnumber.hasError('required')) {
      return 'you must enter a contact number';
    }

    return this.contactnumber.hasError('pattern') ? 'Please, Enter 10 digit Mobile Number.' : '';
  }

}
