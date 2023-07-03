import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;
  constructor(private recipeService :RecipeService,
              private route :ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params : Params) => {
        this.id = +params['id'];
        this.recipe= this.recipeService.getRecipe(this.id);
      }
    )
  }
  onAddToShoppingList(){
    this.recipeService.addToShoppingList(this.recipe.ingridients);
  }
  onEditRecipe(){
   return this.router.navigate(['edit'], {relativeTo : this.route});
   // return this.router.navigate(['../,this.id,edit'],{relativeTo : this.route});
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }

}
