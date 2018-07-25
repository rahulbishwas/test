


import { Component, OnInit } from '@angular/core';
import { SalesCategoryService } from './salescategory.service';
import {Post} from '../post';

import {Http ,Response } from '@angular/http';




@Component ({
   selector: 'my-category',

   templateUrl: './salescategory.component.html',


   styleUrls:['./salescategory.component.css'],
   providers: [SalesCategoryService]
   

})
export   class   SalesCategoryComponant implements OnInit {


  resulttypes=[];
  // salescategoryDetails;
    new123:boolean;
 

 
 constructor( private saleCategory:SalesCategoryService, private http: Http) {
   this.new123=false;
 
  }
  ngOnInit() {


 alert("gregl");
   
    this.saleCategory.salescategoryDetails()
    .subscribe(typeData => this.resulttypes= typeData);
    console.log(this.resulttypes);
    


    // this.module.configDetails().subscribe(moduleData => this.allItemDetails = moduleData);
    // console.log(this.allItemDetails)



    // saveModuleName(){
    //     //alert(this.moduleName)
    //     this.salesModuleName.moduleServiceDetails(this.moduleName)
        
    //        }
  	 

   

    // salescategoryDetails(): Observable<Post[]>{
    //     this._salesCategory. salescategoryDetails()
    // .subscribe(typeData => this.resulttypes= typeData);
    // console.log(this.resulttypes);


 }

 
new(){

  this.new123=true;
}

myCategory(name1,name2,name3){
           
let c=name1+ ','+ name2 + ','+name3;

        this.http.post('/myCategoryDetail'+ c, {})
        

        .subscribe(result=>{console.log(result)})

      }

    }


      
        

