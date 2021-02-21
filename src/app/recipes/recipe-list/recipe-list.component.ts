import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from "../recipe.model";
import { RecipeService } from '../recipe.service';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  editingSubscription: Subscription;

  constructor(
    private recipeSerivce: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editingSubscription = this.recipeSerivce.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );

    this.recipes = this.recipeSerivce.getRecipes();
  }

  ngOnDestroy() {
    this.editingSubscription.unsubscribe();
  }

  onNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }
}
