import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public router: Router
    , private toastr: ToastrService
    , public authService: AuthService) { }

  ngOnInit() {
  }

  showMenu(){
    return this.router.url !== '/user/login';
  }

  getNome() {
    return sessionStorage.getItem('nome');
  }

  loginStatus() {
    return this.authService.loggedIn();
  }

  entrar() {
    this.router.navigate(['/user/login']);
  }

  logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('nome');
    //this.toastr.show('Logout');
    this.router.navigate(['/user/login']);
  }
}
