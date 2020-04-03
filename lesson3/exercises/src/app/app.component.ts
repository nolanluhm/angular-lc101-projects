import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = true;
  movementDisabled = true;

  handleTakeOff(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if(result) {
      this.color = "blue";
      this.height = 10000;
      this.width = 0;
      this.message = "Shuttle in flight.";
      rocketImage.style.bottom = "10px";
      this.takeOffEnabled = false;
    }
  }

  handleLand(rocketImage) {
    let message = window.alert("The shuttle is landing. Landing gear engaged.");
      
    this.color = "green";
    this.height = 0;
    this.width = 0;
    this.message = "The shuttle has landed.";
    rocketImage.style.bottom = "0px";
    this.takeOffEnabled = true;
  }

  handleAbortMission(rocketImage) {
    let result = window.confirm("Do you really want to abort the mission?");

    if (result) {
      this.color = "red";
      this.height = 0;
      this.width = 0;
      this.message = "Mission aborted.";
      rocketImage.style.bottom = "0px";
      this.takeOffEnabled = true;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right' && this.width < 480000) {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }

    if (direction === 'left' && this.width > -100) {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }

    if (direction === 'up' && this.height < 350000) {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }

    if (direction === 'down' && this.height > -100) {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
  }

  edgeCheck() {
    if (this.width > 475000 || this.width < 0 || this.height > 340000 || this.height < 0) {
      this.color = "orange";
    } else {
      this.color = "blue";
    }
  }
}
