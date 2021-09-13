import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { validate } from 'json-schema';
import { CommonService } from '../register/common.service';
import { Country } from '../register/country';
import { CustomValidators } from '../register/custom-validators';
import { SelectService } from '../register/SelectService';

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  @ Input() registerdepedentname:any;
  

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
  dependentbillamount:any;
  dependentproviderName:any;
  dependentclaimdischarge:any;
  dependentclaimadmission:any;
  dependentclaimdob:any;
  dependentclaimname:any;
finaldate:any;
billamount:any;
providerName:any;
claimdischarge:any;
claimadmission:any;
claimdob:any;
claimname:any;
claimssuccess:boolean=false;
dependent1claimsuccess:boolean=false;
  claimIfinal:any;
  claimIfinaldependent:any;
  ngOnInit(): void {
    console.log(this.registerdepedentname)

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


dependent2successdata(){
this.dependent2success=true;

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
  formatDate(maxDate:any) {
    var d = new Date(maxDate),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    this.finaldate= [year, month, day].join('-');
    console.log(this.finaldate);
}
adddependentclaims(){
  this.ishiddenform=false;
}
addclaims(formObj:any){
  this.claimssuccess=true;
  var randomChars = '0123456789';
  var result = '';
  
  for ( var i = 0; i < 10; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }

  this.claimIfinal="claimId- "+result+" Member claimed successfully"
  setInterval(()=> {
    this.claimssuccess = false;
},4000)
this.commonService.addclaims(formObj).subscribe((response:any)=>{
  console.log("user has been added")
  });

}
addclaimsdependent(formObj:any){
this.dependent1claimsuccess=true;
var randomChars = '0123456789';
var result = '';

for ( var i = 0; i < 10; i++ ) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
}

this.claimIfinaldependent="claimId- "+result+" Memberdependent claimed successfully"
setInterval(()=> {
  this.dependent1claimsuccess = false;
},4000)
this.commonService.addclaimsdependent(formObj).subscribe((response:any)=>{
  console.log("user has been added")
  });
}
}
