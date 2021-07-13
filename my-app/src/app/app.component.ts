import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor() {
    setTheme('bs4'); // or 'bs4'

  }

}
