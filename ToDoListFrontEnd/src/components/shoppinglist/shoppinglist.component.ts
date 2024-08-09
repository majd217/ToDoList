import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Item} from './../../interfaces/Item';
import { ApiCalls } from '../../services/apiCalls';

@Component({
  selector: 'app-shoppinglist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css',
})

export class ShoppinglistComponent {
  items:Item[] = [];
  newItem : string = '';
  id:number = 0;
  itemList: Object;


  constructor(private apiCalls:ApiCalls){};

  addItem()
  {
    if(this.newItem == "")
    {
      return;
    }

    this.apiCalls.saveItems(this.items);
    

    this.apiCalls.fetchItems().subscribe(json => {
    
      let json1 = <any>json;
      for(const key in json){
        this.items = this.items.concat({id: Number(key), label: String(json1[key]), checked: Boolean(json1[key])});
      }
    });
    // this.items.push({id : this.id++, label: this.newItem, checked: false});
    this.newItem = '';
    console.log(this.id);    //call backend and save
  
  }


  saveCheckedValue(event: any, id: number){
    let item: Item = this.items.find(e=> e.id ==id)!;
    item.checked = event.target.checked;
  }

  deleteCheckedItems()
  {
    this.items = this.items.filter(e => !e.checked);
    console.log(this.items.filter(e => !e.checked));
  }
}


