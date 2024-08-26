import { HomepageComponent } from '../components/homepage/homepage.component';
import { Routes } from '@angular/router';
import { ShoppinglistComponent } from '../components/shoppinglist/shoppinglist.component';


export const routes: Routes = [
    {path: 'ShoppingList', component: ShoppinglistComponent}, 
    {path: 'HomePage', component: HomepageComponent},

    {path: '', redirectTo: '/HomePage', pathMatch: 'full'},
];
