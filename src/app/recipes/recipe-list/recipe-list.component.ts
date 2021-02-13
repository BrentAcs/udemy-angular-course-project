import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_600,q_75,w_900/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/flaglercountyfl/Photo_Mar_22_1_00_00_PM_a26f2f50-508f-4f20-898f-65cf5566ea72.jpg'),
 
    new Recipe('Anotherd Test Recipe 2', 'This is a simply a test 2', 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_600,q_75,w_900/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/flaglercountyfl/Photo_Mar_22_1_00_00_PM_a26f2f50-508f-4f20-898f-65cf5566ea72.jpg')
  ]; 
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    console.log('selected recipe (recipe): ' + recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
