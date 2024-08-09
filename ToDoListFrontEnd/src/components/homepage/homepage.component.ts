import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  
  constructor(private router:Router){}

  goToPage(pageName: string):void{
    console.log('hi');
    console.log(this.router.navigate([`/${pageName}`]));
  }
}
