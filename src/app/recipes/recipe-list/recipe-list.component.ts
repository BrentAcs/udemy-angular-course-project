import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes&psig=AOvVaw2UAGVRJWbroOJRa5aLI5Te&ust=1613174698990000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOi3npuG4-4CFQAAAAAdAAAAABAD')
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
