import { GlobalService } from './../../services/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logindata!: string | null;
  currentUrl: any;
  constructor(private router: Router, private global: GlobalService) { 
    this.currentUrl = router.url
  }

  ngOnInit(): void {
    this.logindata = localStorage.getItem('username');
  }

  setId(id:number){
    this.global.updateProduct(id);
  }

  getCartCount() {
    return this.global.cartCount.getValue()
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
