export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image:string
}

export const products:any[] = [
    {
      id: 1,
      image:'/assets/m-1.jpg',
      name: 'White Pallazzo',
      price: 799,
      description: 'White Pallazzo'
    },
    {
        id: 2,
      image:'/assets/m-2.jpg',
      name: 'Head-wraps',
        price: 500,
      description:'Head-wraps'
    },
    {
        id: 3,
      image:'/assets/m-4.jpg',
      name: 'Blue Jeans',
      price: 800,
      description: 'Blue Jeans'
    },
    {
        id: 4,
      image:'/assets/m-5.jpg',
      name: 'Red Blazer',
      price: 1000,
      description: 'Red Blazer'
    },
    {
        id: 5,
      image:'/assets/m-6.jpg',
      name: 'Red Sneakers',
      price: 900,
      description: 'Red Sneakers'
    },
    {
        id: 6,
      image:'/assets/m-7.jpg',
      name: 'Black & White Hat',
      price: 600,
      description: 'Black & White Hat'
    },
    { id: 7,
      image:'/assets/m-8.jpg',
      name: 'White Jumpsuits',
      price: 850,
      description: 'White Jumpsuits'
    }
  ]