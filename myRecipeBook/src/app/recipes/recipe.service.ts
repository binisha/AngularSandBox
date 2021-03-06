import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]=[
        new Recipe('A Test Recipe', 
        'Test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20),
        ] ),
        new Recipe('Big Fat Burger', 
        'Test',
        'https://upload.wikimedia.org/wikipedia/commons/0/07/Lounge_Burger_with_Bacon.jpg' ,
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1),
        ])  
      ];
constructor(private slService:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipe(index:number){
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients);

      }
}