import {observable, makeObservable, action} from 'mobx';
import {Animated} from 'react-native';
import ImageUrls from '../utils/appConstants/imageUrls';

class ShopStore {
  @observable itemsList = [];
  @observable badgeScale = new Animated.Value(0);
  @observable badgeCount = 0;
  @observable sub_category = ' ';
  @observable badgeWishlistScale = new Animated.Value(0);
  @observable badgeWishlistCount = 0;
  @observable state = '';
  @observable homeBtnPressed = false;
  @observable workBtnPressed = false;
  @observable attrName = '';
  @observable floatingTitleName = '';
  @observable floatingTitleMobile = '';
  @observable floatingTitlePincode = '';
  @observable floatingTitleLocality = '';
  @observable floatingTitleLandmark = '';
  @observable floatingTitleAddress = '';
  @observable floatingTitleCity = '';
  @observable floatingTitleAlternate = '';
  @observable isFocused = false;
  @observable position = '';
  @observable values = '';
  @observable addressBtnPressed = false;

  @action updateDummyProductData = value => {
    this.dummyProductData = value;
  };

  @action updateAddress = value => {
    this.addressArray = value;
  };

  @action updateSubCategory = value => {
    this.sub_category = value;
  };

  @action updateFlatListArray = value => {
    this.itemsList = value;
  };

  @action updateCount = value => {
    this.badgeCount = value;
  };

  @action updateWishlistCount = value => {
    this.badgeWishlistCount = value;
  };

  @action updateattrName = value => {
    this.attrName = value;
  };

  @action updateisFocused = value => {
    this.isFocused = value;
  };

  @action updateValue = value => {
    this.values = value;
  };

  @action updatefloatingTitle = value => {
    this.floatingTitle = value;
  };

  @action updatestate = value => {
    this.state = value;
  };

  constructor() {
    makeObservable(this);
  }

  @observable dummyProductData = [
    {
      id: 1,
      name: 'Socks',
      stock: 20,
      added: 0,
      price: 'Rs 40',
      pressed: 'false',
      image: ImageUrls.socks,
      category: 'Winter Necessities',
    },
    {
      id: 2,
      name: 'Pants',
      stock: 8,
      added: 0,
      price: 'Rs 1400',
      pressed: 'false',
      image: ImageUrls.pants,
      category: 'Clothing',
    },
    {
      id: 5,
      name: 'Shirt',
      stock: 16,
      added: 0,
      price: 'Rs 2600',
      pressed: 'false',
      image: ImageUrls.shirt,
      category: 'Clothing',
    },
    {
      id: 6,
      name: 'Pillows',
      stock: 32,
      added: 0,
      price: 'Rs 800',
      pressed: 'false',
      image: ImageUrls.pillow,
      category: 'Home Decor',
      sub_category: 'Pillows',
    },
    {
      id: 7,
      name: 'Women Top',
      stock: 40,
      added: 0,
      price: 'Rs 3800',
      pressed: 'false',
      image: ImageUrls.womenTop,
      category: 'Clothing',
    },
    {
      id: 8,
      name: 'Sneakers',
      stock: 5,
      added: 0,
      price: 'Rs 4000',
      pressed: 'false',
      image: ImageUrls.shoes,
      category: 'Shoes',
      sub_category: 'Sneakers',
    },
    {
      id: 9,
      name: 'Bags',
      stock: 12,
      added: 0,
      price: 'Rs 2700',
      pressed: 'false',
      image: ImageUrls.bags,
      category: 'Daily Use',
      sub_category: 'Bags',
    },
    {
      id: 10,
      name: 'Towels',
      stock: 8,
      added: 0,
      price: 'Rs 850',
      pressed: 'false',
      image: ImageUrls.towel,
      category: 'Daily Use',
      sub_category: 'Towels',
    },
    {
      id: 11,
      name: 'Shampoo',
      stock: 10,
      added: 0,
      price: 'Rs 350',
      pressed: 'false',
      image: ImageUrls.shampoo,
      category: 'Daily Use',
      sub_category: 'Shampoos',
    },
    {
      id: 12,
      name: 'Sanitizer',
      stock: 5,
      added: 0,
      price: 'Rs 180',
      pressed: 'false',
      image: ImageUrls.sanitizer,
      category: 'Daily Use',
      sub_category: 'Sanitizers',
    },
    {
      id: 13,
      name: 'Makeup Pallates',
      stock: 20,
      added: 0,
      price: 'Rs 40',
      pressed: 'false',
      image: ImageUrls.pallate,
      category: 'Cosmetics',
      sub_category: 'Makeup Pallates',
    },
    {
      id: 14,
      name: 'Pants',
      stock: 8,
      added: 0,
      price: 'Rs 14000',
      pressed: 'false',
      image: ImageUrls.pants,
      category: 'Clothing',
    },
    {
      id: 15,
      name: 'Bedsheet',
      stock: 16,
      added: 0,
      price: 'Rs 2600',
      pressed: 'false',
      image: ImageUrls.bedsheets,
      category: 'Home Decor',
      sub_category: 'Bed Sheets',
    },
    {
      id: 19,
      name: 'Cap',
      stock: 12,
      added: 0,
      price: 'Rs 270',
      pressed: 'false',
      image: ImageUrls.cap,
      category: 'Clothing',
      sub_category: '',
    },
    {
      id: 20,
      name: 'Curtains',
      stock: 8,
      added: 0,
      price: 'Rs 8500',
      pressed: 'false',
      image: ImageUrls.curtains,
      category: 'Home Decor',
      sub_category: 'Curtains',
    },
    {
      id: 21,
      name: 'Phone',
      stock: 10,
      added: 0,
      price: 'Rs 84000',
      pressed: 'false',
      image: ImageUrls.iphone13,
      category: 'Electronics',
      sub_category: 'Phones',
    },
    {
      id: 22,
      name: 'Women Dress',
      stock: 5,
      added: 0,
      price: 'Rs 10000',
      pressed: 'false',
      image: ImageUrls.womenDress,
      category: 'Clothing',
      sub_category: '',
    },
    {
      id: 23,
      name: 'Lipstick',
      stock: 20,
      added: 0,
      price: 'Rs 900',
      pressed: 'false',
      image: ImageUrls.lipstick,
      category: 'Cosmetics',
      sub_category: 'Lipsticks',
    },
    {
      id: 24,
      name: 'Watch',
      stock: 8,
      added: 0,
      price: 'Rs 14000',
      pressed: 'false',
      image: ImageUrls.watch,
      category: 'Daily Use',
      sub_category: 'Watches',
    },
    {
      id: 25,
      name: 'Colors',
      stock: 16,
      added: 0,
      price: 'Rs 2600',
      pressed: 'false',
      image: ImageUrls.colors,
      category: 'Casual',
      sub_category: '',
    },
    {
      id: 26,
      name: 'Sofa',
      stock: 32,
      added: 0,
      price: 'Rs 11800',
      pressed: 'false',
      image: ImageUrls.sofa,
      category: 'Home Decor',
      sub_category: 'Sofas',
    },
    {
      id: 27,
      name: 'Boots',
      stock: 40,
      added: 0,
      price: 'Rs 8800',
      pressed: 'false',
      image: ImageUrls.boots,
      category: 'Shoes',
      sub_category: 'Boots',
    },
    {
      id: 28,
      name: 'Slippers',
      stock: 5,
      added: 0,
      price: 'Rs 400',
      pressed: 'false',
      image: ImageUrls.slippers,
      category: 'Shoes',
      sub_category: 'Slippers',
    },
    {
      id: 29,
      name: 'Water Bottle',
      stock: 12,
      added: 0,
      price: 'Rs 700',
      pressed: 'false',
      image: ImageUrls.waterBottle,
      category: 'Daily Use',
      sub_category: 'Water Bottles',
    },
    {
      id: 30,
      name: 'Macbook',
      stock: 8,
      added: 0,
      price: 'Rs 85000',
      pressed: 'false',
      image: ImageUrls.laptop,
      category: 'Electronics',
      sub_category: 'Laptops',
    },
    {
      id: 31,
      name: 'iPhone 12',
      stock: 10,
      added: 0,
      price: 'Rs 64000',
      pressed: 'false',
      image: ImageUrls.iphone12,
      category: 'Electronics',
      sub_category: 'Phones',
    },
    {
      id: 32,
      name: 'iPhone 12 Mini',
      stock: 10,
      added: 0,
      price: 'Rs 54000',
      pressed: 'false',
      image: ImageUrls.iphone12mini,
      category: 'Electronics',
      sub_category: 'Phones',
    },
    {
      id: 33,
      name: 'iPhone 11',
      stock: 10,
      added: 0,
      price: 'Rs 54000',
      pressed: 'false',
      image: ImageUrls.iphone11,
      category: 'Electronics',
      sub_category: 'Phones',
    },
    {
      id: 34,
      name: 'iPhone SE',
      stock: 10,
      added: 0,
      price: 'Rs 34000',
      pressed: 'false',
      image: ImageUrls.iphoneSE,
      category: 'Electronics',
      sub_category: 'Phones',
    },
    {
      id: 35,
      name: 'Samsung M32',
      stock: 10,
      added: 0,
      price: 'Rs 34000',
      pressed: 'false',
      image: ImageUrls.samsungGalaxyM32,
      category: 'Electronics',
      sub_category: 'Phones',
    },
    {
      id: 36,
      name: 'Samsung 5G',
      stock: 10,
      added: 0,
      price: 'Rs 24000',
      pressed: 'false',
      image: ImageUrls.SamsungGalaxyS20FE5G,
      category: 'Electronics',
      sub_category: 'Phones',
    },
    {
      id: 37,
      name: 'Samsung M12',
      stock: 10,
      added: 0,
      price: 'Rs 22000',
      pressed: 'false',
      image: ImageUrls.samsungGalaxyM12,
      category: 'Electronics',
      sub_category: 'Phones',
    },
    {
      id: 38,
      name: 'Samsung M52',
      stock: 10,
      added: 0,
      price: 'Rs 33000',
      pressed: 'false',
      image: ImageUrls.samsungGalaxyM52,
      category: 'Electronics',
      sub_category: 'Phones',
    },
    {
      id: 39,
      name: 'Microwave',
      stock: 10,
      added: 0,
      price: 'Rs 13000',
      pressed: 'false',
      image: ImageUrls.microwave1,
      category: 'Electronics',
      sub_category: 'Microwave',
    },
    {
      id: 40,
      name: 'Microwave',
      stock: 10,
      added: 0,
      price: 'Rs 14000',
      pressed: 'false',
      image: ImageUrls.microwave2,
      category: 'Electronics',
      sub_category: 'Microwave',
    },
    {
      id: 41,
      name: 'Microwave',
      stock: 10,
      added: 0,
      price: 'Rs 13500',
      pressed: 'false',
      image: ImageUrls.microwave3,
      category: 'Electronics',
      sub_category: 'Microwave',
    },
    {
      id: 42,
      name: 'Microwave',
      stock: 10,
      added: 0,
      price: 'Rs 12000',
      pressed: 'false',
      image: ImageUrls.microwave4,
      category: 'Electronics',
      sub_category: 'Microwave',
    },
    {
      id: 43,
      name: 'LG AC',
      stock: 10,
      added: 0,
      price: 'Rs 23000',
      pressed: 'false',
      image: ImageUrls.ac1,
      category: 'Electronics',
      sub_category: 'AC',
    },
    {
      id: 44,
      name: 'AC',
      stock: 10,
      added: 0,
      price: 'Rs 25000',
      pressed: 'false',
      image: ImageUrls.ac2,
      category: 'Electronics',
      sub_category: 'AC',
    },
    {
      id: 45,
      name: 'Voltas AC',
      stock: 10,
      added: 0,
      price: 'Rs 23500',
      pressed: 'false',
      image: ImageUrls.ac3,
      category: 'Electronics',
      sub_category: 'AC',
    },
    {
      id: 46,
      name: 'AC',
      stock: 10,
      added: 0,
      price: 'Rs 24000',
      pressed: 'false',
      image: ImageUrls.ac4,
      category: 'Electronics',
      sub_category: 'AC',
    },
    {
      id: 47,
      name: 'Washing Machine',
      stock: 10,
      added: 0,
      price: 'Rs 24000',
      pressed: 'false',
      image: ImageUrls.wm1,
      category: 'Electronics',
      sub_category: 'Washing Machine',
    },
    {
      id: 48,
      name: 'Washing Machine',
      stock: 10,
      added: 0,
      price: 'Rs 21000',
      pressed: 'false',
      image: ImageUrls.wm2,
      category: 'Electronics',
      sub_category: 'Washing Machine',
    },
    {
      id: 49,
      name: 'Washing Machine',
      stock: 10,
      added: 0,
      price: 'Rs 22000',
      pressed: 'false',
      image: ImageUrls.wm3,
      category: 'Electronics',
      sub_category: 'Washing Machine',
    },
    {
      id: 50,
      name: 'Washing Machine',
      stock: 10,
      added: 0,
      price: 'Rs 23000',
      pressed: 'false',
      image: ImageUrls.wm4,
      category: 'Electronics',
      sub_category: 'Washing Machine',
    },
    {
      id: 51,
      name: 'Washing Machine',
      stock: 10,
      added: 0,
      price: 'Rs 25000',
      pressed: 'false',
      image: ImageUrls.wm5,
      category: 'Electronics',
      sub_category: 'Washing Machine',
    },
    {
      id: 52,
      name: 'Refrigerator',
      stock: 10,
      added: 0,
      price: 'Rs 15000',
      pressed: 'false',
      image: ImageUrls.rg1,
      category: 'Electronics',
      sub_category: 'Refrigerator',
    },
    {
      id: 53,
      name: 'Refrigerator',
      stock: 10,
      added: 0,
      price: 'Rs 16000',
      pressed: 'false',
      image: ImageUrls.rg2,
      category: 'Electronics',
      sub_category: 'Refrigerator',
    },
    {
      id: 53,
      name: 'Refrigerator',
      stock: 10,
      added: 0,
      price: 'Rs 17000',
      pressed: 'false',
      image: ImageUrls.rg3,
      category: 'Electronics',
      sub_category: 'Refrigerator',
    },
    {
      id: 54,
      name: 'Refrigerator',
      stock: 10,
      added: 0,
      price: 'Rs 16000',
      pressed: 'false',
      image: ImageUrls.rg4,
      category: 'Electronics',
      sub_category: 'Refrigerator',
    },
    {
      id: 55,
      name: 'HP Laptop',
      stock: 8,
      added: 0,
      price: 'Rs 55000',
      pressed: 'false',
      image: ImageUrls.lp1,
      category: 'Electronics',
      sub_category: 'Laptops',
    },
    {
      id: 56,
      name: ' Dell Laptop',
      stock: 8,
      added: 0,
      price: 'Rs 45000',
      pressed: 'false',
      image: ImageUrls.lp2,
      category: 'Electronics',
      sub_category: 'Laptops',
    },
    {
      id: 57,
      name: 'Painting',
      stock: 8,
      added: 0,
      price: 'Rs 45000',
      pressed: 'false',
      image: ImageUrls.painting1,
      category: 'Home Decor',
      sub_category: 'Paintings',
    },
    {
      id: 58,
      name: 'Painting',
      stock: 8,
      added: 0,
      price: 'Rs 45000',
      pressed: 'false',
      image: ImageUrls.painting2,
      category: 'Home Decor',
      sub_category: 'Paintings',
    },
    {
      id: 59,
      name: 'Painting',
      stock: 8,
      added: 0,
      price: 'Rs 45000',
      pressed: 'false',
      image: ImageUrls.painting3,
      category: 'Home Decor',
      sub_category: 'Paintings',
    },
    {
      id: 60,
      name: 'Painting',
      stock: 8,
      added: 0,
      price: 'Rs 45000',
      pressed: 'false',
      image: ImageUrls.painting4,
      category: 'Home Decor',
      sub_category: 'Paintings',
    },
    {
      id: 61,
      name: 'Sofa',
      stock: 8,
      added: 0,
      price: 'Rs 34000',
      pressed: 'false',
      image: ImageUrls.sofa1,
      category: 'Home Decor',
      sub_category: 'Sofas',
    },
    {
      id: 62,
      name: 'Sofa',
      stock: 8,
      added: 0,
      price: 'Rs 42000',
      pressed: 'false',
      image: ImageUrls.sofa2,
      category: 'Home Decor',
      sub_category: 'Sofas',
    },
    {
      id: 63,
      name: 'Sofa',
      stock: 8,
      added: 0,
      price: 'Rs 45000',
      pressed: 'false',
      image: ImageUrls.sofa3,
      category: 'Home Decor',
      sub_category: 'Sofas',
    },
    {
      id: 64,
      name: 'Curtains',
      stock: 8,
      added: 0,
      price: 'Rs 5000',
      pressed: 'false',
      image: ImageUrls.curtain1,
      category: 'Home Decor',
      sub_category: 'Curtains',
    },
    {
      id: 65,
      name: 'Curtains',
      stock: 8,
      added: 0,
      price: 'Rs 6000',
      pressed: 'false',
      image: ImageUrls.curtain2,
      category: 'Home Decor',
      sub_category: 'Curtains',
    },
    {
      id: 16,
      name: 'Curtains',
      stock: 8,
      added: 0,
      price: 'Rs 5500',
      pressed: 'false',
      image: ImageUrls.curtain3,
      category: 'Home Decor',
      sub_category: 'Curtains',
    },
    {
      id: 17,
      name: 'Curtains',
      stock: 8,
      added: 0,
      price: 'Rs 6500',
      pressed: 'false',
      image: ImageUrls.curtain4,
      category: 'Home Decor',
      sub_category: 'Curtains',
    },
    {
      id: 18,
      name: 'Bed Sheet',
      stock: 8,
      added: 0,
      price: 'Rs 500',
      pressed: 'false',
      image: ImageUrls.bS1,
      category: 'Home Decor',
      sub_category: 'Bed Sheets',
    },
    {
      id: 66,
      name: 'Bed Sheet',
      stock: 8,
      added: 0,
      price: 'Rs 600',
      pressed: 'false',
      image: ImageUrls.bS2,
      category: 'Home Decor',
      sub_category: 'Bed Sheets',
    },
    {
      id: 65,
      name: 'Bed Sheet',
      stock: 8,
      added: 0,
      price: 'Rs 450',
      pressed: 'false',
      image: ImageUrls.bS4,
      category: 'Home Decor',
      sub_category: 'Bed Sheets',
    },
    {
      id: 66,
      name: 'Pillows',
      stock: 8,
      added: 0,
      price: 'Rs 450',
      pressed: 'false',
      image: ImageUrls.pl1,
      category: 'Home Decor',
      sub_category: 'Pillows',
    },
    {
      id: 67,
      name: 'Pillows',
      stock: 8,
      added: 0,
      price: 'Rs 500',
      pressed: 'false',
      image: ImageUrls.pl2,
      category: 'Home Decor',
      sub_category: 'Pillows',
    },
    {
      id: 19,
      name: 'Pillows',
      stock: 8,
      added: 0,
      price: 'Rs 750',
      pressed: 'false',
      image: ImageUrls.pl3,
      category: 'Home Decor',
      sub_category: 'Pillows',
    },
    {
      id: 68,
      name: 'Pillows',
      stock: 8,
      added: 0,
      price: 'Rs 500',
      pressed: 'false',
      image: ImageUrls.pl4,
      category: 'Home Decor',
      sub_category: 'Pillows',
    },
    {
      id: 69,
      name: 'Lipsticks',
      stock: 8,
      added: 0,
      price: 'Rs 4500',
      pressed: 'false',
      image: ImageUrls.lipstick1,
      category: 'Cosmetics',
      sub_category: 'Lipsticks',
    },
    {
      id: 70,
      name: 'Lipsticks',
      stock: 8,
      added: 0,
      price: 'Rs 5500',
      pressed: 'false',
      image: ImageUrls.lipstick2,
      category: 'Cosmetics',
      sub_category: 'Lipsticks',
    },
    {
      id: 71,
      name: 'Lipsticks',
      stock: 8,
      added: 0,
      price: 'Rs 2500',
      pressed: 'false',
      image: ImageUrls.lipstick3,
      category: 'Cosmetics',
      sub_category: 'Lipsticks',
    },
    {
      id: 72,
      name: 'Makeup Pallate',
      stock: 8,
      added: 0,
      price: 'Rs 4500',
      pressed: 'false',
      image: ImageUrls.pallate1,
      category: 'Cosmetics',
      sub_category: 'Makeup Pallates',
    },
    {
      id: 73,
      name: 'Makeup Pallate',
      stock: 8,
      added: 0,
      price: 'Rs 7500',
      pressed: 'false',
      image: ImageUrls.pallate2,
      category: 'Cosmetics',
      sub_category: 'Makeup Pallates',
    },
    {
      id: 74,
      name: 'Makeup Pallate',
      stock: 8,
      added: 0,
      price: 'Rs 5500',
      pressed: 'false',
      image: ImageUrls.pallate3,
      category: 'Cosmetics',
      sub_category: 'Makeup Pallates',
    },
    {
      id: 75,
      name: 'Shampoo',
      stock: 8,
      added: 0,
      price: 'Rs 550',
      pressed: 'false',
      image: ImageUrls.shampoo1,
      category: 'Daily Use',
      sub_category: 'Shampoo',
    },
    {
      id: 76,
      name: 'Shampoo',
      stock: 8,
      added: 0,
      price: 'Rs 650',
      pressed: 'false',
      image: ImageUrls.shampoo2,
      category: 'Daily Use',
      sub_category: 'Shampoo',
    },
    {
      id: 77,
      name: 'Shampoo',
      stock: 8,
      added: 0,
      price: 'Rs 570',
      pressed: 'false',
      image: ImageUrls.shampoo3,
      category: 'Daily Use',
      sub_category: 'Shampoo',
    },
    {
      id: 78,
      name: 'Sanitizer',
      stock: 5,
      added: 0,
      price: 'Rs 180',
      pressed: 'false',
      image: ImageUrls.sanitizer1,
      category: 'Daily Use',
      sub_category: 'Sanitizers',
    },
    {
      id: 79,
      name: 'Sanitizer',
      stock: 5,
      added: 0,
      price: 'Rs 380',
      pressed: 'false',
      image: ImageUrls.sanitizer2,
      category: 'Daily Use',
      sub_category: 'Sanitizers',
    },
    {
      id: 80,
      name: 'Sanitizer',
      stock: 5,
      added: 0,
      price: 'Rs 280',
      pressed: 'false',
      image: ImageUrls.sanitizer3,
      category: 'Daily Use',
      sub_category: 'Sanitizers',
    },
    {
      id: 81,
      name: 'Water Bottle',
      stock: 12,
      added: 0,
      price: 'Rs 800',
      pressed: 'false',
      image: ImageUrls.bottle1,
      category: 'Daily Use',
      sub_category: 'Water Bottles',
    },
    {
      id: 82,
      name: 'Water Bottle',
      stock: 12,
      added: 0,
      price: 'Rs 500',
      pressed: 'false',
      image: ImageUrls.bottle2,
      category: 'Daily Use',
      sub_category: 'Water Bottles',
    },
    {
      id: 83,
      name: 'Bags',
      stock: 12,
      added: 0,
      price: 'Rs 3700',
      pressed: 'false',
      image: ImageUrls.bags1,
      category: 'Daily Use',
      sub_category: 'Bags',
    },
    {
      id: 84,
      name: 'Bags',
      stock: 12,
      added: 0,
      price: 'Rs 2700',
      pressed: 'false',
      image: ImageUrls.bags2,
      category: 'Daily Use',
      sub_category: 'Bags',
    },
    {
      id: 85,
      name: 'Bags',
      stock: 12,
      added: 0,
      price: 'Rs 2100',
      pressed: 'false',
      image: ImageUrls.bags3,
      category: 'Daily Use',
      sub_category: 'Bags',
    },
    {
      id: 86,
      name: 'Watch',
      stock: 8,
      added: 0,
      price: 'Rs 5500',
      pressed: 'false',
      image: ImageUrls.watch1,
      category: 'Daily Use',
      sub_category: 'Watches',
    },
    {
      id: 87,
      name: 'Watch',
      stock: 8,
      added: 0,
      price: 'Rs 7000',
      pressed: 'false',
      image: ImageUrls.watch2,
      category: 'Daily Use',
      sub_category: 'Watches',
    },
    {
      id: 88,
      name: 'Towels',
      stock: 8,
      added: 0,
      price: 'Rs 950',
      pressed: 'false',
      image: ImageUrls.towels1,
      category: 'Daily Use',
      sub_category: 'Towels',
    },
    {
      id: 89,
      name: 'Towels',
      stock: 8,
      added: 0,
      price: 'Rs 890',
      pressed: 'false',
      image: ImageUrls.towels2,
      category: 'Daily Use',
      sub_category: 'Towels',
    },
    {
      id: 90,
      name: 'Towels',
      stock: 8,
      added: 0,
      price: 'Rs 350',
      pressed: 'false',
      image: ImageUrls.towels3,
      category: 'Daily Use',
      sub_category: 'Towels',
    },
    {
      id: 91,
      name: 'Towels',
      stock: 8,
      added: 0,
      price: 'Rs 450',
      pressed: 'false',
      image: ImageUrls.towels4,
      category: 'Daily Use',
      sub_category: 'Towels',
    },
    {
      id: 92,
      name: 'Sneakers',
      stock: 5,
      added: 0,
      price: 'Rs 7000',
      pressed: 'false',
      image: ImageUrls.sneakers1,
      category: 'Shoes',
      sub_category: 'Sneakers',
    },
    {
      id: 93,
      name: 'Sneakers',
      stock: 5,
      added: 0,
      price: 'Rs 4110',
      pressed: 'false',
      image: ImageUrls.sneakers2,
      category: 'Shoes',
      sub_category: 'Sneakers',
    },
    {
      id: 94,
      name: 'Sneakers',
      stock: 5,
      added: 0,
      price: 'Rs 4000',
      pressed: 'false',
      image: ImageUrls.sneakers3,
      category: 'Shoes',
      sub_category: 'Sneakers',
    },
    {
      id: 95,
      name: 'Heels',
      stock: 5,
      added: 0,
      price: 'Rs 4000',
      pressed: 'false',
      image: ImageUrls.heels,
      category: 'Shoes',
      sub_category: 'Heels',
    },
    {
      id: 96,
      name: 'Heels',
      stock: 5,
      added: 0,
      price: 'Rs 6000',
      pressed: 'false',
      image: ImageUrls.heels3,
      category: 'Shoes',
      sub_category: 'Heels',
    },
    {
      id: 97,
      name: 'Heels',
      stock: 5,
      added: 0,
      price: 'Rs 7020',
      pressed: 'false',
      image: ImageUrls.heels2,
      category: 'Shoes',
      sub_category: 'Heels',
    },
    {
      id: 98,
      name: 'Slippers',
      stock: 5,
      added: 0,
      price: 'Rs 300',
      pressed: 'false',
      image: ImageUrls.slipers1,
      category: 'Shoes',
      sub_category: 'Slippers',
    },
    {
      id: 99,
      name: 'Slippers',
      stock: 5,
      added: 0,
      price: 'Rs 500',
      pressed: 'false',
      image: ImageUrls.slipers2,
      category: 'Shoes',
      sub_category: 'Slippers',
    },
    {
      id: 100,
      name: 'Slippers',
      stock: 5,
      added: 0,
      price: 'Rs 450',
      pressed: 'false',
      image: ImageUrls.slipers3,
      category: 'Shoes',
      sub_category: 'Slippers',
    },
    {
      id: 101,
      name: 'Boots',
      stock: 40,
      added: 0,
      price: 'Rs 8800',
      pressed: 'false',
      image: ImageUrls.boots1,
      category: 'Shoes',
      sub_category: 'Boots',
    },
    {
      id: 102,
      name: 'Boots',
      stock: 40,
      added: 0,
      price: 'Rs 7800',
      pressed: 'false',
      image: ImageUrls.boots2,
      category: 'Shoes',
      sub_category: 'Boots',
    },
    {
      id: 103,
      name: 'Boots',
      stock: 40,
      added: 0,
      price: 'Rs 8800',
      pressed: 'false',
      image: ImageUrls.boots3,
      category: 'Shoes',
      sub_category: 'Boots',
    },
  ];

  @observable stateArray = [
    'Select State',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra & Nagar Haveli and Daman & Diu',
    'Delhi',
    'Jammu and Kashmir',
    'Lakshadweep',
    'Puducherry',
    'Ladakh',
  ];

  @observable addressArray = [
    {
      id: 1,
      user: 'Mr. Hariom Rajput',
      address:
        'House No. 231 2nd Floor, Sector 23, Near by Water Tank and Temple, Gurgaon. Haryana, 122017',
      phone: '+91 9889878758',
    },
    {
      id: 2,
      user: 'Miss. Vanshika Sharma',
      address:
        'House No. 153 6nd Floor, Sector 21, Near by Water Tank and Temple, Gurgaon. Haryana, 122017',
      phone: '+91 9889878759',
    },
    {
      id: 3,
      user: 'Miss. Muskaan Sharma',
      address:
        'House No. 231 1sd Floor, Sector 23, Near by Water Tank and Temple, Gurgaon. Haryana, 122017',
      phone: '+91 9889878757',
    },
    {
      id: 4,
      user: 'Mr. Vinayak Sharma',
      address:
        'House No. 231 2nd Floor, Sector 33, Near by Water Tank and Temple, Gurgaon. Haryana, 122017',
      phone: '+91 9889878756',
    },
    {
      id: 5,
      user: 'Mr. Aryan Sharma',
      address:
        'House No. 231 1sd Floor, Sector 23, Near by Water Tank and Temple, Gurgaon. Haryana, 122017',
      phone: '+91 9889878755',
    },
  ];
}
export default new ShopStore();
