import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:false})nameInputRef:ElementRef=new ElementRef(null);
  @ViewChild('amountInput',{static:false})amountInputRef:ElementRef=new ElementRef(null);

  // @Output('ingredientAdded') ingredientAdded=new EventEmitter<Ingredient>();


  constructor(private shoppingListService:ShoppingListService) {

   }

  ngOnInit(): void {
  }

  onAdd(){
    const name=this.nameInputRef.nativeElement.value;
    const amount=this.amountInputRef.nativeElement.value;

    const ingredient=new Ingredient(name,amount);
    // this.ingredientAdded.emit(ingredient);
    this.shoppingListService.addIngredient(ingredient);
  }

}
