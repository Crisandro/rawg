import { Component, OnInit } from '@angular/core';
import { GameApiService } from '../game-api.service';
import { PageEvent } from '@angular/material/paginator';
import { IAllGames, iGameApi } from '../game-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-home',
  templateUrl: './game-home.component.html',
  styleUrls: ['./game-home.component.css']
})
export class GameHomeComponent implements OnInit {
  games!: iGameApi[];
  page: number = 1;
  page_size: number = 10;
  results_count!: number;
  pageEvent!: PageEvent;
  pageIndex: number = 0;
  
  constructor( private gameApiService: GameApiService) {}

  ngOnInit(): void {
    this.searchGame(this.page, this.page_size)
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.page = e.pageIndex + 1;
    this.page_size = e.pageSize;
    this.searchGame(this.page, this.page_size)
  }

  searchGame( page: number, page_size: number ):void {
    this.gameApiService.getGameList(page, page_size).subscribe(response => {
      this.games = response.results;
      this.results_count = response.count;
      console.log(this.games)
    })
  }
}
