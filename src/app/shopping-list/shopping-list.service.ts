import { Ingridient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
export class shoppingListService{
  ingridientsChanged=new Subject<Ingridient[]>();
  startEditing =new Subject<number>();
  private ingredients :Ingridient[]=[
    new Ingridient('Apples',5),
    new Ingridient('carrots',6)
  ];
  getIngridient(){
    return this.ingredients.slice();
  }
  getingridient(index:number){
    return this.ingredients[index]
  }
  addIngridient(ingridient : Ingridient){
    this.ingredients.push(ingridient);
    this.ingridientsChanged.next(this.ingredients.slice());
  }
  addIngridients(ingridients :Ingridient[]){
    this.ingredients.push(...ingridients);
    this.ingridientsChanged.next(this.ingredients.slice());
  }
  updateIngridient(index:number,newIngredient:Ingridient){
    this.ingredients[index]=newIngredient;
    this.ingridientsChanged.next(this.ingredients.slice())
  }
  deleteIngridient(index :number){
    this.ingredients.splice(index,1);
    this.ingridientsChanged.next(this.ingredients.slice())
  }
}
