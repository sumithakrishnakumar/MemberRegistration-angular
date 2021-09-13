import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { validate } from 'json-schema';
import { CommonService } from './common.service';
import { Country } from './country';
import { CustomValidators } from './custom-validators';
import { SelectService } from './SelectService';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registermembername:string = '';
  registermemberpan:string = '';
  registermembernumber:string ='';
  registermemberdob:string='';
  registermemberage:string='';
  registermemberpassword:string='';
  registermemberemail:string='';
  registermembercountry:string='';
   Registerstatus:string='sumitha';
  showAge:any;
  countryid:any;
  selected:any;
  Registerstatustest:any;
  showAgevalue:any;
  errorAge:any;
  successmemeber:boolean=false;
  ishide:boolean=false;
  ishideprofile=true;
  profiledit:boolean=false;

  constructor(private commonService: CommonService) { }

  addUser(formObj:any){
     
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    
    for ( var i = 0; i < 3; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

    this.Registerstatustest='Member ID=>R-'+result  +'    Registered Successfully';
    console.log(formObj);
    this.commonService.createUser(formObj).subscribe((response:any)=>{
      console.log("user has been added")
    })
    
this.successmemeber=true;

  }
 

  countryControl=new FormControl('',Validators.required);
  stateControl=new FormControl('',Validators.required)
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ageform =new FormControl('',[Validators.pattern("/^(?:1[8-9]|[2-5][0-9]|60)$$/")])
  getAgeData(){
    return this.ageform.hasError('pattern') ? 'Age must be greater than 18' : '';
  }
  password=new FormControl('', 
    [
      Validators.required,
      Validators.minLength(8),
      CustomValidators.patternValidator(/\d/, { hasNumber: true }),
      CustomValidators.patternValidator(/[A-Z]/, {
        hasCapitalCase: true
      }),
      // check whether the entered password has a special character
      CustomValidators.patternValidator(
        /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        {
          hasSpecialCharacters: true
        }
      ),
    ]
  );


  getPassworderrormsg(){
    if(this.password.hasError('required')){
      return 'You must enter a password';
    }
    else if(this.password.hasError('minlength')){
      return 'password must be atleast 8 characters long';
    }
    else if(this.password.hasError('hasNumber') ){
    return 'Must Contain atleast one numbers';

  }

  else if(this.password.hasError('hasCapitalCase') ){
    return 'Must Contain atleast one captial letters';

  }
 
  else if(this.password.hasError('hasSpecialCharacters')){
    return 'Must Contain atleast one specialcharacters';
  }

  return null ;
}

contactnumber = new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);

  getErrorContact() {
    if (this.contactnumber.hasError('required')) {
      return 'you must enter a contact number';
    }

    return this.contactnumber.hasError('pattern') ? 'Please, Enter 10 digit Mobile Number.' : '';
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
  keyPressAlphanumeric(event:any) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z0-9]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
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

  onCreateAge(registermemberdob:any){
 
    if(this.registermemberdob){
        const convertAge = new Date(this.registermemberdob);
        const timeDiff = Math.abs(Date.now() - convertAge.getTime());
     this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
     this.registermemberage=this.showAge;
    }
  }


  private selectService: SelectService = new SelectService;
  selectedCountry: Country = new Country(2, 'Brazil');
  countries:any[] = [];
  states:any[] = [];



  maxDate:any;
  finaldate:any;
  ngOnInit() {
    this.maxDate = new Date();
    this.formatDate(this.maxDate);
    console.log('Date'+this.maxDate);
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }
  onSelect(countryid:any) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
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
onCreateAgefunction(registermemberdob:any){
 
  if(this.registermemberdob){
      const convertAge = new Date(this.registermemberdob);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
   this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  if(this.showAge>18){
    this.showAgevalue=this.showAge;
    
  }else{
 
  this.errorAge="Age must greater than 18"
 
    
  }
}
}
profile(){
  this.ishide=true;
  this.ishideprofile=false;
}
editprofile(){
 this.profiledit=true;
}
}
