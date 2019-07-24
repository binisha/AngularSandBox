import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[]=[
  new Recipe('A Test Recipe', 'Test','https://upload.wikimedia.org/wikipedia/commons/3/34/Chicken_Sukka_Mangalorean_Cusine.JPG' ),
  new Recipe('Another Test Recipe', 'Test','https://upload.wikimedia.org/wikipedia/commons/3/34/Chicken_Sukka_Mangalorean_Cusine.JPG' )  
];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelcted(recipe: Recipe){
this.recipeWasSelected.emit(recipe);
  }
}
