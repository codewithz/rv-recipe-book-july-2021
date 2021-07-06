import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe:Recipe=new Recipe('','','');
  isRecipeSelected:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  assignRecipe(recipe:Recipe){
    this.isRecipeSelected=true;
    this.selectedRecipe=recipe;
  }

}
