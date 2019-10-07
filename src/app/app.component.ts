import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  public emp = [
    {
      title: 'Employee_Detail',
      url: '/employee-detail',
      //icon: 'home'
    },
    {
      title: 'Employee_Survey',
      url: '/employee-survey',
      //icon: 'list'
    },
    {
      title: 'Employee_Survey_Detail',
      url: '/survey-detail',
      //icon: 'list'
    }
  ];

  isemp = false;
  enable=true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getmenu()
  {
    if(this.isemp)
    {
      alert("No menus here...!!!");
    }
    else
    {
      return this.emp;
    }
  }
}
