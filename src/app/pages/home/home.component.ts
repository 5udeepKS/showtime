import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private readonly service: MovieApiServiceService) {}

  bannerResult: any = [];

  ngOnInit() {
    this.bannerData();
  }

  // banner Data
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result);
      this.bannerResult = result.results;
    });
  }
}
