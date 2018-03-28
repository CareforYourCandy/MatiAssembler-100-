import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../../node_modules/adminbsb-materialdesign/plugins/bootstrap/css/bootstrap.css' 
,
'../MatiAssembler/Proyecto MatiAssembler/node_modules/adminbsb-materialdesign/plugins/node-waves/waves.css' 
,
'../MatiAssembler/Proyecto MatiAssembler/node_modules/adminbsb-materialdesign/plugins/animate-css/animate.css' 
,
'../MatiAssembler/Proyecto MatiAssembler/node_modules/adminbsb-materialdesign/plugins/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css' 
,
'../MatiAssembler/Proyecto MatiAssembler/node_modules/adminbsb-materialdesign/plugins/waitme/waitMe.css'
,
'../MatiAssembler/Proyecto MatiAssembler/node_modules/adminbsb-materialdesign/plugins/bootstrap-select/css/bootstrap-select.css' 
,
'../MatiAssembler/Proyecto MatiAssembler/node_modules/adminbsb-materialdesign/css/style.css' 
,
'../MatiAssembler/Proyecto MatiAssembler/node_modules/adminbsb-materialdesign/css/themes/all-themes.css' ]
})
export class NavbarComponent implements OnInit {
  user; 

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
