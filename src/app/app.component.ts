import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/folder/login', icon: 'desktop' },
    { title: 'Home', url: '/folder/home', icon: 'home',requiresAuth:true },
    { title: 'Products', url: '/folder/products', icon: 'basket' ,requiresAuth:true},
    { title: 'ContactUs', url: '/folder/contact-us', icon: 'call' ,requiresAuth:true},
    { title: 'AboutUs', url: '/folder/about-us', icon: 'information-circle',requiresAuth:true },
   
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public isAuthenticated:boolean = false;
  constructor() {}
  updateAuthStatus(status: boolean) {
    this.isAuthenticated = status;
  }
}
