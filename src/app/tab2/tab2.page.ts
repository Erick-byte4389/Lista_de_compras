import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public item: string;

  constructor(private shoppingList: ShoppingItemsService, private alertController: AlertController) {}

  addItem() {
    console.log(this.item);

    if(!this.shoppingList.existItem(this.item)){
      this.shoppingList.addItem(this.item);
      this.item = '';
      console.log(this.shoppingList.items);
      this.alertSucces();
    } else {
      this.alertError();
    }

  }

  async alertSucces(){
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'El artículo se ha agregado correctamente',
      buttons: ['OK']
    })
    await alert.present();
  }

  async alertError(){
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'El artículo ya existe en la lista',
      buttons: ['OK']
    })
    await alert.present();
  }

}
