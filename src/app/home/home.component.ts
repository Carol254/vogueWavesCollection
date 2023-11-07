import { Component } from '@angular/core';
import { Route, RouteReuseStrategy } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
  arrivalImages: any[] = [
    {
      img1:'/assets/m-7.jpg'
    },
    {
      img1:'/assets/m-6.jpg'
    },
    {
      img1:'/assets/m-8.jpg'
    },
  ]

  constructor(private router:Router){
    
  }
  
  OnAboutUs(){
    this.router.navigate(['/about-us']);
  }

  onOffers(){
    this.router.navigate(['/offers']);
  }

}
