import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { ReactiveFormsModule } from '@angular/forms'
import { Appproduct } from './product.component';
import { AppInventory } from './inventory/inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { NewitemComponent } from './newitem/newitem.component';
import { SaleComponent } from './sale/sale.component';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import  {SalesCategoryComponant} from './category/salescategory.component';
<<<<<<< HEAD
import {InventorygroupComponent} from './inventorygroup/inventorygroup.component';
=======
>>>>>>> origin/master

import { URLSearchParams } from '@angular/http';


const appRoutes: Routes = [
  // { path: 'Item', component: Appproduct },
   { path: 'Inventory', component: AppInventory },
    { path: 'Active', component: SaleComponent },
   { path: 'Newitem', component: NewitemComponent },
   {path:'SalesCategory', component: SalesCategoryComponant},
<<<<<<< HEAD
   {path:'Sale',component:SaleComponent},
   {path: 'InventoryGroup', component:InventorygroupComponent}
=======
   {path:'Sale',component:SaleComponent}
>>>>>>> origin/master
];

@NgModule ({
   imports: [ BrowserModule,FormsModule,HttpModule,ReactiveFormsModule,
   RouterModule.forRoot(appRoutes)],
   providers:[ProductService],
<<<<<<< HEAD
   declarations: [ AppComponent,Appproduct,AppInventory, NewitemComponent, SaleComponent,
    SalesCategoryComponant,InventorygroupComponent],
=======
   declarations: [ AppComponent,Appproduct,AppInventory, NewitemComponent, SaleComponent,SalesCategoryComponant],
>>>>>>> origin/master
   bootstrap: [ AppComponent ]
})
export class AppModule { }