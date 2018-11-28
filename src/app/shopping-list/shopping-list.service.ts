import { Injectable  } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
 
  IngredientsChanged=new Subject<Ingredient[]>();
  startedEditing=new Subject<number>();

 private ingredients: Ingredient[] = [
    new Ingredient('Apples', 20),
    new Ingredient('tomato', 10),
  ];

constructor() { }

getIngredients(){
  return this.ingredients.slice();
}

getIngredient(index: number){
  return this.ingredients[index];
}


addIngredient(ingredient:Ingredient){
  this.ingredients.push(ingredient);
  this.IngredientsChanged.next(this.ingredients.slice());
}
addIngredients(ingredients:Ingredient[]){
  this.ingredients.push(...ingredients);
  this.IngredientsChanged.next(this.ingredients.slice());
}

updateIngredient(index: number, newIngredient: Ingredient){
  this.ingredients[index] = newIngredient;
  this.IngredientsChanged.next(this.ingredients.slice()); 
}

deleteIngredient(index: number){
  this.ingredients.splice(index, 1);
  this.IngredientsChanged.next(this.ingredients.slice());
}

}
