import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameAppRoutingRoutingModule } from './game-app-routing-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GameHomeComponent } from './game-home/game-home.component';
import {MatCardModule} from '@angular/material/card';
import { GameDetailsComponent } from './game-details/game-details.component';
import { StarRatingComponent } from './star-rating/star-rating.component';



@NgModule({
  declarations: [
    AppComponent,
    GameHomeComponent,
    GameDetailsComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GameAppRoutingRoutingModule,
    HttpClientModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
