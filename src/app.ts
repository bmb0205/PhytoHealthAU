import {Router, RouterConfiguration} from 'aurelia-router';
import {inject, autoinject} from 'aurelia-framework';

@autoinject
export class App {

  constructor(public router: Router) { 

  }
  
  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'PhytoHealth';
    config.map([
      { route: ['', 'home', '#'],  moduleId: './pages/home/home', name:'home' }
    ]);
  }
}
