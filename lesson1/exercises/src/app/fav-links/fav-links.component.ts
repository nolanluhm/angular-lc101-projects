import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ["https://www.reddit.com/", "https://www.twitch.tv/", "https://education.launchcode.org/intro-to-professional-web-dev/index.html"]
  constructor() { }

  ngOnInit() {
  }

}
