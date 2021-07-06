import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected=new EventEmitter<Recipe>();

  private recipes:Recipe[]=[
    new Recipe(' Butter Chicken',
    'Butter Chicken is one of the most popular curries at any Indian restaurant around the world',
    'http://www.codewithzacademy.com/training/angular/resources/butter-chicken.jpg',
    [
        new Ingredient('Chicken',1),
        new Ingredient('Butter',2),
        new Ingredient('Mix Spice',3)
    ]),
    new Recipe('Chicken Burger with Fries',
    'A mouth watering burger with sides of French Fries',
    'http://codewithzacademy.com/training/angular/resources/burger.jpg',
    [
        new Ingredient('Buns',2),
        new Ingredient('Chicken',1),
        new Ingredient('Tomatoes',1),
        new Ingredient('Cheese',1),
        new Ingredient('French Fries',30)
    ])
  ];

  // private recipes:Recipe[]=[

  //     new Recipe('A Healthy Salad',
  //     'Salad made up of veggies and spices',
  //     'https://www.ndtv.com/cooks/images/tossed-mixed-salad-620.jpg'),
  //     new Recipe('Cheezy Pizza',
  //     'Its pizza, what do you want to know more',
  //     'https://curlytales.com/wp-content/uploads/2019/09/pizza-e1569475959190-1280x720.jpg')
  //   ];
  
  constructor() { 

  }

  getRecipes(){
    return this.recipes.slice();
  }
}
