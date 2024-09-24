import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemsService {

  public items: String[];
  public isEmpty: boolean;

  constructor() { 

    this.items = [];
    this.isEmpty = true;

  }
}
