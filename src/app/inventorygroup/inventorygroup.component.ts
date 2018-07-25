import {Component} from '@angular/core'

import {Http ,Response } from '@angular/http';

import {Post} from '../post';
@Component({
 
 selector :'my-inventorygroup',
 templateUrl:'./inventorygroup.component.html',

 styleUrls:['./inventorygroup.component.css'],




})






export class InventorygroupComponent {








    invGroup(groupid,sort,groupname,alias)
    {

        alert(groupid);
        alert(sort);
        alert(groupname);
        alert(alias);



                   
        
     let c=groupid+ ','+ sort + ','+groupname + ','+alias;

    // this.http.post('/inventoryGroup'+ c, {})


    // .subscribe(result=>{console.log(result)})  

    }



}