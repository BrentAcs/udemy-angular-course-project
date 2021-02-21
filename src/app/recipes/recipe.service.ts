import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopplist-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Taco",
      "A really tasty taco.",
      "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_600,q_75,w_900/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/flaglercountyfl/Photo_Mar_22_1_00_00_PM_a26f2f50-508f-4f20-898f-65cf5566ea72.jpg",
      [new Ingredient("Meat", 1), new Ingredient("Shell", 2)]
    ),

    new Recipe(
      "Better Tasty Taco",
      "An even better tasty taco.",
      "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_600,q_75,w_900/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/flaglercountyfl/Photo_Mar_22_1_00_00_PM_a26f2f50-508f-4f20-898f-65cf5566ea72.jpg",
      [new Ingredient("Better Meat", 1), new Ingredient("Better Shell", 3)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // slice w/o args returns a copy, not a reference
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
