import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is a simply a test",
      "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_600,q_75,w_900/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/flaglercountyfl/Photo_Mar_22_1_00_00_PM_a26f2f50-508f-4f20-898f-65cf5566ea72.jpg"
    ),

    new Recipe(
      "Another Test Recipe 2",
      "This is a simply a test 2",
      "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_600,q_75,w_900/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/flaglercountyfl/Photo_Mar_22_1_00_00_PM_a26f2f50-508f-4f20-898f-65cf5566ea72.jpg"
    ),
  ];

  getRecipes() {
    // slice w/o args returns a copy, not a reference
    return this.recipes.slice();
  }
}
