import { Component, OnInit, OnDestroy } from '@angular/core'; 
import { Ingredient } from '../shared/ingredient.mode';
import { Subscription } from 'rxjs/Subscription';


import { ShoppingListService } from '../shopping-list/shopping-list.service';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[]; 
  private subscription: Subscription; 

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();
    this.subscription=this.slService.IngredientsChanged
    .subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }

  onEditItem(index: number){
     this.slService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
