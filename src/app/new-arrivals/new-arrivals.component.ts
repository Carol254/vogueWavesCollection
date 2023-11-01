import { Component } from '@angular/core';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent {

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

}
