import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[]=[
  new Recipe('A Test Recipe', 'Test','https://upload.wikimedia.org/wikipedia/commons/3/34/Chicken_Sukka_Mangalorean_Cusine.JPG' ),
  new Recipe('A Test Recipe', 'Test','https://upload.wikimedia.org/wikipedia/commons/3/34/Chicken_Sukka_Mangalorean_Cusine.JPG' )  
];
  constructor() { }

  ngOnInit() {
  }

}
