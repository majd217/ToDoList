import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
itemadded: number = 0;


addItem()
{
  let newItem = document.createElement("newitem")
  let item = (<HTMLInputElement>document.getElementById("item"))?.value;


  document.getElementById("itemsList")?.appendChild(newItem);
  (document.getElementById('item') as HTMLInputElement).value = "";

  let newCheckBoxID = 'checkbox_' + item;
  let newCheckBox = document.createElement("INPUT");
  newCheckBox.setAttribute("type", "checkbox");
  newCheckBox.setAttribute("id", newCheckBoxID);
  newItem.appendChild(newCheckBox);
  
  let newCheckLabel = document.createElement('LABEL');
  newCheckLabel.setAttribute('for', newCheckBoxID);
  let labelTextNode = document.createTextNode(item);
  newCheckLabel.appendChild(labelTextNode);
  newItem.appendChild(newCheckLabel);
}
}

