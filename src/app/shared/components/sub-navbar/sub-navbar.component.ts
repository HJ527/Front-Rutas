import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.scss']
})
export class SubNavbarComponent implements OnInit {

  constructor(public uiService:UiService,
              private router:Router
             ) { }

  ngOnInit(): void {
    
  }


  navegacion(i:number){
    if (i!==0) {
      this.router.navigate(['/',this.uiService.optionsSubnav[0],this.uiService.optionsSubnav[i]])
    }
  }


}
