import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass']
})
export class RatingComponent implements OnInit {

  @Input() rating: number = 0;
  saved_rating: number;

  onClick(){
    this.saved_rating = this.rating;
  }

  onMouseOver(rating: number){
    if (this.rating == rating){
      this.rating = 0;
    }
    else
    {
      this.rating = rating;
    }
  }

  onMouseOut(){
    this.rating = this.saved_rating
  }

  constructor() { }

  ngOnInit(): void {
    this.saved_rating = this.rating;
  }

}
