import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes:Recipe[]=[

      new Recipe('A Healthy Salad',
      'Salad made up of veggies and spices',
      'https://www.ndtv.com/cooks/images/tossed-mixed-salad-620.jpg'),
      new Recipe('Cheezy Pizza',
      'Its pizza, what do you want to know more',
      'https://curlytales.com/wp-content/uploads/2019/09/pizza-e1569475959190-1280x720.jpg')
    ];
  
  constructor() { 

  }

  getRecipes(){
    return this.recipes.slice();
  }
}
