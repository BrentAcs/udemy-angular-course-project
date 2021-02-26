import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { RecipeService } from "./recipe.service";

@Injectable({ providedIn: "root" })
export class DataStorageStorage {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put(
      "https://ng-course-project-2e40c-default-rtdb.firebaseio.com/recipes.json",
      recipes
    ).subscribe(response => {
      console.log(response);
    });
  }
}
