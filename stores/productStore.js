import { observable, makeObservable, action } from "mobx";
import { Component } from "react";
import { Animated } from 'react-native';
import ImageUrls from "../utility/imageUrls";

class ShopStore{
  constructor () {
    makeObservable(this)
  }
    @observable cartDelArray = [];
    @observable loading = true;
    @observable page = 0;
    @observable posts = [];
    @observable array = this.data;
    @observable addedArray = [];
    @observable badgeScale = new Animated.Value(0);
    @observable i = 0;
    
    @action update = (value) => {
      this.data = value; 
    }
    
    @observable data = [{
        id : 1,
        name : 'Books',
        stock : 10,
        added : 0,
        price :'Rs 400',
        pressed : 'false',
        image : ImageUrls.books
    },
      {
        id: 2,
        name: 'Flower',
        stock: 5,
        added: 0,
        price: 'Rs 100',
        pressed: 'false',
        image: ImageUrls.flower
      },
      {
        id: 3,
        name: 'Socks',
        stock: 20,
        added: 0,
        price: 'Rs 40',
        pressed: 'false',
        image: ImageUrls.socks
      },
      {
        id: 4,
        name: 'Pants',
        stock: 8,
        added: 0,
        price: 'Rs 1400',
        pressed: 'false',
        image: ImageUrls.pants
      },
      {
        id: 5,
        name: 'Shirt',
        stock: 16,
        added: 0,
        price: 'Rs 2600',
        pressed: 'false',
        image: ImageUrls.shirt
      },
      {
        id: 6,
        name: 'Pillows',
        stock: 32,
        added: 0,
        price: 'Rs 800',
        pressed: 'false',
        image: ImageUrls.pillow
      },
      {
        id: 7,
        name: 'Women Top',
        stock: 40,
        added: 0,
        price: 'Rs 3800',
        pressed: 'false',
        image: ImageUrls.womenTop
      },
      {
        id: 8,
        name: 'Shoes',
        stock: 5,
        added: 0,
        price: 'Rs 4000',
        pressed: 'false',
        image: ImageUrls.shoes
      },
      {
        id: 9,
        name: 'Bags',
        stock: 12,
        added: 0,
        price: 'Rs 2700',
        pressed: 'false',
        image: ImageUrls.bags
      },
      {
        id: 10,
        name: 'Towels',
        stock: 8,
        added: 0,
        price: 'Rs 850',
        pressed: 'false',
        image: ImageUrls.towel
      },
      {
        id: 11,
        name: 'Shampoo',
        stock: 10,
        added: 0,
        price: 'Rs 350',
        pressed: 'false',
        image: ImageUrls.shampoo
      },
      {
        id: 12,
        name: 'Sanitizer',
        stock: 5,
        added: 0,
        price: 'Rs 180',
        pressed: 'false',
        image: ImageUrls.sanitizer
      },
      {
        id: 13,
        name: 'makeup',
        stock: 20,
        added: 0,
        price: 'Rs 40',
        pressed: 'false',
        image: ImageUrls.makeup
      },
      {
        id: 14,
        name: 'Pants',
        stock: 8,
        added: 0,
        price: 'Rs 14000',
        pressed: 'false',
        image: ImageUrls.pants
      },
      {
        id: 15,
        name: 'Bedsheet',
        stock: 16,
        added: 0,
        price: 'Rs 2600',
        pressed: 'false',
        image: ImageUrls.bedsheets
      },
      {
        id: 16,
        name: 'Blanket',
        stock: 32,
        added: 0,
        price: 'Rs 8000',
        pressed: 'false',
        image: ImageUrls.blanket
      },
      {
        id: 17,
        name: 'Women Suit',
        stock: 40,
        added: 0,
        price: 'Rs 8800',
        pressed: 'false',
        image: ImageUrls.womenSuit
      },
      {
        id: 18,
        name: 'Women Kurta',
        stock: 5,
        added: 0,
        price: 'Rs 4000',
        pressed: 'false',
        image: ImageUrls.womenKurta
      },
      {
        id: 19,
        name: 'Cap',
        stock: 12,
        added: 0,
        price: 'Rs 270',
        pressed: 'false',
        image: ImageUrls.cap
      },
      {
        id: 20,
        name: 'Curtains',
        stock: 8,
        added: 0,
        price: 'Rs 8500',
        pressed: 'false',
        image: ImageUrls.curtains
      },
      {
        id: 21,
        name: 'Phone',
        stock: 10,
        added: 0,
        price: 'Rs 84000',
        pressed: 'false',
        image: ImageUrls.phone
      },
      {
        id: 22,
        name: 'Women Dress',
        stock: 5,
        added: 0,
        price: 'Rs 10000',
        pressed: 'false',
        image: ImageUrls.womenDress
      },
      {
        id: 23,
        name: 'Lipstick',
        stock: 20,
        added: 0,
        price: 'Rs 900',
        pressed: 'false',
        image: ImageUrls.lipstick
      },
      {
        id: 24,
        name: 'Watch',
        stock: 8,
        added: 0,
        price: 'Rs 14000',
        pressed: 'false',
        image: ImageUrls.watch
      },
      {
        id: 25,
        name: 'Colors',
        stock: 16,
        added: 0,
        price: 'Rs 2600',
        pressed: 'false',
        image: ImageUrls.colors
      },
      {
        id: 26,
        name: 'Sofa',
        stock: 32,
        added: 0,
        price: 'Rs 11800',
        pressed: 'false',
        image: ImageUrls.sofa
      },
      {
        id: 27,
        name: 'Boots',
        stock: 40,
        added: 0,
        price: 'Rs 8800',
        pressed: 'false',
        image: ImageUrls.boots
      },
      {
        id: 28,
        name: 'Slippers',
        stock: 5,
        added: 0,
        price: 'Rs 400',
        pressed: 'false',
        image: ImageUrls.slippers
      },
      {
        id: 29,
        name: 'Water Bottle',
        stock: 12,
        added: 0,
        price: 'Rs 700',
        pressed: 'false',
        image: ImageUrls.waterBottle
      },
      {
        id: 30,
        name : 'Laptop',
        stock : 8,
        added : 0,
        price : 'Rs 85000',
        pressed : 'false',
        image : ImageUrls.laptop
      },
    ]
    
}


export default new ShopStore();