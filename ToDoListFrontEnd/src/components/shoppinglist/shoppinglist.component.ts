import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Item
{
  id: number
  label:string
  checked: boolean
}
@Component({
  selector: 'app-shoppinglist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})

export class ShoppinglistComponent {
  items:Item[] = [];
  newItem : string = '';
  id:number = 0;

  addItem()
  {
    if(this.newItem == "")
    {
      return;
    }
    this.items.push({id : this.id++, label: this.newItem, checked: false});
    this.newItem = '';
    //call backend and save
  }

  saveCheckedValue(event: any, id: number){
    let item: Item = this.items.find(e=> e.id ==id)!;
    item.checked = event.target.checked;
  }

  deleteCheckedItems()
  {
    this.items = this.items.filter(e => !e.checked);
  }
}


