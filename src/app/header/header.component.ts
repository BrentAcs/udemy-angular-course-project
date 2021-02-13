import { 
  Component, 
  Output, 
  EventEmitter, 
  ViewChild, 
  ElementRef, 
  AfterViewInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent{
  @Output() recipesClicked = new EventEmitter<string>();
  @Output() shoppingListClicked = new EventEmitter<string>();
  @ViewChild('recipesTab', {static: true}) recipesTab: ElementRef;
  @ViewChild('shoppingListTab', { static: true }) shoppingListTab: ElementRef;

  ngAfterViewInit(): void {
    this.onRecipesClick();
  }

  onRecipesClick(){
    console.log('onRecipesClick');
    this.recipesClicked.emit('recipesTab');
    this.recipesTab.nativeElement.style.backgroundColor = 'lightblue';
    this.shoppingListTab.nativeElement.style.backgroundColor = 'transparent';
  }

  onShoppingListClick(){
    console.log('onShoppingListClick');
    this.shoppingListClicked.emit('shoppingListTab');
    this.recipesTab.nativeElement.style.backgroundColor = 'transparent';
    this.shoppingListTab.nativeElement.style.backgroundColor = 'lightblue';
  }
}