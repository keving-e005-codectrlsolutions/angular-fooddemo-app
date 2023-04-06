import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  foodList = [{
    itemName: 'Yogurt',
    itemDueDate: '18-03-2023',
    itemPriority: 'high',
    itemCategory: 'Batters, Dairy & Poultry',
  },
  {
    itemName: 'Organic Lemon Juice',
    itemDueDate: '18-10-23',
    itemPriority: 'high',
    itemCategory: 'Beverages'
  },
  {
    itemName: 'Bombay Pav Bread',
    itemDueDate: '28-10-23',
    itemPriority: 'high',
    itemCategory: 'Breakfast Cereals'
  },
  {
    itemName: 'Chicken Breast Boneless Frozen',
    itemDueDate: '30-10-23',
    itemPriority: 'high',
    itemCategory: 'Meat'
  }]

  today: number = Date.now()

  constructor() {}

}
