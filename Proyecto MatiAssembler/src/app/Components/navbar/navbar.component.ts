import { Component, OnInit } from '@angular/core'; 
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material'; 
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user; 
  myDatepicker;
public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};
public model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user")); 
    console.log(this.user); 
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['login']); 
  }

  home() {
    this.router.navigate(['']);
  }
  
  
}
