import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'game-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges{
  @Input() rating = 0;

  cropWidth: number = 120;

  ngOnChanges(): void{
    this.cropWidth = this.rating*120/5;
  }
}
