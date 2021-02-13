import { Component } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // recipesTab or shoppingListTab
  selectedTabName: string = 'recipesTab';

  onRecipesClick(tabName: string){
    console.log('tabName: ' + tabName );
    this.selectedTabName = 'recipesTab';
  }

  onShoppingListClick(tabName: string){
    console.log('tabName: ' + tabName);
    this.selectedTabName = 'shoppingListTab';
  }

  onRecipeSelected(selectedRecipe: Recipe){
    console.log('selected recipe:' + selectedRecipe);
  }
}
