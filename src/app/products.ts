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
      description: 'Stylish and comfortable white palazzo pants for versatile, trendy looks'
    },
    {
        id: 2,
      image:'/assets/m-2.jpg',
      name: 'Head-wraps',
        price: 500,
      description:'Chic head-wraps to elevate your style and add flair to any outfit'
    },
    {
        id: 3,
      image:'/assets/m-4.jpg',
      name: 'Blue Jeans',
      price: 800,
      description: ' Classic blue jeans, perfect for everyday wear and timeless fashion'
    },
    {
        id: 4,
      image:'/assets/m-5.jpg',
      name: 'Red Blazer',
      price: 1000,
      description: 'A bold and sophisticated red blazer to make a powerful fashion statement'
    },
    {
        id: 5,
      image:'/assets/m-6.jpg',
      name: 'Red Sneakers',
      price: 900,
      description: 'Trendy red sneakers for a mix of style and comfort on the go'
    },
    {
        id: 6,
      image:'/assets/m-7.jpg',
      name: 'Black & White Hat',
      price: 600,
      description: ' Striking black and white hat for a touch of elegance and flair'
    },
    { id: 7,
      image:'/assets/m-8.jpg',
      name: 'White Jumpsuits',
      price: 850,
      description: 'Elegant white jumpsuits, a versatile addition to your wardrobe for various occasions.'
    }
  ]