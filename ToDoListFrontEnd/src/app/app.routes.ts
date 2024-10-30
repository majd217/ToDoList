import { Routes } from '@angular/router';
import { ShoppinglistComponent } from '../components/shoppinglist/shoppinglist.component';


export const routes: Routes = [
    {path: 'ShoppingList', component: ShoppinglistComponent}, 
    {path: '**', redirectTo: 'ShoppingList', pathMatch: 'full'},
];
 
