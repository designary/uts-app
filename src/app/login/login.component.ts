import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ForTooltipComponent } from '../tooltip/for-tooltip.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    component = ForTooltipComponent;

    constructor(private router : Router, private location : Location) {}

    public processRegRoutes() {
        let list = [
            "/login/confirm",
            "/login/create",
            "/login/add-details",
            "/login/add-work"
        ],
        route = this.location.path();

        return (list.indexOf(route) > -1);
    }
}
