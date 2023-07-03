import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingredient.model';
import { shoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false
  editedItemIndex: number;
  editedItem: Ingridient;
  constructor(private slService: shoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.slService.startEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index
        this.editMode = true
        this.editedItem = this.slService.getingridient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingridient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngridient(this.editedItemIndex, newIngredient)
    } else {
      this.slService.addIngridient(newIngredient);

    }
    this.editMode=false;
    form.reset();


  }
  onClear(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    this.onClear();
    this.slService.deleteIngridient(this.editedItemIndex);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
