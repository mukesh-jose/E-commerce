import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'  },
  { path: 'login', component:LoginComponent },
  { path: 'products-list', component:ProductsListComponent },
  { path: 'product/:id', component:ProductComponent },
  { path: 'cart', component:CartComponent },
  {path:'add-product',component:AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
