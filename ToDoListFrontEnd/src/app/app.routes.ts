import { HomepageComponent } from '../components/homepage/homepage.component';
import { Routes } from '@angular/router';
import { ShoppinglistComponent } from '../components/shoppinglist/shoppinglist.component';
import { WeeklyMealPlanComponent } from '../components/weeklymealplan/weeklymealplan.component';


export const routes: Routes = [
    {path: 'ShoppingList', component: ShoppinglistComponent}, 
    {path: 'HomePage', component: HomepageComponent},
    {path: 'WeeklyMealPlan', component: WeeklyMealPlanComponent},

    {path: '', redirectTo: '/HomePage', pathMatch: 'full'},
];
