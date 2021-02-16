import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from "../recipe.model";
import { RecipeService } from '../recipe.service';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeSerivce: RecipeService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.recipes = this.recipeSerivce.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(["recipes", "new"]);
  }
}
