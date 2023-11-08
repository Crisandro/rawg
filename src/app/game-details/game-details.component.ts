import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GameApiService } from '../game-api.service';
import { iGameApi } from '../game-api';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css','./game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  gameDetails!: iGameApi;
  gameMovies!: any[];
  id!: any;
  constructor(
    private route: ActivatedRoute,
    private gameService: GameApiService
    ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getGameDetails(this.id)
  }

  getGameDetails(id: number): void{
    this.gameService.getGameDetails(id).subscribe(response => {
      
      this.gameDetails = response
      console.log(this.gameDetails)
    })
    this.gameService.getGameMovies(id).subscribe(response => {
      
      this.gameMovies = response.results
      console.log(this.gameMovies)
    })
  }

}
