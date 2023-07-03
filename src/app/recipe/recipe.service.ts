import { Injectable } from "@angular/core";
import { Ingridient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import{shoppingListService} from "../shopping-list/shopping-list.service"
import { Subject } from "rxjs";
@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[]=[
    new Recipe('Flafel Durum',
    'A super tasty flafel wrape- Just awesome!',
    'https://media.istockphoto.com/id/1139093186/photo/tortilla-wrap-with-falafel-and-fresh-salad-vegan-tacos-vegetarian-healthy-food-top-view.jpg?s=612x612&w=0&k=20&c=q0-VsQOGsiR9hJdPAT0HeRyATksdWUOE3x4e8SIKXzk=',
     [
      new Ingridient('Flafel covered wiith tahini',5),
      new Ingridient('Tomates',1),
      new Ingridient('Pickeles',3),
     ])
    , new Recipe('Big Burger',
    'A super tasty burger- Just awesome!',
    'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    [
      new Ingridient('Meat',2),
      new Ingridient('Cheese',1),
      new Ingridient('Tomatoes',1),
      new Ingridient('Lattice',1),
    ]),
    new Recipe('Shawrma Wrape',
    'A super tasty shawrma wrape',
    'https://st3.depositphotos.com/6759912/14370/i/450/depositphotos_143708067-stock-photo-shawarma-sandwich-on-dark-background.jpg',
    [
      new Ingridient('Chicken',4),
      new Ingridient('Cheese',1),
      new Ingridient('Tomatoes',1),
      new Ingridient('Potatos',1),

    ])
  ];
  constructor(private slService : shoppingListService) {
  }
  getRecipes(){
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes[index];
  }
  addToShoppingList(ingridients:Ingridient[]){
    this.slService.addIngridients(ingridients);
  }
  addRecipe(recipe :Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice())

  }
  updateRecipe(index : number,newRecipe : Recipe){
    this.recipes[index]=newRecipe;
    this.recipeChanged.next(this.recipes.slice())
  }
  deleteRecipe(index : number){
    this.recipes.splice(index,1);
    this.recipeChanged.next(this.recipes.slice())
  }
}
