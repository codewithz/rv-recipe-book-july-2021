import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe('A Healthy Salad',
    'Salad made up of veggies and spices',
    'https://www.ndtv.com/cooks/images/tossed-mixed-salad-620.jpg'),
    new Recipe('Cheezy Pizza',
    'Its pizza, what do you want to know more',
    'https://curlytales.com/wp-content/uploads/2019/09/pizza-e1569475959190-1280x720.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
