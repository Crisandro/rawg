import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GameApiService } from '../game-api.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css','./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  gameDetails: any= {};
  gameMovies!: any[];
  id!: any;
  constructor(
    private route: ActivatedRoute,
    private gameService: GameApiService
    ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    console.log(this.id)
    this.getGameDetails(this.id)
  }

  getGameDetails(id: number): void{
    this.gameService.getGameDetails(id).subscribe(response => {
      console.log(response)
      this.gameDetails = response
    })
    this.gameService.getGameMovies(id).subscribe(response => {
      console.log(response.results)
      this.gameMovies = response.results
    })
  }

}
