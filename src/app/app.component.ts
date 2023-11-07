import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from './theme-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = "Games API";
  checked: boolean = true
  constructor(
    private themeServiceService: ThemeServiceService
    ) {
      // Load Color Scheme
      this.themeServiceService.load();
  }
  ngOnInit(): void {
    this.setTheme()
  }

  setTheme() {
    this.checked = !this.checked
    console.log(this.checked)
    this.themeServiceService.update(this.checked ? "light": "dark");
  }
}
