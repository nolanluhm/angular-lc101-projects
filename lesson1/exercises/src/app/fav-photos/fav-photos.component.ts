import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = '#1 Coder Award';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://img.mlbstatic.com/mlb-photos/image/upload/images/headshots/current/60x60/425877@3x.png';
  image3 = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-xdVqpBrMz7I%2FVSMzQMR0sBI%2FAAAAAAAAUU4%2FwTNO8IG5JCA%2Fs1600%2Fbuzzsugar.com.png&f=1&nofb=1';

  constructor() { }

  ngOnInit() {
  }

}