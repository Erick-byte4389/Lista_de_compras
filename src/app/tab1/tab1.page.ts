import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public shoppingList: ShoppingItemsService, private alertController: AlertController,
    private menuController: MenuController
  ) {}

  async removeItem(item) {

    const alert = await this.alertController.create({
      header: 'Eliminar artículo',
      message: `¿Desea eliminar el artículo ${item}?`,
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.shoppingList.removeItem(item);
          }
        },
        {
          text: 'No',
          handler: () => {
            alert.dismiss();
          }
        }
      ]
    });
    await alert.present();
  }

  onRenderItems($event) {
    console.log($event);

    const item = this.shoppingList.items.splice($event.detail.from, 1)[0];

    this.shoppingList.items.splice($event.detail.to, 0, item);

    $event.detail.complete();
    console.log(this.shoppingList.items);
  }

  async removeAll() {
    const alert = await this.alertController.create({
      header: 'Eliminar artículo',
      message: `¿Desea eliminar el artículo todos los artículos?`,
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.shoppingList.removeAllItems();
            this.menuController.close();
          }
        },
        {
          text: 'No',
          handler: () => {
            alert.dismiss();
          }
        }
      ]
    });
    await alert.present();

  }

}  