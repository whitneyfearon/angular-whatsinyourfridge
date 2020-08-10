import { Component, OnInit } from '@angular/core';
import { RecipeApiService } from '../../services/recipe-api.service';
// import { HttpErrorResponse } from '@angular/common/http';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  faGithub = faGithub;
  totalRecords:Number;
  data: any[] = [];
  m: any[] = [];
  page:Number=1;
  show;

  constructor(private recipeApiService: RecipeApiService) {
    this.data = new Array<any>()
   }


  ngOnInit(): void {
  }

  // searchRecipe(form) {
  //   this.recipeApiService
  //     .getRecipeData(form.value.userSearch)
  //     .then((response) => {
  //       this.results = response;
  //     })
  //     .catch((error: HttpErrorResponse) => {
  //       console.error(error);
  //       return error;
  //     });
  // }

i=1;
  searchRecipe(form){
    
    this.recipeApiService.getRecipeData(form.value.userSearch, this.selectedDiet)
    .subscribe((data)=>{
      this.data = data.hits;
      this.totalRecords = data.hits.length; 
      this.show = data.more;
      console.log(data.hits[0].recipe);
      error => console.log('error occurred', error);
    })
    
  }

  // this variable sets the user's selectedDiet choice to an empty string
  selectedDiet: string = '';

  // this method takes in the the user's input for the selectedDiet and reassigns the variable to that value
  selectDiet (event: any) {
    this.selectedDiet = event.target.value;
    console.log(this.selectedDiet);
  }z

}
