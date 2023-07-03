import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingredient.model';
import { shoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingridients :Ingridient[];
  private igChangedSub:Subscription;

  constructor( private shoppingListService:shoppingListService) {
   }
   onEditItem(index:number){
    this.shoppingListService.startEditing.next(index);

   }

  ngOnInit(): void {
    this.ingridients= this.shoppingListService.getIngridient();
    this.igChangedSub=this.shoppingListService.ingridientsChanged
    .subscribe(
      (ingridients : Ingridient[])=>{
      this.ingridients=ingridients;
      }
    );
  }
  ngOnDestroy() {
    this.igChangedSub.unsubscribe();
  }


}
